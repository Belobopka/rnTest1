import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import BackArrow from '../../../../common/components/BackArrow';
import Rcm from '../../../../common/components/Rcm';
import Screen from '../../../../common/components/Screen';
import { useAppDispatch, useAppSelector } from '../../../../common/hooks';
import { RootStackParamList } from '../../../../navigation/types';
import PokemonItem from '../../components/PokemonItem';
import { fetchPokemon } from '../../slices/pokemonSlice';
import styles from './styles';
type RouteProps = RouteProp<RootStackParamList, 'Pokemon'>;

export function PokemonScreen() {
  const route = useRoute<RouteProps>();
  const dispatch = useAppDispatch();
  const params = route?.params;
  const id = params.id;
  const number = params.number;
  const navigation = useNavigation();
  const status = useAppSelector(state => state.pokemon.status);
  const item = useAppSelector(state => state.pokemon.item);
  const error = useAppSelector(state => state.pokemon.error);
  const isLoading = status === 'loading';
  const isEmpty = !item;

  useEffect(() => {
    dispatch(fetchPokemon(id));
  }, [dispatch, id]);

  const handleGoBack = useCallback(() => navigation.goBack(), [navigation]);

  return (
    <Screen style={styles.root}>
      <BackArrow />
      <View style={styles.itemContainer}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Rcm isEmpty={isEmpty} isLoading={isLoading} error={error}>
            {item ? <PokemonItem number={number} item={item} /> : null}
          </Rcm>
        </ScrollView>
      </View>
    </Screen>
  );
}
