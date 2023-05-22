import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ForgotPasswordScreenStep1 from '../ForgotPasswordScreenStep1';
import ForgotPasswordScreenStep2 from '../ForgotPasswordScreenStep2';
import ForgotPasswordScreenStep3 from '../ForgotPasswordScreenStep3';
import ForgotPasswordScreenStep4 from '../ForgotPasswordScreenStep4';
import CreateAccountScreen from '../pages/CreateAccountScreen/CreateAccountScreen';
import LoginScreen from '../pages/LoginScreen/LoginScreen';
import { BottomTabNavigator } from './BottomTabNavigator';


const Stack = createNativeStackNavigator();

export const LoginStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      {/* Navigator to Login */}
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{title: 'Login'}}
      />
      {/* Navigator to Create Account Page */}
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccountScreen}
        options={{title: 'Creation compte'}}
      />
      {/* Navigator to ForgotPAssword Step 1 */}
      <Stack.Screen
        name="ForgotPasswordS1"
        component={ForgotPasswordScreenStep1}
        options={{title: 'Oubli de mot de passe'}}
      />
      {/* Navigator to ForgotPAssword Step 2 */}
      <Stack.Screen
        name="ForgotPasswordS2"
        component={ForgotPasswordScreenStep2}
        options={{title: 'Oubli de mot de passe'}}
      />
      {/* Navigator to ForgotPAssword Step 3 */}
      <Stack.Screen
        name="ForgotPasswordS3"
        component={ForgotPasswordScreenStep3}
        options={{title: 'Oubli de mot de passe'}}
      />
      {/* Navigator to ForgotPAssword Step 4 */}
      <Stack.Screen
        name="ForgotPasswordS4"
        component={ForgotPasswordScreenStep4}
        options={{title: 'Oubli de mot de passe'}}
      />
      {/* Navigator to Acceuil */}
      <Stack.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{title: 'Accueil'}}
      />

    </Stack.Navigator>
  );
};
