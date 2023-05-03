  /* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState, useContext} from 'react';
import Logo from './assets/LogoDoIt.png';
import CheckAnnonce from './assets/checkAnnonce.png';
import CheckMsg from './assets/messageImg.png';
import PostAnn from './assets/postAnnonce.png';
import {useNavigation} from '@react-navigation/native';
import { API_BASE_URL } from './lib/globalVariables';
import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import {TokenContext} from './context/TokenContext';

import { UserContext } from './context/UserContext';


function HomeScreen() {
  const navigation = useNavigation();
  const [token, setToken] = useContext(TokenContext);
  const [user , setUser] = useContext(UserContext)
  
  console.log(" HS token: " + token)
  console.log("HS List user: " + user )
  

  useEffect(() => {
    if (token === undefined ) {
      navigation.navigate('Déconnexion');
    } else {
      console.log("UseEffect Else HS");
      

    }
  }, []);


  return (
    <View style={styles.container}>
      <View>
        <Image source={Logo} style={styles.logo} />
      </View>
      <View style={styles.containBox}>
      <TouchableOpacity style={styles.box} onPress={() => navigation.navigate("MissionList")}> 
        <Text style={styles.title}>Je consulte les missions</Text> 
        <View style={styles.containImg}>
          <Image source={CheckAnnonce} style={styles.img}/>
      </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box} onPress={() => navigation.navigate("Add Mission")}>
        <Text style={styles.title}> Je poste une mission</Text>
        <View style={styles.containImg}>
          <Image source={PostAnn} style={styles.img} />
      </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box} >
        <Text style={styles.title}> Je consulte mes messages</Text>
        <View style={styles.containImg}>
          <Image source={CheckMsg} style={styles.img}/>
        </View>
      </TouchableOpacity>
      </View>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo : {
    width : 100,
    height : 100,
    marginLeft : "auto",
    marginRight : "auto"
  },
  img : {
    flex:1,
    width : 200,
    height : 125,
    resizeMode : "cover",
    marginTop : 10,
    marginLeft : "auto",
    marginRight: "auto",
    borderRadius: 5,
    
    
  },
  title: {
    textAlign : 'center',
    color : "#7D1D3F",
    fontWeight : "700"

  },
  containBox : {
    width : "100%",
    height : '80%',
    display : "flex",
    flexDirection : "column",
    justifyContent : "center",
    alignItems : 'center'
  },
  box: {
    display: "flex",
    //justifyContent : "center",
    backgroundColor: '#CDB4DB',
    width: 275,
    margin: '2%',
    borderRadius: 5,
    padding : 5,
    height: 150,
    flexDirection : "column",


    
  },
  containImg : {
    height: 100,
    
  },


  
});

export default HomeScreen;