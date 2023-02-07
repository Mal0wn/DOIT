import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';


import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  useColorScheme,
  View,
  TouchableOpacity,
  Button,
  Pressable
} from 'react-native';


function DisplayMission({ route, navigation }) {

  const [data, setData] = useState([{ title: "", description: "", price: 0, id_create: 0 }]);
  // id, picture , price , title , description , creation_date ,id_create,id_make, status
  //const [dataUser, setUser] = useState([{ firstname: "", lastname:"" , id:0 }]);

  useEffect(() => {
    fetch("http://localhost:3000/mission/" + id)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => console.log(data));

  }, []);
  const { id } = route.params
  console.log("Mission numero " + id)
/*
  useEffect(() => {
    fetch("http://localhost:3000/user/" + data.id_create)
      .then((response) => response.json())
      .then((json) => setUser(json))
      .catch((error) => console.error(error))
      .finally(() => console.log("finallyUseEffectSetDataUser "+dataUser));

  }, []);

 */

  return (
    <View style={{ flex: 1, padding: 24 }}>

      <View style={styles.box}>
        <View style={styles.containTitle}>
          <Text style={styles.title}> {data[0].title}</Text>
        </View>
        <View style={styles.containDescription}>
          <Text style={styles.description}>{data[0].description}</Text>
          <View>
            <Text>Prix :  {data[0].price} € </Text>
            <Text>Proposée par :  {data[0].id_make} </Text>
          </View>
        </View>
        
    <Pressable 
    style={styles.button} 
    onPress={() => console.log('Contacter')}>
    <Text style={styles.textButton}>Contacter</Text>
    </Pressable>
      </View>
    </View>


  );
}

export default DisplayMission;


const styles = StyleSheet.create({

  box: {
    backgroundColor:"#5C9EAD",
    borderRadius : 5 ,
    display : "flex",
    justifyContent : "center",
    textAlign : "center"

  },
  containTitle: {
    backgroundColor: "#7D1D3F",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    padding : 10
  },
  title: {
    color : "#FFFFFF",
    fontWeight : "bold"
  },
  containDescription: {
    
    padding : 10
  },
  description: {
    textAlign: "justify"
  },
  button: {
    backgroundColor: "#7D1D3F",
    padding : 5,
    borderRadius : 5 ,
    display : "flex",
    justifyContent : "center",
    textAlign : "center",
    marginTop : 20,
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20
  },
  textButton: {
    textAlign : "center",
    color: "#FFFFFF",
  }
})
