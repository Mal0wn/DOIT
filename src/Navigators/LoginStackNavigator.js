import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import CreateAccountScreen from '../CreateAccountScreen';
import ForgotPasswordScreenStep1 from '../ForgotPasswordScreenStep1';
import ForgotPasswordScreenStep2 from '../ForgotPasswordScreenStep2';
import ForgotPasswordScreenStep3 from '../ForgotPasswordScreenStep3';
import ForgotPasswordScreenStep4 from '../ForgotPasswordScreenStep4';
// import HomeScreen from '../HomeScreen';
import LoginScreen from '../LoginScreen';
import {BottomTabNavigator} from './BottomTabNavigator';

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
        name="ForgotPasswordS1"
        component={ForgotPasswordScreenStep1}
        options={{title: 'Oubli de mot de passe'}}
      />
      <Stack.Screen
        name="ForgotPasswordS2"
        component={ForgotPasswordScreenStep2}
        options={{title: 'Oubli de mot de passe'}}
      />
      <Stack.Screen
        name="ForgotPasswordS3"
        component={ForgotPasswordScreenStep3}
        options={{title: 'Oubli de mot de passe'}}
      />
      <Stack.Screen
        name="ForgotPasswordS4"
        component={ForgotPasswordScreenStep4}
        options={{title: 'Oubli de mot de passe'}}
      />
      <Stack.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{title: 'Accueil'}}
      />
    </Stack.Navigator>
  );
};
