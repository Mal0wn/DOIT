/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react';
import {C_Blue_Background, C_Purple_Underline, C_White} from './lib/colors';
import {useNavigation} from '@react-navigation/native';

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ForgotPasswordStepHeader from './component/ForgotPasswordStepHeader';

function ForgotPasswordScreenStep2() {
  const navigation = useNavigation();
  const [errorCode, setErrorCode] = useState(false);
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const fifthInput = useRef();
  const sixthInput = useRef();

  const onGoToStep3 = () => {
    navigation.navigate('ForgotPasswordS3');
  };

  const onCheckCode = () => {
    // BACK !
    onGoToStep3();
  };

  useEffect(() => {
    firstInput.current.focus();
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <ForgotPasswordStepHeader step={2} />
      </View>
      <View style={styles.container}>
        <View style={styles.visibleMessage}>
          <Text
            style={
              errorCode ? styles.visibleMessageText : styles.hideTextMessage
            }>
            Le code n'est composé que de chiffres.
          </Text>
        </View>
        <View style={styles.containerInputs}>
          <TextInput
            style={styles.inputNumber}
            onChangeText={text => {
              if (/[0-9]/.test(text)) {
                setErrorCode(false);
                text && secondInput.current.focus();
              } else {
                setErrorCode(true);
              }
            }}
            ref={firstInput}
            keyboardType="number-pad"
            maxLength={1}
          />
          <TextInput
            style={styles.inputNumber}
            onChangeText={text => {
              if (/[0-9]/.test(text)) {
                setErrorCode(false);
                text ? thirdInput.current.focus() : firstInput.current.focus();
              } else {
                setErrorCode(true);
              }
            }}
            ref={secondInput}
            keyboardType="number-pad"
            maxLength={1}
          />
          <TextInput
            style={styles.inputNumber}
            onChangeText={text => {
              if (/[0-9]/.test(text)) {
                setErrorCode(false);
                text
                  ? fourthInput.current.focus()
                  : secondInput.current.focus();
              } else {
                setErrorCode(true);
              }
            }}
            ref={thirdInput}
            keyboardType="number-pad"
            maxLength={1}
          />
          <TextInput
            style={styles.inputNumber}
            onChangeText={text => {
              if (/[0-9]/.test(text)) {
                setErrorCode(false);
                text ? fifthInput.current.focus() : thirdInput.current.focus();
              } else {
                setErrorCode(true);
              }
            }}
            ref={fourthInput}
            keyboardType="number-pad"
            maxLength={1}
          />
          <TextInput
            style={styles.inputNumber}
            onChangeText={text => {
              if (/[0-9]/.test(text)) {
                setErrorCode(false);
                text ? sixthInput.current.focus() : fourthInput.current.focus();
              } else {
                setErrorCode(true);
              }
            }}
            ref={fifthInput}
            keyboardType="number-pad"
            maxLength={1}
          />
          <TextInput
            style={styles.inputNumber}
            onChangeText={text => {
              if (/[0-9]/.test(text)) {
                setErrorCode(false);
                text ? onCheckCode() : fifthInput.current.focus();
              } else {
                setErrorCode(true);
              }
            }}
            ref={sixthInput}
            keyboardType="number-pad"
            maxLength={1}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  visibleMessage: {
    width: '100%',
    paddingTop: '24%',
    height: '20%',
    display: 'flex',
    flexDirection: 'column',
  },
  visibleMessageText: {
    textAlign: 'center',
    color: C_Purple_Underline,
  },
  hideTextMessage: {
    display: 'none',
  },
  containerInputs: {
    height: '80%',
    paddingTop: '30%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  inputNumber: {
    width: 50,
    height: 100,
    backgroundColor: C_Purple_Underline,
    color: C_White,
    fontSize: 60,
    borderRadius: 8,
    textAlign: 'center',
  },
  container: {
    width: '100%',
    height: '70%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  header: {
    width: '100%',
    height: '20%',
  },
  page: {
    width: '100%',
    height: '100%',
    backgroundColor: C_Blue_Background,
  },
});

export default ForgotPasswordScreenStep2;
