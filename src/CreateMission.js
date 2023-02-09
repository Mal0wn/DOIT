import React, { useEffect, useState } from 'react';
import { AxiosRequestConfig } from "axios";
import axios from 'axios';

import {
  View,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

function CreateMission({ navigation }) {


  const convertLocalTimeToISOString = () => {
    return new Date().toISOString();
  };

  const FormData = global.FormData;

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [id_create] = useState(4)
  const URL = "http://localhost:3000/mission/"
  const creation_date = convertLocalTimeToISOString()

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

    await axios
      .post(URL, data, {
        timeout: 3000
      })
      .then(function (response) {
        console.log("response :", response);
      })
      .catch(function (error) {
        console.log("error post");
      })
  }

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <TextInput
        style={styles.input}
        onChangeText={text => setTitle(text)}
        placeholder="Entrez un titre"
        value={title}
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setDescription(text)}
        placeholder="Entrez une description"
        value={description}
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setPrice(text)}
        value={price}
        placeholder="Entrez un prix"
        keyboardType="numeric"
      />
      <Button title='Submit' onPress={() => postMission()} />
    </View>
  );

}

export default CreateMission;

const styles = StyleSheet.create({

  input: {
    display: "flex",
    justifyContent: 'center',
    borderColor: "#222823",
    backgroundColor: "#CDB4DB",
    margin: 4,
    borderRadius: 5,
    padding: 20
  }
})
