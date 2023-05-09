import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import DisplayMission from '../pages/DisplayMission/DisplayMission';
import HomeScreen from '../pages/HomeScreen/HomeScreen';
import {LoginStackNavigator} from './LoginStackNavigator';
import { MissionStackNavigator, MyStack } from './MissionStackNavigator';
import CreateMission from '../pages/CreateMission/CreateMission';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont().then();

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator 
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Accueil') {
          iconName = focused
            ? 'home'
            : 'home-outline';
        } else if (route.name === 'MissionList') {
          iconName = focused ? 'list' : 'list-outline';
        } else if (route.name === 'Add Mission') {
          iconName = focused ? 'add-circle' : 'add-circle-outline';
        } else if (route.name === 'Déconnexion') {
          iconName = focused ? 'cloud-offline' : 'cloud-offline';
        }
        // POUR JB  Decommente quand ta route Conversation sera ok 
        /*
        else if (route.name === 'Conversation') {
          iconName = focused ? 'mail' : 'mail-outline';
        }
        */

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;

      },
      tabBarActiveTintColor: '#7D1D3F',
      tabBarInactiveTintColor: '#7D1D3F',
      tabBarActiveBackgroundColor: '#CDB4DB',
      tabBarInactiveBackgroundColor: '#CDB4DB',
    
    })}

    initialRouteName="Accueil">
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
