import React, {useState, useContext} from 'react';
import {
  C_Blue_Background,
  C_Blue_Button,
  C_White,
  C_Purple_Underline,
  C_Back_Write,
} from './lib/colors';
import {useNavigation} from '@react-navigation/native';
import Logo from './assets/LogoDoIt.png';
import Key from './assets/key.png';
import At from './assets/at.png';
import jwt_decode from 'jwt-decode';

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import axios from 'axios';
import {API_BASE_URL} from './lib/globalVariables';
import {TokenContext} from './context/TokenContext';
import {UserContext} from './context/UserContext';

function LoginScreen() {
  const navigation = useNavigation();
  const [identifiant, setIdentifiant] = useState('alphonse@brown');
  const [password, setPassword] = useState('totoleharicot');
  const [token, setToken] = useContext(TokenContext);
  const [user, setUser] = useContext(UserContext);

  /**
   * It sends a POST request to the API with the user's email and password, and if the request is
   * successful, it sets the token in the local storage and calls the onGetCurrentUser function
   */
  const onConnect = async () => {
    /* let params = {email: identifiant, password: password}; */
    let params = {email: "alphonse@brown.fr", password: "totoleharicot"};
    await axios
      .post(API_BASE_URL + '/login', params)
      .then(response => {
        setToken(response.data.token);
        onGetCurrentUser(response.data.token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${localToken}`;
      })
      .catch(error => {
        console.log(error);
      });
  };
  /**
   * It takes a token as an argument, decodes it, and then uses the decoded token to make a GET request
   * to the backend to get the user's information
   */
  const onGetCurrentUser = async localToken => {
    let decodeToken = jwt_decode(localToken);
    await axios
      .get(API_BASE_URL + '/user/' + decodeToken.id, {
        headers: {
          Authorization: `Bearer ${localToken}`,
        },
      })
      .then(response => {
        setUser(response.data[0]);
      })
      .then(navigation.navigate('Home'))
      .catch(error => {
        console.log(error);
      });
  };

  const onGoToBecomeDoItor = () => {
    navigation.navigate('CreateAccount');
  };

  return (
    <View style={styles.page}>
      <View>
        <Image source={Logo} />
      </View>
      <View style={styles.input}>
        <Image style={styles.icons} source={At} />
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          onChange={value => setIdentifiant(value.nativeEvent.text)}
          value={identifiant}
        />
      </View>
      <View style={styles.input}>
        <Image style={styles.icons} source={Key} />
        <TextInput
          style={styles.inputText}
          placeholder="Mot de Passe"
          onChange={value => setPassword(value.nativeEvent.text)}
          secureTextEntry={true}
          value={password}
        />
      </View>
      <TouchableOpacity style={styles.buttonOnConnect} onPress={onConnect}>
        <Text style={styles.buttonOnConnectText}>Se Connecter</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonOnBecomeDoItor}
        onPress={onGoToBecomeDoItor}>
        <Text style={styles.buttonOnBecomeDoItorText}>
          Je deviens un Do-iteur
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  icons: {
    width: 30,
    height: 30,
    marginLeft: 20,
  },
  page: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: C_Blue_Background,
  },
  buttonOnBecomeDoItor: {
    backgroundColor: C_Blue_Button,
    paddingHorizontal: '5%',
    paddingVertical: '2%',
    borderRadius: 80,
  },
  buttonOnBecomeDoItorText: {
    color: C_White,
    fontSize: 14,
    fontWeight: 600,
    backgroundColor: C_Blue_Button,
  },
  buttonOnConnect: {
    backgroundColor: C_Blue_Button,
    color: C_White,
    paddingHorizontal: '5%',
    paddingVertical: '2%',
    borderRadius: 80,
  },
  input: {
    width: '90%',
    height: '5%',
    borderBottomColor: C_Purple_Underline,
    borderBottomWidth: 3,
    paddingBottom: 30,
    textAlign: 'center',
    color: C_Back_Write,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: {
    textAlign: 'center',
    color: C_Back_Write,
    width: '70%',
    fontSize: 20,
    marginLeft: 20,
    marginBottom: -10,
  },
  buttonOnConnectText: {
    color: C_White,
    fontSize: 24,
    fontWeight: 600,
  },
});

export default LoginScreen;
