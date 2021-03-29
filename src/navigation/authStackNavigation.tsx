import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Greeting, Login, Registration } from '../containers';
import { NavigationConst } from '../constants';

const Stack = createStackNavigator();

export type IStackNavigatorType = {
  Greeting: undefined,
  Login: undefined,
  Registration: undefined,
};

export const AuthStackNavigation = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={NavigationConst.GREETING}
          options={{headerShown: false}}
          component={Greeting}
        />
        <Stack.Screen
          name={NavigationConst.LOGIN}
          options={{headerShown: false}}
          component={Login}
        />
        <Stack.Screen
          name={NavigationConst.REGISTRATION}
          options={{headerShown: false}}
          component={Registration}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
