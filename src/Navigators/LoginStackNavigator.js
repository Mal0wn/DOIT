import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import CreateAccountScreen from '../CreateAccountScreen';
import HomeScreen from '../HomeScreen';
import LoginScreen from '../LoginScreen';

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
        component={HomeScreen}
        options={{title: 'Accueil'}}
      />
    </Stack.Navigator>
  );
};
