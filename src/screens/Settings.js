import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Switch,
  AsyncStorage,
} from 'react-native';
import {Container,TextView} from './styles';
function Settings({route}) {
  console.warn(route.params.darkModeValue);
  const [data, setIsEnabled] = useState(false);

  const changeData = route.params.onDarkModeChange;

  return (
    <Container>
        <View style={{flexDirection:'row',margin:20,justifyContent:'space-between'}}>
      <TextView style={{fontSize:22}}>Change theme</TextView>
      <Switch value={data} onValueChange={changeData} thumbColor='#6c63ff'/>
      </View>
    </Container>
  );
}

export default Settings;
