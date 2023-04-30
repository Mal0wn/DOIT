import React, { useState, useContext } from 'react';
import {
  C_Blue_Background,
  C_White,
  C_Purple_Underline,
  C_Back_Write,
} from './lib/colors';
import { useNavigation } from '@react-navigation/native';
import {APIURL} from '@env'

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Button
} from 'react-native';
import axios from 'axios';
import {TokenContext} from './context/TokenContext';
import Slider from '@react-native-community/slider';

export default function SearchScreen() {
  const navigation = useNavigation();
  const [string, setString] = useState('');
  const [history, setHistory] = useState([]);
  const [radius, setRadius] = useState(10);
  const [err404, set404] = useState(false);
  const token = useContext(TokenContext);

  const changeString = (str) => {
    setString(str);
  }
  const onSearch = async () => {
    set404(false);
    let requrl = "";
    if( string == ""){
      requrl = `${process.env.APIURL}/mission/search?lat=${100}&long=${100}&radius=${radius}`;
    }else{
      let isNew = history.every( el => {
        if(el == string){
          return false;
        }
        return true;
      })
      if(isNew == true){
        setHistory([...history, string]);
      }
      requrl = `${process.env.APIURL}/mission/search/string?lat=${100}&long=${100}&radius=${radius}&string=${string}`
    }
    try{
      let res = await axios
      .get( requrl,{ headers: { Authorization: `Bearer ${token[0]}`}});
      // DO SOMETHING WITH res.data HERE
    }catch (e) {
      if(e.response.status == 404){
        set404(true);
      }else{
        console.log(e)
      }
    }
  }
  const onReset = () => {
    setHistory([]);
  }
  return (
    <View style={styles.page}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Que recherchez vous ?"
          onChange={value => setString(value.nativeEvent.text)}
          value={string}
        />
      </View>
      <View style={styles.sliderContainer}>
      <Text style={styles.radiusText}>Dans un radius de {radius} km</Text>
        <Slider style={styles.slider}
          minimumValue={0}
          maximumValue={20}
          step={0.5}
          onValueChange={(value) => setRadius(value)}
          value={radius}
          minimumTrackTintColor="#7D1D3F"
          maximumTrackTintColor="#000000"
          thumbTintColor="#7D1D3F"
        />
      </View>
      <View style={styles.historyContainer}>
        <View style={styles.historyHead}>
          <Text style = {styles.text}>Recherché recemment</Text>
          <TouchableOpacity style={styles.delete} onPress={onReset}>
            <Text style={styles.deleteText}>effacer</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.historyList}>
          {history.map((string, i) => {
            return (<TouchableOpacity onPress={() => changeString(string)}>
                      <Text style={styles.historyItem} key={i}>{string}</Text>
                    </TouchableOpacity>)
          })}
        </View>
      </View>
      {err404 == true ? <Text style={{color: "#7D1D3F", textAlign: 'center'}}>Aucune Mission Trouvée , Reessayez !</Text>: <></>}
      <TouchableOpacity style={styles.search} onPress={onSearch}>
        <Text style={styles.searchText}>Rechercher</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  icons: {
    width: 30,
    height: 30,
    marginLeft: 20,
  },
  page: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  text: {
    fontSize: 18,
  },
  // input search
  inputContainer: {
    width: '90%',
    height: '10%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputText: {
    textAlign: 'center',
    color: C_Back_Write,
    backgroundColor: C_Blue_Background,
    width: '90%',
    fontSize: 20,
    marginLeft: 20,
    marginBottom: -10,
    borderRadius: 15,
    flex:1
  },
  radiusText: {
    fontSize: 20,
    color: C_Back_Write,
  },
  // history
  historyContainer:{

  },
  historyHead: {
    flexDirection: 'row',
    fontSize: 18,
  },
  delete: {
    marginLeft: '20%',
    backgroundColor:'#9D9D9D',
    borderRadius: 5,
    
  },
  deleteText: {
    fontSize: 18,
    color: C_White,
    marginLeft: 5,
    marginBottom: -10,
    marginRight: 5,
  },
  historyList:{

  },
  historyItem:{

  },
  //search button
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: C_Purple_Underline,
    color: C_White,
    paddingHorizontal: '5%',
    paddingVertical: '2%',
    borderRadius: 80,
    position: 'absolute', //Here is the trick
    bottom: 20, //Here is the trick
    alignSelf: 'center',
  },
  searchText: {
    textAlign: 'center',
    color: C_White,
    fontSize: 20,
    fontWeight: 600,
  },
});