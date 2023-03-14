import React, {useEffect, useState} from 'react';
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
} from 'react-native';

function DisplayMission({ route, navigation }) {

    const [data, setData] = useState([{title: "", description : "", price : 0 , id_create: 0}]);
// id, picture , price , title , description , creation_date ,id_create,id_make, status

    useEffect(() => {
        fetch("http://localhost:3000/mission/"+ id)
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => console.log(data));

      }, []);

    const { id } = route.params
    console.log("Mission numero " + id)
    
    return (
      <View style={{ flex: 1, padding: 24 }}>
       <View>
       <Text> {data[0].title}</Text>
       </View>
       <View>
       <Text> {data[0].description}</Text>
       <View>
       <Text> {data[0].price} € </Text>
       <Text> {data[0].id_make} </Text>

       </View>
       
       </View>
       
      </View>
  
  
    );
  }

  export default DisplayMission;


 
  