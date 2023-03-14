import React, {useEffect, useState} from 'react';
import {
  C_Blue_Background,
  C_Purple_Underline,
  C_Back_Write,
  C_White,
  C_Blue_Button,
} from './lib/colors';
import {useNavigation} from '@react-navigation/native';

import {
  // SafeAreaView,
  // ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  // TextInput,
  // TouchableOpacity,
  // useColorScheme,
  View,
  // Image,
} from 'react-native';

function CreateAccountScreen() {
  const navigation = useNavigation();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [adress, setAdress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  useEffect(() => {
    // do something
  }, []);

  const handleSubmit = () => {
    //query identifiant, password
    navigation.navigate('Home');
  };

  return (
    <View style={styles.page}>
      <Text>Become do itor</Text>
      <TextInput
        style={styles.input}
        value={firstname}
        placeholder="Nom"
        onChange={value => setFirstname(value)}
      />
      <TextInput
        style={styles.input}
        value={lastname}
        placeholder="Prénom"
        onChange={value => setLastname(value)}
      />
      <TextInput
        style={styles.input}
        value={email}
        placeholder="Email"
        onChange={value => setEmail(value)}
      />
      <TextInput
        style={styles.input}
        value={password}
        secureTextEntry={true}
        placeholder="Mot de passe"
        onChange={value => setPassword(value)}
      />
      <TextInput
        style={styles.input}
        value={passwordVerify}
        secureTextEntry={true}
        placeholder="Mot de passe"
        onChange={value => setPasswordVerify(value)}
      />
      <TextInput
        style={styles.input}
        value={birthDate}
        placeholder="Date de Naissance"
        onChange={value => setBirthDate(value)}
      />
      <TextInput
        style={styles.input}
        value={adress}
        placeholder="Adresse"
        onChange={value => setAdress(value)}
      />
      <TextInput
        style={styles.input}
        value={postalCode}
        placeholder="Code Postale"
        onChange={value => setPostalCode(value)}
      />
      <TextInput
        style={styles.input}
        value={city}
        placeholder="Ville"
        onChange={value => setCity(value)}
      />
      <TextInput
        style={styles.input}
        value={country}
        placeholder="Pays"
        onChange={value => setCountry(value)}
      />
      <View>
        {/* Avatar pic */}
        <TouchableOpacity
          style={styles.buttonOnChoosePic}
          value="Choisir une photo"
        />
      </View>
      <TouchableOpacity onClick={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOnChoosePic: {
    color: C_White,
    fontSize: 14,
    fontWeight: 600,
    backgroundColor: C_Blue_Button,
  },
  page: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: C_Blue_Background,
  },
  input: {
    width: '90%',
    height: '5%',
    border: 'black solid 1px',
    borderBottomColor: C_Purple_Underline,
    borderBottomWidth: 3,
    marginBottom: 20,
    textAlign: 'center',
    color: C_Back_Write,
  },
});

export default CreateAccountScreen;
