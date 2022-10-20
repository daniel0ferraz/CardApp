import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import RegisterExtract from '../screens/RegisterExtract';
const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <>
      <Navigator screenOptions={{
        headerShown: false,
      }}>
        <Screen name="Home" component={Home} />
        <Screen name="RegisterExtract" component={RegisterExtract} />
      </Navigator>
    </>
  );
}
