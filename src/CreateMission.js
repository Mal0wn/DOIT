import React, { useEffect, useState, useContext } from 'react';
import {TokenContext} from './context/TokenContext';
import axios from 'axios';

import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,

} from 'react-native';
import { API_BASE_URL } from './lib/globalVariables';

function CreateMission({ navigation }) {


  const convertLocalTimeToISOString = () => {
    return new Date().toISOString();
  };

  const FormData = global.FormData;

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [id_create] = useState(4)
  const [token, setToken] = useContext(TokenContext);
  const creation_date = convertLocalTimeToISOString()
// RECUP USER 


  const postMission = async () => {
    let data = {
      picture: "https://picsum.photos/200",
      status: "notMake",
      creation_date: creation_date,
      id_create: id_create,
      title: title,
      description: description,
      price: price,
      
    }
    const formData = new FormData();
    formData.append(JSON.stringify(data));

    console.log(data)

    await axios
    .post(API_BASE_URL + '/mission/', data, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      timeout: 3000
    })
      .then(function (response) {
        console.log("response :", response);
      })
      navigation.navigate("Accueil")
      .catch(function (error) {
        console.log(error)
        console.log("error post");
      })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Création de Mission</Text>
        </View>
          <View style={styles.containAllInput}>
            <TextInput
            style={styles.inputTitle}
            onChangeText={text => setTitle(text)}
            placeholder="Entrez un titre"
            value={title}
          />
          <View style={styles.containInputDesc}>
            <TextInput
              style={[styles.input, styles.inputDesc]}
              onChangeText={text => setDescription(text)}
              placeholder="Entrez ici une brève une description (250 caractères maximum)"
              value={description}
            />
            <TextInput
              style={styles.input}
              onChangeText={text => setPrice(text)}
              value={price}
              placeholder="Entrez un prix"
              keyboardType="numeric"
            />
          </View>
        </View>
      
      <View style={styles.buttonSub}>
        <Button title='Valider' color="#FFFFFF"  onPress={() => postMission()} />
      </View>
      
    </View>
  );

}

export default CreateMission;

const styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor : "#FFFFFF"
  },
  header : { 

    alignItems : 'center',
    justifyContent : 'center',
    textAlign : 'center',
    backgroundColor : "#CDB4DB",
    height : 60
  },
  headerText : {
    display: 'flex',
    color : '#7D1D3F',
    fontSize : 25,
    fontWeight : 'bold',

  },
  inputTitle : {
    height : 50,
    textAlign : 'center',
    borderBottomColor : '#7D1D3F',
    borderBottomWidth : 2,
    fontSize : 20,
    fontWeight : 'bold'

  },
  containAllInput : {
    padding : 10
  },
  containInputDesc: {
    marginTop : 30
  },
  input: {
    display: "flex",
    justifyContent: 'center',
    borderColor: "#222823",
    backgroundColor: "#A2D2FF",
    color: "#827F7F",
    marginBottom : 10,
    borderRadius: 5,
    padding: 5,
    minHeight : 40
  }, 
  inputDesc : {
    height : 200,
    lineHeight: 23,
    textAlignVertical : 'top',
    
  },
  buttonSub : {
    backgroundColor : '#5C9EAD', 
    width: "30%",
    marginLeft : "auto",
    marginRight : "auto",
    borderRadius : 20,
    marginTop : 60
    
  }
})


