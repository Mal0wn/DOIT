import React, {useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';


import {
  View,
  TextInputField,
  Button
} from 'react-native';

function CreateMission({navigation}) {
    const [title, setTitle] = useState('')
    const [description , setDescription] = useState('')
    const [price , setPrice] = useState(0)

  return(
    <View> 
        {/* <TextInputField
        iconName='person'
        iconType='MaterialIcons'
        placeholder='Enter title'
        value={title}
        onChangeText={text => setTitle(text)}
      />
       <TextInputField
        iconName='person'
        iconType='MaterialIcons'
        placeholder='Enter description'
        value={description}
        onChangeText={text => setDescription(text)}
      />
      <TextInputField
        iconName='person'
        iconType='MaterialIcons'
        placeholder='Enter price'
        value={price}
        onChangeText={text => setPrice(text)}
      /> */}
      <Button title='Submit' onPress={() => console.log("submit")}/>
    </View>
   );
    
  }

  export default CreateMission;


 
  