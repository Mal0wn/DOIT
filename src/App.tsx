import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {TokenContext} from './context/TokenContext';
import {UserContext} from './context/UserContext';
import {BottomTabNavigator} from './Navigators/BottomTabNavigator';
import {ForgotPasswordContext} from './context/ForgotPasswordContext';
import {PhoneContext} from './context/PhoneContext';

function App() {
  // Variables Contexts
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const [code, setCode] = useState();
  const [phone, setPhone] = useState();

  return (
    <SafeAreaView style={styles.main}>
      <NavigationContainer independent={true}>
        {/* Context Provider to use Token on all the app */}
        <TokenContext.Provider value={[token, setToken]}>
          {/* Context Provider to use userInfos on all the app */}
          <UserContext.Provider value={[user, setUser]}>
            {/* Context Provider to use the Code to forgot pasword on all the app */}
            <ForgotPasswordContext.Provider value={[code, setCode]}>
              {/* Context Provider to use the phoneNumber entred to forgotPassword on all the app */}
              <PhoneContext.Provider value={[phone, setPhone]}>
                {/* Navigator */}
                <BottomTabNavigator />
              </PhoneContext.Provider>
            </ForgotPasswordContext.Provider>
          </UserContext.Provider>
        </TokenContext.Provider>
      </NavigationContainer>
    </SafeAreaView>
  );
}

// style
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
