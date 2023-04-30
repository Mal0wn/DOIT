import React, { useState, useContext, useEffect} from 'react';
import {APIURL} from '@env'
import {
  C_Blue_Background,
  C_White,
  C_Purple_Underline,
  C_Back_Write,
} from '../lib/colors';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView
} from 'react-native';
import axios from 'axios';
import {TokenContext} from '../context/TokenContext';
import { UserContext } from '../context/UserContext';
import { Message } from './message.component';
import { GiftedChat } from 'react-native-gifted-chat';

export default function MessageScreen() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const user = useContext(UserContext);
  const token = useContext(TokenContext);
  //console.log(user);
  const sendMessage = (message) => {
    setMessages((messagesArray) => [...messagesArray, message]);
  }
  const onTest = () => {
    console.log(messages[0]);
  }
  const getMessages = () => {
    let requrl = `${APIURL}/message/conversation?uid1=${58}&uid2=${60}&mission=${48}`;
    fetch( requrl,{ method: 'GET', headers: { Authorization: `Bearer ${token[0]}`}})
      .then((response) => response.json())
      .then(json => {
        let test = [];
        json.forEach(el => {
          let tmp = {
            id: el.id,
            text: el.message,
            sent: el.id_send == 58/*  user[0].id  */ ? true: false,
            createdAt: new Date(el.time),
          };
          setMessages((messagesArray) => [...messagesArray, tmp]);
        });
        //setMessages(json);
      }).catch(error => {
        console.log("error="+error);
    }).finally(setLoading(false));
  }
  useEffect(() => {
    setMessages([]);
    setLoading(true);
    getMessages();
  }, []);
  return (
    <View style={styles.container}>
      {isLoading ? (
        <View>
          <Text style={{textAlign: 'center'}}>loading...</Text>
        </View>
        ) : (
          <>
            <ScrollView style={styles.scrollable}>
              {messages.map((el) => (
                <Message
                  message={el}
                />
              ))}
            </ScrollView>
            <TextInput
              style={styles.inputText}
              placeholder="Ecrivez un message .."
              onChange={value => setMessage(value.nativeEvent.text)}
              value={message}
            />
          </>
        )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollable: {
    flex: 1,
    height: 500,
/*     backgroundColor: '#6F6F6F' */
  },
  inputText: {
    width: '100%',
    backgroundColor: C_White,
    //position: 'absolute',
    verticalAlign: 'bottom',
    //bottom: 0,
    alignSelf: 'center',
  }
});