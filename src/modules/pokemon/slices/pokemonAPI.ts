import { POKEMONS_ENDPOINT } from '../../../constants';

type TStat = { base_stat: string; stat: { name: string; url: string } };

export type TPokemonData = {
  name: string;
  height: string;
  id: string;
  weight: string;
  types: { type: { name: string } }[];
  base_experience: string;
  stats: TStat[];
};

const POKEMON_REQUEST = `${POKEMONS_ENDPOINT}pokemon/`;

export async function fetchPokemonRequest(id: string | number) {
  try {
    const fetchRes = await fetch(`${POKEMON_REQUEST}${id}`);
    const result = await fetchRes.json();
    return { data: result };
  } catch (err) {
    const error = err as string;
    throw new Error(error.toString());
  }
}
