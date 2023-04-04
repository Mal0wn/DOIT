import React, {useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import * as env from '@env'

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  useColorScheme,
  View,
  TouchableOpacity,
  Image
} from 'react-native';



function HomeScreen({navigation}) {
    //const navigation = useNavigation();
    const onDisplayMission = (id) => {
      navigation.navigate("DisplayMission", {id});
      console.log(id)
    };
  
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    //console.log(data);

    let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpZCI6NSwicm9sZSI6InVzZXIiLCJ1c2VybmFtZSI6IkRlYmJ5IiwiZGF0ZUNyZWF0ZWQiOjE2ODA1MzA4NTkxOTIsImlzc3VlZCI6MTY4MDUzMDg1OTE5MiwiZXhwaXJlcyI6MTY4MDUzODA1OTE5Mn0.zbn_6o3ZmM__khnLHQswzm3PxOVVl2TsxSydtUgRKqhnN8DZzeXQcdDTRnOTdjoXKxZzKgu1Psaa9yLl4UDMKg"
    const requrl = process.env.API_URL + "missions"

    useEffect(() => {
      fetch( requrl,{ method: 'GET', headers: { Authorization: `Bearer ${token}`}})
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);

    

    return (
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <Text>Loading...</Text> : 
        ( <View >
            <FlatList
              data={data}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => onDisplayMission(item.id)}>
                  <View style={styles.box}>
                    <Text style={styles.containTitle}>
                      {item.title}
                    </Text>
                    <View style={styles.containInfo}>
                    
                    <Text size="Body">
                      {item.description}
                    </Text>
                    <Text> {item.price} €</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        )}
      </View>
  
  
    );
  }

  const styles = StyleSheet.create ( {
	container : {
		display: "flex",
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor : 'white',
		

	},
	scrollView : {
		flex: 1
	},

	box : {
		flex: 4,
		backgroundColor: "#CDB4DB",
		width: "97%",
		margin : "2%",
		borderRadius : 5,
		minHeight: 100,
		height: "100%",
		

	},
	containTitle : {
		backgroundColor: "#5C9EAD",

        borderRadius : 5,
        padding: 10

	},
	title : {
		color: "#222823",
		padding : 20,
		fontWeight: "bold",
		textAlign: "center",
        borderRadius : 5,

	},
	imageDescContain : {
		width : "90%",
		minHeight: "50%",
		
	},

	postPicture : {

		width : "100%",
		height : "100%",
		borderRadius : 5
	},
	containInfo : {
		display : "flex",
		flexDirection : 'row',
		justifyContent: "space-between",
        borderRadius : 5,
        padding: 20
	},




})

  export default HomeScreen;