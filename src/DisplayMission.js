import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";

import {
  StyleSheet,
  Text,
  View,
  Pressable
} from 'react-native';

function DisplayMission({ route, navigation }) {

  const [data, setData] = useState([{ title: "", description: "", price: 0, id_create: 0 }]);
  const [dataUser, setUser] = useState([{ firstname: "", lastname: "", id: 0 }]);
  const { id } = route.params

  const fetchMission = async (idMission) => {
    await axios
      .get("http://localhost:3000/mission/" + idMission)
      .then((res) => {
        setData(res.data[0])
        fetchUser(res.data[0].id_create)
      })
      .catch((err) => console.log(err));
  }

  const fetchUser = async (idCreate) => {
    await axios
      .get("http://localhost:3000/user/" + idCreate)
      .then((res) => {
        setUser(res.data[0])
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchMission(id)
  }, [])

  return (
    <View style={{ flex: 1, padding: 24 }}>
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
