import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Greeting, Login, Registration } from "../greeting";

const Stack = createStackNavigator();

export const UnauthorizedRoot = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"Greeting"}
          options={{headerShown: false}}
          component={Greeting}
        />
        <Stack.Screen
          name={"Login"}
          options={{headerShown: false}}
          component={Login}
        />
        <Stack.Screen
          name={"Registration"}
          options={{headerShown: false}}
          component={Registration}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
