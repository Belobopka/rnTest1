import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import StackNavigator from './StackNavigator';

function AppNavigation() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default AppNavigation;
