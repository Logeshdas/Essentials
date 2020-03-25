import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/HomeScreen'
import PasswordSaver from './src/screens/PasswordSaver'
import Receiver from './src/screens/Receiver'
import Borrower from './src/screens/Borrower'
import PasswordEntry from './src/screens/PasswordEntry'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Password Saver" component={PasswordSaver} />
    <Stack.Screen name="Receiver" component={Receiver} />
    <Stack.Screen name="Borrower" component={Borrower} />
    <Stack.Screen name="Password Entry" component={PasswordEntry} />
  </Stack.Navigator>
  </NavigationContainer>
  );
}