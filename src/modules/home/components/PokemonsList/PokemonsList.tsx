import React, { useMemo } from 'react';
import { RefreshControl, ScrollView } from 'react-native';
import Rcm from '../../../../common/components/Rcm';
import { HomeState, TExtendedPokemonData } from '../../slices/pokemonsSlice';
import PokemonListItem from '../PokemonListItem';
import styles from './styles';

interface IProps {
  filter?: string;
  onPress?: (item: TExtendedPokemonData) => void;
  pokemons: HomeState;
  onRefresh: () => void;
  refreshing?: boolean;
  error?: string;
  isEmpty?: boolean;
  isLoading?: boolean;
}

export function PokemonsList(props: IProps) {
  const { filter, onPress, pokemons, refreshing, onRefresh, error, isEmpty, isLoading } = props;
  const { ids, entities } = pokemons;

  const items = useMemo(() => {
    if (filter) {
      return ids.filter(id => id.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1, []);
    }
    return ids;
  }, [filter, ids]);

  const refreshControl = useMemo(
    () => <RefreshControl onRefresh={onRefresh} refreshing={!!refreshing} />,
    [onRefresh, refreshing],
  );

  return (
    <ScrollView refreshControl={refreshControl} contentContainerStyle={styles.scrollContainer}>
      <Rcm isEmpty={isEmpty} isLoading={isLoading} error={error} />
      {items.map(id => (
        <PokemonListItem onPress={onPress} key={id} item={entities[id]} />
      ))}
    </ScrollView>
  );
}
