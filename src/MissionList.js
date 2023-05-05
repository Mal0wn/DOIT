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
  import { UserContext } from './context/UserContext';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  Ionicons.loadFont().then();
  
  function MissionList() {
    const navigation = useNavigation();
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [token, setToken] = useContext(TokenContext);
    const [user , setUser] = useContext(UserContext)
  
    useEffect(() => {
        console.log(token);
      if (token === undefined ) {
        navigation.navigate('Déconnexion');
      } else {
        console.log(user)
       onFetchMission()
      }
    }, []);


    const onDisplayMission = (id) => {
      navigation.navigate("DisplayMission", {idMission: id});
      console.log(id)
    };

  
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
                <TouchableOpacity style={styles.containBox} onPress={() =>
                  onDisplayMission(item.id)
                }>
                  <View style={styles.box}>
                    <View style={styles.containTitle}>
                      <Text style={styles.containTitle}>{item.title}</Text>
                    </View>
                    <View style={styles.containInfo}>
                    <View style={styles.containIcon}>
                        <Text>
                          <Ionicons name={"rocket"} size={52} color={"#7D1D3F"} />
                          </Text>
                    </View>
                      <Text style={styles.infoDesc}>{item.description}</Text>
                      <View style={styles.containInfoUser} >
                        <Text style={styles.InfoUser}>{item.creator.firstname} {item.creator.lastname}</Text>
                        <Text style={styles.infoPrice}>{item.price} €</Text>
                      </View>
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
    containBox : {
      borderRadius : 5,
    },
    box: {
      flex: 4,
      backgroundColor: '#CDB4DB',
      width: '97%',
      margin: '2%',
      borderRadius: 5,
      minHeight: 200,
      height: '100%',
    },
    containTitle: {
      backgroundColor: '#5C9EAD',
      borderTopLeftRadius : 5,
      borderTopRightRadius : 5,
      color: '#222823',
      padding: 10,
      fontWeight: 'bold',
      textAlign: 'center',

    },
    containIcon : {
      height: 100,
      width: 100,
      marginLeft : "auto",
      marginRight : "auto",
      display: "flex",
      justifyContent : "center",
      alignItems: "center",
      marginBottom : 5
      
    },
    containInfo: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderRadius: 5,
      padding: 20,
    },
    containInfoUser: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:'baseline'
    },
    infoPrice: {
      fontSize: 16,
      fontWeight:"800"
    },
    InfoUser : {
      fontSize: 10,
    }
  });
  
  export default MissionList;