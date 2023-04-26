import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../HomeScreen';
import {LoginStackNavigator} from './LoginStackNavigator';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Accueil"
      screenOptions={{headerShown: false}}>
      {/* Navigator to Accueil */}
      <Tab.Screen name="Accueil" component={HomeScreen} />
      {/* Navigator to Login Page */}
      <Tab.Screen
        name="Déconnexion"
        component={LoginStackNavigator}
        options={{
          tabBarStyle: {display: 'none'},
        }}
      />
      {/* Add Some routes to the bottom navigator */}
    </Tab.Navigator>
  );
};
