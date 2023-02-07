import React, {useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';


import {
  View,
  TextInputField,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';

function CreateMission({navigation}) {
    const [title, setTitle] = useState('')
    const [description , setDescription] = useState('')
    const [price , setPrice] = useState(0)

  return(
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
      <Button title='Submit' onPress={() => console.log("submit")}/>
    </View>
   );
    
  }

  export default CreateMission;

  const styles = StyleSheet.create ( {

    input : {
      display: "flex",
		  justifyContent: 'center',
      borderColor : "#222823",
      backgroundColor : "#CDB4DB" ,
      margin : 4,
      borderRadius : 5,
      padding : 20
    }
  })


 
  