/* eslint-disable no-useless-escape */
import React, {useEffect, useState} from 'react';
import {
  C_Blue_Background,
  C_Purple_Underline,
  C_Back_Write,
  C_White,
  C_Green,
  C_Grey,
} from '../../lib/colors';
import {useNavigation} from '@react-navigation/native';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  // TextInput,
  // TouchableOpacity,
  // useColorScheme,
  View,
  // Image,
} from 'react-native';

import Check from '../../assets/check2.png';
import Cross from '../../assets/cross.png';


function CreateAccountScreen() {
  const navigation = useNavigation();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState();
  const [isFormError, setIsFormError] = useState(true);
  const [isLengthGood, setIsLengthGood] = useState();
  const [isMajGood, setIsMajGood] = useState();
  const [isMinGood, setIsMinGood] = useState();
  const [isNumberGood, setIsNumberGood] = useState();
  const [isGoodFirstname, setIsGoodFirstName] = useState();
  const [isGoodLastname, setIsGoodLastName] = useState();
  const [isGoodPhoneNumber, setIsGoodPhoneNumber] = useState();
  const [isGoodCity, setIsGoodCity] = useState();
  const [isGoodCountry, setIsGoodCountry] = useState();
  const [isGoodPostalCode, setIsGoodPostalCode] = useState();
  const [isGoodEmail, setIsGoodEmail] = useState();
  const [isGoodPassword, setIsGoodPassword] = useState();
  const [isGoodBirthDate, setIsGoodBirthDate] = useState();
  const [isGoodAddress, setIsGoodAddress] = useState();

  const handleSubmit = () => {
    navigation.navigate('Home');
  };

  const onGoBack = () => {
    navigation.navigate('Login');
  };

  useEffect(() => {
    setIsGoodPassword(false);
    setIsLengthGood(false);
    setIsMinGood(false);
    setIsMajGood(false);

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

      if (password === passwordVerify) {
        if (/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,15}$/.test(password)) {
          setIsGoodPassword(true);
        }
      }
    }
  }, [password, passwordVerify]);

  useEffect(() => {
    if (postalCode !== '' || postalCode !== undefined) {
      setIsGoodPostalCode(false);
      if (/^[0-9]*$/.test(postalCode)) {
        setIsGoodPostalCode(true);
      }
    }
  }, [postalCode]);

  useEffect(() => {
    if (firstname !== '' || firstname !== undefined) {
      setIsGoodFirstName(false);
      if (/^[A-z]*$/.test(firstname)) {
        setIsGoodFirstName(true);
      }
    }
  }, [firstname]);

  useEffect(() => {
    if (phoneNumber !== '' || phoneNumber !== undefined) {
      setIsGoodPhoneNumber(false);
      if (/^[0-9]*$/.test(phoneNumber)) {
        setIsGoodPhoneNumber(true);
      }
    }
  }, [phoneNumber]);

  useEffect(() => {
    if (lastname !== '' || lastname !== undefined) {
      setIsGoodLastName(false);
      if (/^[A-z]*$/.test(lastname)) {
        setIsGoodLastName(true);
      }
    }
  }, [lastname]);

  useEffect(() => {
    if (country !== '' || country !== undefined) {
      setIsGoodCountry(false);
      if (/^[A-z]*$/.test(country)) {
        setIsGoodCountry(true);
      }
    }
  }, [country]);

  useEffect(() => {
    if (city !== '' || city !== undefined) {
      setIsGoodCity(false);
      if (/^[A-z]*$/.test(city)) {
        setIsGoodCity(true);
      }
    }
  }, [city]);

  useEffect(() => {
    if (email === '') {
    } else {
      setIsGoodEmail(false);
      if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        setIsGoodEmail(true);
      }
    }
  }, [email]);

  useEffect(() => {
    if (address !== '' || address !== undefined) {
      setIsGoodAddress(true);
    }
  }, [address]);

  useEffect(() => {
    setIsFormError(true);
    if (
      isGoodCity &&
      isGoodCountry &&
      isGoodEmail &&
      isGoodFirstname &&
      isGoodLastname &&
      isGoodPostalCode &&
      isGoodPhoneNumber &&
      isGoodPassword &&
      isGoodBirthDate &&
      isGoodAddress
    ) {
      setIsFormError(false);
    }
  }, [
    isGoodCity,
    isGoodCountry,
    isGoodEmail,
    isGoodFirstname,
    isGoodLastname,
    isGoodPostalCode,
    isGoodPhoneNumber,
    isGoodPassword,
    isGoodAddress,
    isGoodBirthDate,
  ]);

  return (
    <SafeAreaView style={styles.globalContainer}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.back}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              onGoBack();
            }}>
            <Text style={styles.backButtonFont}>Retour</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TextInput
            style={isGoodFirstname ? styles.input : styles.bad}
            value={firstname}
            placeholder="Nom"
            onChangeText={value => {
              setFirstname(value);
            }}
          />
          <TextInput
            style={isGoodLastname ? styles.input : styles.bad}
            value={lastname}
            placeholder="Prénom"
            onChangeText={value => setLastname(value)}
          />
          <TextInput
            style={isGoodPhoneNumber ? styles.input : styles.bad}
            value={phoneNumber}
            keyboardType="number-pad"
            maxLength={10}
            placeholder="Numéro de Téléphone"
            onChangeText={value => setPhoneNumber(value)}
          />
          <TextInput
            style={isGoodEmail ? styles.input : styles.bad}
            value={email}
            placeholder="Email"
            onChangeText={value => setEmail(value)}
          />
          <TextInput
            style={styles.input}
            value={birthDate}
            placeholder="Date de Naissance"
            onChangeText={value => setBirthDate(value)}
          />
          <TextInput
            style={styles.input}
            value={address}
            placeholder="Adresse"
            onChangeText={value => setAddress(value)}
          />
          <TextInput
            style={isGoodPostalCode ? styles.input : styles.bad}
            value={postalCode}
            placeholder="Code Postale"
            keyboardType="number-pad"
            maxLength={5}
            onChangeText={value => setPostalCode(value)}
          />
          <TextInput
            style={isGoodCity ? styles.input : styles.bad}
            value={city}
            placeholder="Ville"
            onChangeText={value => setCity(value)}
          />
          <TextInput
            style={isGoodCountry ? styles.input : styles.bad}
            value={country}
            placeholder="Pays"
            onChangeText={value => setCountry(value)}
          />
          <View style={styles.formContainer}>
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
                onChange={value => setPasswordVerify(value.nativeEvent.text)}
                secureTextEntry={true}
                value={passwordVerify}
              />
            </View>
          </View>
          <View style={styles.pictureView}>
            {/* Avatar pic */}
            <TouchableOpacity
              style={styles.buttonOnChoosePic}
              value="Choisir une photo">
              <Text style={styles.buttonOnChoosePicText}>Choisir une phot</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={
              isFormError ? styles.submitButtonDisabled : styles.submitButton
            }
            disabled={isFormError}
            onPress={() => {
              handleSubmit();
            }}>
            <Text style={styles.submitText}>Créer mon compte</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    marginTop: 20,
    width: '100%',
    height: 350,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  pictureView: {
    height: 50,
    marginBottom: 10,
    marginTop: 20,
  },
  globalContainer: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: C_Blue_Background,
    paddingTop: 30,
  },
  buttonOnChoosePicText: {
    color: C_White,
  },
  backButtonFont: {
    color: C_White,
  },
  backButton: {
    backgroundColor: C_Purple_Underline,
    borderColor: C_Purple_Underline,
    borderRadius: 8,
    borderWidth: 1,
    width: 70,
    height: 30,
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  back: {
    height: 60,
  },
  submitButtonDisabled: {
    marginTop: 30,
    backgroundColor: C_Grey,
    width: 250,
    height: 40,
    paddingTop: 10,
    borderRadius: 8,
    marginBottom: 60,
  },
  submitButton: {
    marginTop: 30,
    backgroundColor: C_Green,
    width: 250,
    height: 40,
    paddingTop: 10,
    borderRadius: 8,
    marginBottom: 60,
  },
  submitText: {
    color: C_White,
    textAlign: 'center',
  },
  buttonOnChoosePic: {
    color: C_White,
    fontSize: 14,
    fontWeight: 600,
    height: 40,
    width: '100%',
    textAlign: 'center',
    backgroundColor: C_Purple_Underline,
    borderRadius: 10,
  },
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 1200,
  },
  input: {
    fontSize: 20,
    width: '90%',
    height: 30,
    borderBottomColor: C_Purple_Underline,
    borderBottomWidth: 0.5,
    // marginBottom: 10,
    paddingBottom: 10,
    textAlign: 'center',
    color: C_Back_Write,
  },
  bad: {
    fontSize: 20,
    width: '90%',
    height: 30,
    borderBottomColor: 'red',
    borderBottomWidth: 0.5,
    // marginBottom: 10,
    paddingBottom: 10,
    textAlign: 'center',
    color: 'red',
  },
});

export default CreateAccountScreen;
