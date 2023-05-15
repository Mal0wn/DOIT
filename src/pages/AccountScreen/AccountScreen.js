import React, {useState, useContext} from 'react';
import {
  C_Blue_Background,
  C_Blue_Button,
  C_White,
  C_Purple_Underline,
  C_Back_Write,
} from '../../lib/colors';
import {useNavigation} from '@react-navigation/native';
import Logo from '../../assets/LogoDoIt.png';
import Key from '../../assets/key.png';
import At from '../../assets/at.png';
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

function AccountScreen() {
    const navigation = useNavigation();
    const [identifiant, setIdentifiant] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useContext(TokenContext);
    const [user, setUser] = useContext(UserContext);

    const onGoToModifyAccount = () => {
        navigation.navigate('ModifyAccount');
    };
    console.log(UserContext);

    return (
        <View style={styles.page}>
            <Text>
                {user.firstname} {user.lastname}
            </Text>
            <View>
                <Image source={{ uri: user.picture }} />
            </View>
            <Text>
                {user.email}
            </Text>
            <TouchableOpacity style={styles.modifyButton} onPress={onGoToModifyAccount}>
                <Text style={styles.modifyButtonText}>Modifier mon profil</Text>
            </TouchableOpacity>
        </View>
  );
}

const styles = StyleSheet.create({
  page: {
      width: '100%',
      height: '100%',
      display: 'flex',
    },
    modifyButton: {
        alignItems: 'center',
        backgroundColor: C_Purple_Underline,
        color: C_White,
        marginHorizontal: '15%',
        paddingHorizontal: '5%',
        paddingVertical: '2%',
        borderRadius: 80,
    },
    modifyButtonText: {
        color: C_White,
        fontSize: 24,
        fontWeight: 600,
    },
});

export default AccountScreen;
