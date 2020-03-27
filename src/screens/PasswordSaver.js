import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

function PasswordSaver({navigation}) {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Email'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'ATM pin'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Email 2'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'email 3'
    },
  ];

const pageNavigation=(item)=>{
navigation.navigate('Password Entry',{item})
}

  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
         
            <View style={{borderBottomColor:'#6c63ff',borderBottomWidth:1}}>
               <TouchableOpacity style={{padding: 20}} onPress={()=>pageNavigation(item)}>
              <Text style={{fontSize: 24}}>{item.title}</Text>
              </TouchableOpacity>
            </View>
          
        )}
      />
    </View>
  );
}

export default PasswordSaver;
