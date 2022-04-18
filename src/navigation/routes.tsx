import Home from '../modules/home/screens/HomeScreen';
import PokemonScreen from '../modules/pokemon/screens/PokemonScreen';
import { TRoute } from './types';

const APP_ROUTES: TRoute[] = [
  { name: 'Home', component: Home },
  { name: 'Pokemon', component: PokemonScreen },
];

export default APP_ROUTES;
