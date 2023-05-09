import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import CreateAccountScreen from '../pages/CreateAccountScreen/CreateAccountScreen';
import HomeScreen from '../pages/HomeScreen/HomeScreen';
import LoginScreen from '../pages/LoginScreen/LoginScreen';
import { BottomTabNavigator } from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

export const LoginStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{title: 'Login'}}
      />
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccountScreen}
        options={{title: 'Creation compte'}}
      />
      <Stack.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{title: 'Accueil'}}
      />

    </Stack.Navigator>
  );
};
