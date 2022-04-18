import { POKEMONS_ENDPOINT } from '../../../constants';

export type TPokemonData = {
  name: string;
};

type TReturnData = {
  data: TPokemonData[];
};

const GEN1_REQUEST = `${POKEMONS_ENDPOINT}pokemon/?limit=151`;

export async function fetchPokemonsRequest() {
  try {
    const fetchRes = await fetch(GEN1_REQUEST);
    if (!fetchRes.ok) {
      const error = await fetchRes.text();
      throw new Error(error);
    }
    const result = await fetchRes.json();
    return { data: result.results };
  } catch (err) {
    const error = err as string;
    throw new Error(error);
  }
}
