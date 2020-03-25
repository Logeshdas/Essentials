import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

function PasswordEntry({route}) {
  console.warn(route);
  const data = route.params.item;
  return (
    <View>
      <Text>{data.title}</Text>
    </View>
  );
}

export default PasswordEntry;
