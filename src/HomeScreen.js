  /* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import { API_BASE_URL } from './lib/globalVariables';
import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {TokenContext} from './context/TokenContext';

import { UserContext } from './context/UserContext';


function HomeScreen() {
  const navigation = useNavigation();
  const [token, setToken] = useContext(TokenContext);
  const [user , setUser] = useContext(UserContext)
  
  console.log(" HS token: " + token)
  console.log("HS List user: " + user )
  

  useEffect(() => {
    if (token === undefined ) {
      navigation.navigate('Déconnexion');
    } else {
      console.log("UseEffect Else HS");
      

    }
  }, []);


  return (
    <View style={{flex: 1, padding: 24}}>
      <Text> DO IT 4 ME </Text>
      <TouchableOpacity onPress={() => navigation.navigate("MissionList")}> 
                  <Text>Liste des Missions</Text> 
      </TouchableOpacity>
      <TouchableOpacity >
        <Text> Profil </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text> BLABLA</Text> 
      </TouchableOpacity>




    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  scrollView: {
    flex: 1,
  },

  box: {
    flex: 4,
    backgroundColor: '#CDB4DB',
    width: '97%',
    margin: '2%',
    borderRadius: 5,
    minHeight: 100,
    height: '100%',
  },
  containTitle: {
    backgroundColor: '#5C9EAD',

    borderRadius: 5,
    padding: 10,
  },
  title: {
    color: '#222823',
    padding: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: 5,
  },
  imageDescContain: {
    width: '90%',
    minHeight: '50%',
  },

  postPicture: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  containInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
    padding: 20,
  },
});

export default HomeScreen;