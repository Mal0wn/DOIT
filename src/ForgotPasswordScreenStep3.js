/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  C_Blue_Background,
  C_Back_Write,
  C_Grey,
  C_Green,
  C_White,
  C_Purple_Underline,
} from './lib/colors';
import {useNavigation} from '@react-navigation/native';
import {
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import Check from './assets/check2.png';
import Cross from './assets/cross.png';
import ForgotPasswordStepHeader from './component/ForgotPasswordStepHeader';

function ForgotPasswordScreenStep3() {
  const navigation = useNavigation();
  const [password, setPassword] = useState();
  const [passwordVerif, setPasswordVerif] = useState();
  const [isFormError, setIsFormError] = useState();
  const [isLengthGood, setIsLengthGood] = useState();
  const [isMajGood, setIsMajGood] = useState();
  const [isMinGood, setIsMinGood] = useState();
  const [isNumberGood, setIsNumberGood] = useState();

  const onGoToStep4 = () => {
    navigation.navigate('ForgotPasswordS4');
  };

  const onReinitPassword = () => {
    // BACK !
    onGoToStep4();
  };

  useEffect(() => {
    setIsLengthGood(false);
    setIsMinGood(false);
    setIsMajGood(false);
    setIsNumberGood(false);
    setIsFormError(true);

    if (password !== undefined) {
      if (/^(?=.*[a-z]).{0,15}$/.test(password)) {
        setIsMinGood(true);
      }

      if (/^(?=.*[A-Z]).{0,15}$/.test(password)) {
        setIsMajGood(true);
      }

      if (/^(?=.*[0-9]).{0,15}$/.test(password)) {
        setIsNumberGood(true);
      }

      if (password.length > 7) {
        setIsLengthGood(true);
      }

      if (password === passwordVerif) {
        if (/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,15}$/.test(password)) {
          setIsFormError(false);
        }
      }
    }
  }, [password, passwordVerif]);

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <ForgotPasswordStepHeader step={3} />
      </View>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.textAlign}>
            Entrez votre nouveau mot de passe
          </Text>
          <View style={styles.displayColCenter}>
            <TextInput
              style={styles.inputText}
              maxLength={15}
              placeholder="Mot de Passe"
              onChange={value => setPassword(value.nativeEvent.text)}
              secureTextEntry={true}
              value={password}
            />
            <TextInput
              style={styles.inputText}
              placeholder="Mot de Passe de vérification"
              onChange={value => setPasswordVerif(value.nativeEvent.text)}
              secureTextEntry={true}
              value={passwordVerif}
            />
          </View>

          <View style={styles.regPass}>
            <Image style={styles.img} source={isLengthGood ? Check : Cross} />
            <Text>Entre 8 et 15 charactères</Text>
          </View>
          <View style={styles.regPass}>
            <Image style={styles.img} source={isMajGood ? Check : Cross} />
            <Text>Au moins une Majuscule</Text>
          </View>
          <View style={styles.regPass}>
            <Image style={styles.img} source={isMinGood ? Check : Cross} />
            <Text>Au moins un Miniscule</Text>
          </View>
          <View style={styles.regPass}>
            <Image style={styles.img} source={isNumberGood ? Check : Cross} />
            <Text>Au moins un chiffre</Text>
          </View>
          <View style={styles.displayCenter}>
            <TouchableOpacity
              style={
                isFormError ? styles.submitButtonDisabled : styles.submitButton
              }
              disabled={isFormError}
              onPress={() => {
                onReinitPassword();
              }}>
              <Text style={styles.submitText}>
                Réinitiliser mon mot de passe
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  displayColCenter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  displayCenter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textAlign: {
    textAlign: 'center',
    fontSize: 20,
  },
  regPass: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -10,
  },
  img: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  formContainer: {
    marginTop: -100,
    height: 350,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  submitText: {
    color: C_White,
    textAlign: 'center',
  },
  container: {
    width: '100%',
    height: '80%',
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
  inputText: {
    borderBottomColor: C_Purple_Underline,
    borderBottomWidth: 0.5,
    textAlign: 'center',
    color: C_Back_Write,
    width: '90%',
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 20,
    paddingBottom: 10,
  },
  submitButtonDisabled: {
    backgroundColor: C_Grey,
    width: 250,
    height: 40,
    paddingTop: 10,
    borderRadius: 8,
  },
  submitButton: {
    backgroundColor: C_Green,
    width: 250,
    height: 40,
    paddingTop: 10,
    borderRadius: 8,
  },
});

export default ForgotPasswordScreenStep3;
