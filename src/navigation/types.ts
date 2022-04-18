import { NavigationProp } from '@react-navigation/native';
import React from 'react';

export type TNavigationDefaultProp = NavigationProp<RootStackParamList, any>;

export type TRoute = {
  name: 'Home' | 'Pokemon';
  component: React.FunctionComponent;
};

export type RootStackParamList = {
  Home: undefined;
  Pokemon: { id: string; number: string };
};
