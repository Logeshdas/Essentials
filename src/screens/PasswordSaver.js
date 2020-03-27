import React,{useEffect,useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import { db } from '../config';

let itemsRef = db.ref('/savepassword');

function PasswordSaver({navigation}) {
const [listData,setListData] = useState([])

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Email',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'ATM pin',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Email 2',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'email 3',
    },
  ];


useEffect(()=>{
  itemsRef.on('value', snapshot => {
    let data = snapshot.val();
    let items = Object.values(data);
    console.log("get===>",items)
    setListData(items)
  });
},[])

  const pageNavigation = item => {
    navigation.navigate('Password Entry', {item});
  };

  return (
    <View style={{flex:1}}>
      <FlatList
        data={listData}
        renderItem={({item}) => (
          <View style={{margin:5}}>
            <TouchableOpacity
              style={{padding: 20, backgroundColor: '#6c63ff',borderRadius:15}}
              onPress={() => pageNavigation(item)}>
              <Text style={{fontSize: 22, color: 'white'}}>{item.title}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

export default PasswordSaver;
