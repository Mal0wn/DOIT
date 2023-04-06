/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {C_Blue_Background, C_Purple_Underline, C_White} from './lib/colors';
import {useNavigation} from '@react-navigation/native';
import Check from './assets/check2.png';

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ForgotPasswordStepHeader from './component/ForgotPasswordStepHeader';
function ForgotPasswordScreenStep4() {
  const navigation = useNavigation();

  const onGoToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <ForgotPasswordStepHeader location="ForgotPasswordS4" step={4} />
      </View>
      <View style={styles.container}>
        <View style={styles.imageView}>
          <Image style={styles.img} source={Check} />
        </View>

        <Text style={styles.textCenter}>Changement éffectué ! </Text>
        <Text style={styles.textCenter}>Bon retour parmis nous ! :)</Text>
        <View style={styles.displayCenter}>
          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={() => {
              onGoToLogin();
            }}>
            <Text style={styles.textButton}>Connexion</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  displayCenter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textButton: {
    color: C_White,
    textAlign: 'center',
    fontSize: 20,
  },
  buttonLogin: {
    marginTop: '10%',
    backgroundColor: C_Purple_Underline,
    width: 300,
    height: 40,
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCenter: {
    fontSize: 20,
    textAlign: 'center',
  },
  imageView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: '20%',
  },
  img: {
    width: 80,
    height: 80,
  },
  container: {
    width: '80%',
    height: '60%',
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: '10%',
    justifyContent: 'center',
    alignSelf: 'center',
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
    backgroundColor: 'red',
  },
  submitButton: {
    backgroundColor: 'green',
  },
});

export default ForgotPasswordScreenStep4;
