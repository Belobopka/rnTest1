import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer/dist/internal';
import { RootState } from '../../../app/store/store';
import { fetchPokemonsRequest, TPokemonData } from './pokemonsAPI';

type TIdentifier = string | number;
export type TExtendedPokemonData = TPokemonData & { number: number };
type TEntity = Record<TIdentifier, TExtendedPokemonData>;

export interface HomeState {
  ids: TIdentifier[];
  entities: TEntity;
  status: 'idle' | 'loading' | 'failed';
  error?: string;
}

const initialState: HomeState = {
  ids: [],
  entities: {},
  status: 'loading',
};

const normalizeItems = (state: WritableDraft<HomeState>, newData: TPokemonData[]) => {
  const newIds = [...state.ids];
  const newEntities = newData.reduce(
    (accumulator: TEntity, newEntity, index) => {
      if (!accumulator[newEntity.name]) {
        newIds.push(newEntity.name);
        accumulator[newEntity.name] = { ...newEntity, number: index + 1 };
      }
      return accumulator;
    },
    { ...state.entities },
  );
  return { ids: newIds, entities: newEntities };
};

export const fetchPokemons = createAsyncThunk<TPokemonData[], undefined, { state: { pokemons: HomeState } }>(
  'home/fetchPokemons',
  async () => {
    const response = await fetchPokemonsRequest();
    return response.data;
  },
);

export const counterSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<TPokemonData[]>) => {
      const normalizedState = normalizeItems(state, action.payload);
      return { ...normalizedState, status: 'idle' };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPokemons.pending, state => {
        state.status = 'loading';
        state.error = undefined;
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.status = 'idle';
        const normalizedState = normalizeItems(state, action.payload);
        state.ids = normalizedState.ids;
        state.entities = normalizedState.entities;
        state.error = undefined;
      })
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action?.error.message;
      });
  },
});

export const { add } = counterSlice.actions;

export const getPokemons = (state: RootState) => state.pokemons;

export default counterSlice.reducer;
