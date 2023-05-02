import React, { useEffect, useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import {TokenContext} from './context/TokenContext';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import { API_BASE_URL } from './lib/globalVariables';

function DisplayMission({ route, navigation }) {

  const [data, setData] = useState([{ title: "", description: "", price: 0, id_create: 0 }]);
  const [dataUser, setUser] = useState([{ firstname: "", lastname: "", id: 0 }]);
  const [token, setToken] = useContext(TokenContext);
  const { idMission } = route.params

  console.log("DisplayMiss data: " + data)
  console.log("DisplayMiss token: " + token)
  

  const fetchMission = async (idMission) => {
    console.log("Axios Fetch Mission ")
    if (token != undefined) {
      await axios
      .get(API_BASE_URL+ '/mission/' + idMission , {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        
        setData(res.data)
        console.log("resdata0 : " + res.data)
        fetchUser(res.data.id_create)
        
       console.log(res.data)
      })
      .catch((err) => console.log(err));
    }
    
  }

  const fetchUser = async (idCreate) => {
    console.log("Axios Fetch User ")
    console.log("idCreate" + idCreate)
    await axios
      .get("http://localhost:3000/user/" + idCreate , {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data)
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    console.log("USEFFECT ID " + idMission)
    fetchMission(idMission)
  }, [])

  return (
    <View style={{ flex: 1, padding: 24 }}>
       <TouchableOpacity style={styles.iconContainer} onPress={()=>console.log('dhjksds')}>
            <Icon style={styles.icon} name="reply"/> 
            </TouchableOpacity>
      <View style={styles.box}>
        <View style={styles.containTitle}>
          <Text style={styles.title}> {data.title}</Text>
        </View>
        <View style={styles.containDescription}>
          <Text style={styles.description}>{data.description}</Text>
          <View>
            <Text>Prix :  {data.price} € </Text>
            <Text>Proposée par : {dataUser.firstname} {dataUser.lastname}  </Text>
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
    backgroundColor: "#5C9EAD",
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    textAlign: "center"

  },
  icon: {

  },
  containTitle: {
    backgroundColor: "#7D1D3F",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    padding: 10
  },
  title: {
    color: "#FFFFFF",
    fontWeight: "bold"
  },
  containDescription: {

    padding: 10
  },
  description: {
    textAlign: "justify"
  },
  button: {
    backgroundColor: "#7D1D3F",
    padding: 5,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    marginTop: 20,
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20
  },
  textButton: {
    textAlign: "center",
    color: "#FFFFFF",
  }
})
