/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

import HomeScreen from "./HomeScreen"
import DisplayMission from './DisplayMission';
import CreateMission from './CreateMission';



const MissionStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function MissionStackScreen() {
  return (
    <NavigationContainer independent={true}>
      <MissionStack.Navigator>
          <MissionStack.Screen name="Home" component={HomeScreen} />
          <MissionStack.Screen name="DisplayMission" component={DisplayMission} />
      </MissionStack.Navigator>
    </NavigationContainer>
      
  )
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.main}>
      <NavigationContainer independent={true}>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={MissionStackScreen} />
        <Tab.Screen name="CreateMission" component={CreateMission} />
      </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
