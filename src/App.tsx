import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {TokenContext} from './context/TokenContext';
import {UserContext} from './context/UserContext';
import {BottomTabNavigator} from './Navigators/BottomTabNavigator';

import 'react-native-gesture-handler';

function App() {
  const [user, setUser] = useState();
  const [token, setToken] = useState();

  return (
    <SafeAreaView style={styles.main}>
      <NavigationContainer independent={true}>
        {/* Context Provider to use Token on all the app */}
        <TokenContext.Provider value={[token, setToken]}>
          {/* Context Provider to use userInfos on all the app */}
          <UserContext.Provider value={[user, setUser]}>
            {/* Bottom Navigation */}

            <BottomTabNavigator />
          </UserContext.Provider>
        </TokenContext.Provider>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor : "#CDB4DB"
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
