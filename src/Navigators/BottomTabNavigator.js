import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../HomeScreen';
import {LoginStackNavigator} from './LoginStackNavigator';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Accueil" component={HomeScreen} />
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
