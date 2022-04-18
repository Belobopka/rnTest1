import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import APP_ROUTES from './routes';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={APP_ROUTES[0].name}>
      {APP_ROUTES.map(
        ({ name, component }) => (
          <Stack.Screen key={name} name={name} component={component} />
        ),
        [],
      )}
    </Stack.Navigator>
  );
}

export default StackNavigator;
