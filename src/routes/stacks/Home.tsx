import { createStackNavigator } from "@react-navigation/stack";

import React from 'react';
import { Home } from 'src/screens/Home';

export const HomeStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};