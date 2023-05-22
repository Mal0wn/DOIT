/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useContext, useEffect} from 'react';
import {
  C_Blue_Background,
  C_Blue_Button,
  C_White,
  C_Purple_Underline,
  C_Back_Write,
} from '../../lib/colors';
import {useNavigation} from '@react-navigation/native';
import Logo from './../../assets/LogoDoIt.png';
import Key from './../../assets/key.png';
import At from './../../assets/at.png';
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
import {API_BASE_URL} from '../../lib/globalVariables';
import {TokenContext} from '../../context/TokenContext';
import {UserContext} from '../../context/UserContext';

function LoginScreen() {
  // Variables
  const navigation = useNavigation();
  const [identifiant, setIdentifiant] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useContext(TokenContext);
  const [user, setUser] = useContext(UserContext);
  const [isErrorMesage, setIsErrorMessage] = useState(false);
  const [messageError, setMessageError] = useState();

  /**
   * It sends a POST request to the API with the user's email and password, and if the request is
   * successful, it sets the token in the local storage and calls the onGetCurrentUser function
   */
  const onConnect = async () => {
    // form params to send
    let params = {email: identifiant, password: password};
    //axios requete to login

    await axios
      .post(API_BASE_URL + '/login', params)
      .then(response => {
        if (response.data === -1) {
          setMessageError('Email Empty');
          setIsErrorMessage(true);
        } else if (response.data === -2) {
          setMessageError('Password Empty');
          setIsErrorMessage(true);
        } else if (response.data === -3) {
          setMessageError('User not found');
          setIsErrorMessage(true);
        } else if (response.data === -4) {
          setMessageError('Invalid Password');
          setIsErrorMessage(true);
        } else {
          // Connexion
          setIsErrorMessage(false);
          setToken(response.data.token);
          onGetCurrentUser(response.data.token);
        }
      })
      .catch(error => {
        console.log('error', error);
      });
  };
  /**
   * It takes a token as an argument, decodes it, and then uses the decoded token to make a GET request
   * to the backend to get the user's information
   */
  const onGetCurrentUser = async localToken => {
    // get token
    let decodeToken = jwt_decode(localToken);
    // axios request
    await axios
      .get(API_BASE_URL + '/user/' + decodeToken.id, {
        headers: {
          Authorization: `Bearer ${localToken}`,
        },
      })
      .then(response => {
        let user = response.data[0]
        setUser(user);
        console.log(response.data)
        navigation.navigate('Home')
      })
      .then(navigation.navigate('Home'))
      .catch(error => {
        console.log(error);
      });
  };
  // Navigate to Create Account Page
  const onGoToBecomeDoItor = () => {
    navigation.navigate('CreateAccount');
  };
  // Navigate to Forgot Password Page
  const onGoToForgotPassword = () => {
    navigation.navigate('ForgotPasswordS1');
  };

  // on load page
  useEffect(() => {
    // initalisate token, user context items
    setToken('');
    setUser('');
  }, []);

  return (
    <View style={styles.page}>
      <View>
        <Image source={Logo} />
      </View>
      {/* indentifiant input */}
      <View style={styles.input}>
        <Image style={styles.icons} source={At} />
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          onChange={value => setIdentifiant(value.nativeEvent.text)}
          value={identifiant}
        />
      </View>
      {/* password input */}
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
      {messageError && <p>{messageError}</p>}
      {/* Connexion Button */}
      <TouchableOpacity style={styles.buttonOnConnect} onPress={onConnect}>
        <Text style={styles.buttonOnConnectText}>Se Connecter</Text>
      </TouchableOpacity>
      {/* Forgot Password Button */}
      <TouchableOpacity
        style={styles.buttonOnBecomeDoItor}
        onPress={onGoToForgotPassword}>
        <Text style={styles.buttonOnBecomeDoItorText}>
          J'ai oublié mon mot de passe
        </Text>
      </TouchableOpacity>
      {/* Create Account Button */}
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

// style
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
    borderBottomWidth: 0.5,
    paddingBottom: 5,
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
