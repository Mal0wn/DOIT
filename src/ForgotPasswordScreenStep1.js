/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState, useContext} from 'react';
import {
  C_Back_Write,
  C_Blue_Background,
  C_GREY,
  C_White,
  C_Grey,
  C_Green,
} from './lib/colors';
import {useNavigation} from '@react-navigation/native';

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ForgotPasswordStepHeader from './component/ForgotPasswordStepHeader';
import axios from 'axios';
import {API_BASE_URL} from './lib/globalVariables';
import {TokenContext} from './context/TokenContext';

function ForgotPasswordScreenStep1() {
  const navigation = useNavigation();
  const [telNumber, setTelNumber] = useState('');
  const [isTelNumberEmpty, setIsTelNumberEmpty] = useState(true);
  const [token, setToken] = useContext(TokenContext);

  const onGoToStep2 = () => {
    navigation.navigate('ForgotPasswordS2');
  };

  const onSendSMS = async () => {
    let params = {phoneNumber: telNumber};
    onGoToStep2();
    // BACK !
    // await axios
    //   .get(API_BASE_URL + '/forgotPassword/', params, {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
    //   .then(response => {
    //     console.log(response.data[0]);
    //     onGoToStep2();
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };

  useEffect(() => {
    setIsTelNumberEmpty(true);
    if (
      !(telNumber === '' || telNumber === 'undefined' || telNumber === null)
    ) {
      if (/0[6,7]{1}[0-9]{8}/.test(telNumber)) {
        if (telNumber.length === 10) {
          setIsTelNumberEmpty(false);
        }
      }
    }
  }, [telNumber]);

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <ForgotPasswordStepHeader step={1} navigate="Login" />
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>
          Cliquez sur le bouton pour envoyer un code de reinitialisation par
          SMS.
        </Text>
        <View>
          <Text style={styles.text}>
            Entrez le numéro de téléphone lié au compte :
          </Text>
          <TextInput
            keyboardType="number-pad"
            style={styles.textinput}
            placeholder="0605040302"
            maxLength={10}
            onChangeText={e => {
              setTelNumber(e);
            }}
          />
        </View>

        <View style={styles.centralButton}>
          <TouchableOpacity
            style={
              isTelNumberEmpty
                ? styles.submitButtonDisabled
                : styles.submitButton
            }
            disabled={isTelNumberEmpty}
            onPress={() => {
              onSendSMS();
            }}>
            <Text style={styles.submitText}>Envoyer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centralButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  submitText: {
    color: C_White,
    textAlign: 'center',
  },
  textinput: {
    textAlign: 'center',
    fontSize: 16,
    color: C_GREY,
  },
  text: {
    textAlign: 'center',
    color: C_Back_Write,
    fontSize: 16,
  },
  container: {
    marginTop: 70,
    width: '100%',
    height: '40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingHorizontal: 40,
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
  submitButtonDisabled: {
    backgroundColor: C_Grey,
    width: 100,
    height: 40,
    paddingTop: 10,
    borderRadius: 8,
  },
  submitButton: {
    backgroundColor: C_Green,
    width: 100,
    height: 40,
    paddingTop: 10,
    borderRadius: 8,
  },
});

export default ForgotPasswordScreenStep1;
