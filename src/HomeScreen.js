  /* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import { API_BASE_URL } from './lib/globalVariables';
import axios from 'axios';
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  TouchableOpacity,
} from 'react-native';
import {TokenContext} from './context/TokenContext';
import { IdMissionContext } from './context/IdMissionContext';
import { UserContext } from './context/UserContext';
import DisplayMission from './DisplayMission';

function HomeScreen() {
  const navigation = useNavigation();


  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [token, setToken] = useContext(TokenContext);
  //const [idMission , setIdMission] = useContext(IdMissionContext)   Error 
  const [user , setUser] = useContext(UserContext)

  console.log("data: " + data)
  console.log("token: " + token)

  console.log("user: " + user )



  useEffect(() => {
    if (token === undefined ) {
      navigation.navigate('Déconnexion');
    } else {
      console.log(token);
      console.log(user)
     onFetchMission()
    }
  }, []);

  const onFetchMission = async() => {
    await axios
    .get(API_BASE_URL + '/mission', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => {
      console.log(response.data) 
      setData(response.data) 
      setLoading(false)
    })
    .catch(error => {
      console.log(error);
    });
    
  }




  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ) : (
        <View>
          { <FlatList
            data={data}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() =>
                navigation.navigate(' ', {
                  screen: 'DisplayMission',
                  params: { id: item.id },
                })
              }>
                <View style={styles.box}>
                  <Text style={styles.containTitle}>{item.title}</Text>
                  <View style={styles.containInfo}>
                    <Text size="Body">{item.description}</Text>
                    <Text> {item.price} €</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          /> }
        </View>
      )}
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  scrollView: {
    flex: 1,
  },

  box: {
    flex: 4,
    backgroundColor: '#CDB4DB',
    width: '97%',
    margin: '2%',
    borderRadius: 5,
    minHeight: 100,
    height: '100%',
  },
  containTitle: {
    backgroundColor: '#5C9EAD',

    borderRadius: 5,
    padding: 10,
  },
  title: {
    color: '#222823',
    padding: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: 5,
  },
  imageDescContain: {
    width: '90%',
    minHeight: '50%',
  },

  postPicture: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  containInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
    padding: 20,
  },
});

export default HomeScreen;