import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {db} from '../config';
import {Container} from './styles';

let itemsRef = db.ref('/savepassword');

function PasswordSaver({navigation}) {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    itemsRef.on('value', snapshot => {
      let data = snapshot.val();
      let items = Object.values(data);
      console.log('get===>', items);
      setListData(items);
    });
  }, []);

  const pageNavigation = item => {
    navigation.navigate('Password Entry', {item});
  };

  return (
    <Container style={{paddingTop: 10, paddingBottom: 10}}>
      <FlatList
        data={listData}
        renderItem={({item}) => (
          <View style={{margin: 5}}>
            <TouchableOpacity
              style={{
                padding: 20,
                backgroundColor: '#6c63ff',
                borderRadius: 15,
              }}
              // onPress={() => pageNavigation(item)}
            >
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text
                  style={{fontSize: 22, color: 'white', fontWeight: 'bold'}}>
                  Title :{' '}
                </Text>
                <Text style={{fontSize: 22, color: 'white'}}>{item.title}</Text>
              </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text
                  style={{fontSize: 22, color: 'white', fontWeight: 'bold'}}>
                  Password :{' '}
                </Text>
                <Text style={{fontSize: 22, color: 'white'}}>
                  {item.password}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: 'rgba(0,0,0,0.2)',
          alignItems: 'center',
          justifyContent: 'center',
          width: 70,
          position: 'absolute',
          bottom: 10,
          right: 10,
          height: 70,
          backgroundColor: '#6c63ff',
          borderRadius: 100,
        }}>
        <Text style={{fontSize: 30, color: 'white'}} onPress={pageNavigation}>
          +
        </Text>
      </TouchableOpacity>
    </Container>
  );
}

export default PasswordSaver;
