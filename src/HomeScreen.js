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


function HomeScreen() {

    const navigation = useNavigation();
    const onDisplayMission = (id) => {
      navigation.navigate("DisplayMission", {id});
      console.log(id)
    };
  
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    //console.log(data);
  
    useEffect(() => {
      fetch("http://localhost:3000/mission")
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
                    <Text size="H5" font="medium">
                      {item.title}
                    </Text>
                    <Text size="Body">
                      {item.description}
                    </Text>
                    <Text> {item.price}</Text>
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

	itemContain : {
		flex: 4,
		backgroundColor: "#CDB4DB",
		width: "70%",
		margin : "auto",
		borderRadius : 5,
		minHeight: "300px",
		height: "100%",
		

	},
	containTitle : {
		backgroundColor: "#5C9EAD",
		borderTopLeftRadius : 5,
		borderTopRightRadius : 5

	},
	title : {
		color: "#222823",
		padding : "0.6em",
		fontWeight: "bold",
		textAlign: "center"
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
		justifyContent: "space-between"
	},




})

  export default HomeScreen;