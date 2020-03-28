import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import {db} from '../config'
import {Container} from './styles'


function PasswordEntry({route,navigation}) {
  const data = route.params.item;
  const [title, setTitle] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {
   
    if(title && password){
      db.ref('/savepassword').push({
        title: title,
        password:password
      });
      navigation.navigate("Password Saver")
      console.warn("success")
    }
    else(
      console.warn("please fill all the fields")
    )
  };

  return (
    <Container>
      <View
        style={{
          backgroundColor: '#6c63ff',
          margin: 10,
          padding: 10,
          paddingTop: 30,
          paddingBottom: 30,
          borderRadius: 15,
        }}>
        <TextInput
          style={{height: 45,marginBottom:20,fontSize:20,color:'white'}}
          returnKeyLabel={'next'}
          underlineColorAndroid="white"
          autoFocus={true}
          placeholder='Title'
          placeholderTextColor='#c4c4c4'
          onChangeText={text => setTitle(text)}
        />

        <TextInput
          style={{height: 45,fontSize:20,color:'white'}}
          returnKeyLabel={'next'}
          underlineColorAndroid="white"
          placeholder='Password'
          placeholderTextColor='#c4c4c4'
          onChangeText={text => setPassword(text)}
        />
        <TextInput />
        <TouchableOpacity
          onPress={submit}
          style={{
            backgroundColor: 'white',
            marginLeft:90,
            marginRight:90,
            padding: 10,
            width: '50%',
            borderRadius:15
          }}>
          <Text style={{textAlign: 'center'}}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}

export default PasswordEntry;
