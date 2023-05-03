import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import DisplayMission from '../DisplayMission';
import HomeScreen from '../HomeScreen';
import {LoginStackNavigator} from './LoginStackNavigator';
import { MissionStackNavigator, MyStack } from './MissionStackNavigator';
import CreateMission from '../CreateMission';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} initialRouteName="Accueil">
      <Tab.Screen name="Accueil" component={HomeScreen} />
      
  <Tab.Screen
        name="MissionList"
        component={MissionStackNavigator}
        
  />
  <Tab.Screen
        name="Add Mission"
        component={CreateMission} 
  />
    <Tab.Screen
        name="Déconnexion"
        component={LoginStackNavigator}
        options={{
          tabBarStyle: {display: 'none'},
        }}
      />
    </Tab.Navigator>
  );
};
