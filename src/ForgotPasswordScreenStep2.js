/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState, useContext} from 'react';
import {C_Blue_Background, C_Purple_Underline, C_White} from './lib/colors';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {ForgotPasswordContext} from './context/ForgotPasswordContext';
import ForgotPasswordStepHeader from './component/ForgotPasswordStepHeader';

function ForgotPasswordScreenStep2() {
  // variables
  const navigation = useNavigation();
  const [errorCode, setErrorCode] = useState(false);
  const firstInput = useRef(0);
  const secondInput = useRef(0);
  const thirdInput = useRef(0);
  const fourthInput = useRef(0);
  const fifthInput = useRef(0);
  const sixthInput = useRef(0);
  const [firstInputCode, setFirstInputCode] = useState();
  const [secondInputCode, setSecondInputCode] = useState();
  const [thirdInputCode, setThirdInputCode] = useState();
  const [fourthInputCode, setFourthInputCode] = useState();
  const [fifthInputCode, setFifthInputCode] = useState();
  const [code, setCode] = useContext(ForgotPasswordContext);

  // Methode to check if code is ok, then go to next step
  const onCheckCode = sixthInputText => {
    let codeEntred =
      firstInputCode +
      secondInputCode +
      thirdInputCode +
      fourthInputCode +
      fifthInputCode +
      sixthInputText;

    if (codeEntred.length === 6) {
      if (code === codeEntred) {
        setErrorCode(false);
        navigation.navigate('ForgotPasswordS3');
      } else {
        setErrorCode(true);
        console.log('code error');
      }
    }
  };

  // on load page
  useEffect(() => {
    firstInput.current.focus();
    console.log(code); //let for tests
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <ForgotPasswordStepHeader step={2} />
      </View>
      <View style={styles.container}>
        <View style={styles.visibleMessage}>
          {/* Manage error on code */}
          <Text
            style={
              errorCode ? styles.visibleMessageText : styles.hideTextMessage
            }>
            Le code n'est composé que de chiffres.
          </Text>
        </View>
        {/* Inputs for the code */}
        <View style={styles.containerInputs}>
          <TextInput
            style={styles.inputNumber}
            onChangeText={text => {
              if (/[0-9]/.test(text)) {
                setErrorCode(false);
                setFirstInputCode(text);
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
                setSecondInputCode(text);
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
                setThirdInputCode(text);
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
                setFourthInputCode(text);
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
                setFifthInputCode(text);
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
                onCheckCode(text);
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

// style
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
