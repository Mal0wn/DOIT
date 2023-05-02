import React, { useEffect, useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import {TokenContext} from './context/TokenContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import dayjs from "dayjs";

import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  Image
} from 'react-native';
import { API_BASE_URL } from './lib/globalVariables';


function DisplayMission({ route, navigation }) {

  const [data, setData] = useState([{ title: "", description: "", price: 0, id_create: 0 }]);
  const [dataUser, setUser] = useState([{ firstname: "", lastname: "", id: 0 }]);
  const [token, setToken] = useContext(TokenContext);
  const { idMission } = route.params
  const [picture, setPicture] = useState()

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
        if (res.data.picture == null) {
          let link = "https://picsum.photos/id/76/4912/3264";
          setPicture(link)
        } else {
          console.log("false" + res.data.picture)
        }
        let localDate = dayjs(res.data.creation_date).format("DD MMM YYYY");
        let localData = res.data
        console.log(localData)
        localData.creation_date = localDate
        setData(localData)
        fetchUser(res.data.id_create)
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
    <View style={styles.container}>
       <TouchableOpacity style={styles.iconContainer} onPress={()=>navigation.navigate("MissionList")}>
            <Text style={styles.retour}> Retour </Text>
            <View style={styles.containTitle}>
          <Text style={styles.title}> {data.title}</Text>
        </View>
            </TouchableOpacity>

      <View style={styles.box}>
       
        <View style={styles.photoContain}>
        <Image
        style={styles.logo}
        source={{uri: picture}}
      />
        </View>
        <View style={styles.containDescription}>
          <Text style={styles.description}>{data.description}</Text>
          <View>
            <Text>Prix :  {data.price} € </Text>
            <Text>Proposée par : {dataUser.firstname} {dataUser.lastname}  </Text>
            <Text>Date : {data.creation_date}</Text>
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
  container: {
    backgroundColor: "#FFFFFF",
    display: "flex",
    flex: 1,
    height: "90%"
  },
  box: {
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    display: "flex",
    flex:1,
    textAlign: "center",
    height : "100%"

  },
  retour: {
    color: "#FFFFFF",
    fontWeight: "bold",
    marginTop : 10,
    marginLeft : 5

  },
  iconContainer: {
    backgroundColor: "#5C9EAD",
    display: "flex",
    justifyContent : "space-between"
  },
  photoContain : {
    width : '100%',
    height: 250,
    display : "flex",
    justifyContent: 'center',
    margin: "auto",
  },
  logo : {
    width : "90%",
   height: "90%",
    borderBottomEndRadius : 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomStartRadius : 5,
    marginTop : 15,
    marginLeft: "auto",
    marginRight: "auto",
  },
  containTitle: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    padding: 10
  },
  title: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize : 30,
    textAlign : "center"
  },
  containDescription: {
    
    padding: 10
  },
  description: {
    textAlign: "justify",
    fontWeight: "bold",
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
