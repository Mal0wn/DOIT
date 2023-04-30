import React, { useState, useContext } from 'react';
import {
  C_Blue_Background,
  C_White,
  C_Purple_Underline,
  C_Back_Write,
} from '../lib/colors';
import { UserContext } from '../context/UserContext';

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Button
} from 'react-native';

export function Message(message) {
  let tmp = message.message;
  let date = new Date(tmp.createdAt);
  let dateNow = new Date();
  let dateStr = `${date.getDate() == dateNow.getDate() ? 'today': `${(date.getDay()<10?'0':'')}${date.getDay()}.${(date.getMonth()<10?'0':'')}${date.getMonth()}.${date.getFullYear().toString().substr(-2)}`}`
  dateStr = `${dateStr}  ${(date.getHours()<10?'0':'')}${date.getHours()}:${(date.getMinutes()<10?'0':'')}${date.getMinutes()}`
  return (
    <View style={styles.container}>
      <Text style={tmp.sent == true ? styles.dateLeft: styles.dateRight}>{dateStr}</Text>
      <View style={tmp.sent == true ? styles.senderContainer: styles.receiverContainer}>
        <Text>{tmp.text+tmp.text}</Text>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  senderContainer: {
    width: '70%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    backgroundColor: C_White,
    padding: 10,
    marginBottom: 20,
    marginLeft: 10,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  receiverContainer: {
    width: '70%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    backgroundColor: C_Blue_Background,
    padding: 10,
    marginBottom: 20,
    marginRight: 10,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  dateLeft: {
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: 10
  },
  dateRight: {
    textAlign: 'right',
    alignSelf: 'flex-end',
    marginRight: 10
  }
});