import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store/store';
import { fetchPokemonRequest, TPokemonData } from './pokemonAPI';

type TIdentifier = string | number;
export type TExtendedPokemonData = TPokemonData;

interface PokemonState {
  item: TExtendedPokemonData | null;
  status: 'idle' | 'loading' | 'failed';
  error?: string;
}

const initialState: PokemonState = {
  item: null,
  status: 'loading',
};

export const fetchPokemon = createAsyncThunk<TExtendedPokemonData, string, { state: { pokemon: PokemonState } }>(
  'fetchPokemon',
  async (id: string) => {
    const response = await fetchPokemonRequest(id);
    return response.data;
  },
);

export const counterSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPokemon.pending, state => {
        state.status = 'loading';
        state.error = undefined;
      })
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.status = 'idle';
        state.item = action.payload;
        state.error = undefined;
      })
      .addCase(fetchPokemon.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action?.error.message;
      });
  },
});

export const getPokemon = (state: RootState) => state.pokemon.item;

export default counterSlice.reducer;
