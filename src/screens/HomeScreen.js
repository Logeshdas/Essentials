import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

function HomeScreen({navigation}) {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Password saver',
      imageUrl: require('../images/saver.png'),
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Receiver',
      imageUrl: require('../images/saver.png'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Borrower',
      imageUrl: require('../images/saver.png'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Coming soon',
      imageUrl: require('../images/saver.png'),
    },
  ];

  const pageNavigation = item => {
    if (item.id == 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba') {
      navigation.navigate('Password Saver');
    } else if (item.id == '3ac68afc-c605-48d3-a4f8-fbd91aa97f63') {
      navigation.navigate('Receiver');
    } else if (item.id == '58694a0f-3da1-471f-bd96-145571e29d72') {
      navigation.navigate('Borrower');
    }
  };
  return (
    <View>
      <FlatList
        data={DATA}
        numColumns={2}
        renderItem={({item}) => (
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => pageNavigation(item)}>
            
              <View
                style={{
                  justifyContent: 'center',
                  backgroundColor: '#6c63ff',
                  borderRadius: 10,
                  height: 200,
                  margin: 10,
                }}>
                    
                <Text
                  style={{textAlign: 'center', color: 'white', fontSize: 18}}>
                  {item.title}
                </Text>
                
              </View>
          
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default HomeScreen;
