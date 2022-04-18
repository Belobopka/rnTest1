import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import pokemonsReducer from '../../modules/home/slices/pokemonsSlice';
import pokemonReducer from '../../modules/pokemon/slices/pokemonSlice';
export const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer,
    pokemon: pokemonReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
