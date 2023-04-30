import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../HomeScreen';
import {LoginStackNavigator} from './LoginStackNavigator';
import SearchScreen from '../search.screen';
import ChatScreen from '../components/chat.component';
import ConversationScreen from '../components/conversation.component';

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
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{title: 'Search'}}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{title: 'Messages'}}
      />
      <Tab.Screen
        name="Conversations"
        component={ConversationScreen}
        options={{title: 'Conversations'}}
      />
    </Tab.Navigator>
  );
};
