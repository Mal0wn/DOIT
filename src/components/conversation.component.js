import React, { useState, useContext, useEffect } from 'react';
import {
  C_Blue_Background,
  C_White,
  C_Purple_Underline,
  C_Back_Write,
} from '../lib/colors';
import { useNavigation } from '@react-navigation/native';
import {APIURL} from '@env'

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Button
} from 'react-native';
import axios from 'axios';
import {TokenContext} from '../context/TokenContext';
import Slider from '@react-native-community/slider';
import { UserContext } from '../context/UserContext';

export default function ConversationScreen(userID, missionID) {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const user = useContext(UserContext);
  const token = useContext(TokenContext);
  
  const getUsers = () => {
    let requrl = `${APIURL}/user/conversation/${60}`;
    fetch( requrl,{ method: 'GET', headers: { Authorization: `Bearer ${token[0]}`}})
      .then((response) => response.json())
      .then(json => {
        json.forEach(el => {
          setUsers((userArray) => [...userArray, el]);
        });
      }).catch(error => {
      console.log("error="+error);
    }).finally(setLoading(false));
  }


  useEffect(() => {
    setUsers([]);
    setLoading(true);
    getUsers();
  }, []);
  return (
    <View>
    {isLoading ? (
      <View>
        <Text style={{textAlign: 'center'}}>loading...</Text>
      </View>
      ) : (
        <>
          {users.map( (el) => (
              <View>
                <View>
                  {el.picture == null ? : <Image></Image>}
                </View>
              </View>
              <Text style={{textAlign: 'center'}}>{el.email}</Text>
            )
          )}
        </>
  )}
  </View>)
}