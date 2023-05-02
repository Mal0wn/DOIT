import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import DisplayMission from '../DisplayMission';
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
      <Tab.Screen name=" " component={DisplayMission} 
      options={{
          tabBarIconStyle: { display: "none" },
          
    
        }}
        />
        
    </Tab.Navigator>
  );
};


