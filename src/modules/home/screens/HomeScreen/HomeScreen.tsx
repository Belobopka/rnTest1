import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect } from 'react';
import { Text, View } from 'react-native';
import FindInput from '../../../../common/components/FindInput';
import Screen from '../../../../common/components/Screen';
import { useAppDispatch, useAppSelector } from '../../../../common/hooks';
import { TNavigationDefaultProp } from '../../../../navigation/types';
import PokemonsList from '../../components/PokemonsList';
import { fetchPokemons, getPokemons, TExtendedPokemonData } from '../../slices/pokemonsSlice';
import styles from './styles';

export function HomeScreen() {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<TNavigationDefaultProp>();
  const [value, setValue] = React.useState('');

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  const status = useAppSelector(state => state.pokemons.status);
  const error = useAppSelector(state => state.pokemons.error);
  const handleFindChange = useCallback((text: string) => {
    setValue(text);
  }, []);

  const handleItemPress = useCallback(
    (item: TExtendedPokemonData) => {
      navigation.navigate('Pokemon', { id: item.name, number: String(item.number) });
    },
    [navigation],
  );

  const handleRefresh = useCallback(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  const pokemons = useAppSelector(getPokemons);
  const { ids } = pokemons;
  const isLoading = status === 'loading';
  const isEmpty = ids.length === 0;
  const renderComponent = useCallback(
    () => (
      <>
        <PokemonsList
          isEmpty={isEmpty}
          isLoading={isLoading}
          error={error}
          onRefresh={handleRefresh}
          refreshing={isLoading}
          pokemons={pokemons}
          onPress={handleItemPress}
          filter={value}
        />
      </>
    ),
    [error, handleItemPress, handleRefresh, isEmpty, isLoading, pokemons, value],
  );

  const renderTitle = useCallback(
    () => (
      <View style={styles.title}>
        <Text style={styles.titleText}>Pokédex</Text>
      </View>
    ),
    [],
  );

  const renderFind = useCallback(
    () => (
      <View style={styles.findContainer}>
        <FindInput onChangeText={handleFindChange} value={value} />
      </View>
    ),
    [handleFindChange, value],
  );

  const renderHeader = useCallback(
    () => (
      <View style={styles.header}>
        {renderTitle()}
        {renderFind()}
      </View>
    ),
    [renderFind, renderTitle],
  );

  return (
    <Screen>
      {renderHeader()}
      {renderComponent()}
    </Screen>
  );
}
