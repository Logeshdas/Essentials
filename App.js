import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/HomeScreen';
import PasswordSaver from './src/screens/PasswordSaver';
import Receiver from './src/screens/Receiver';
import Borrower from './src/screens/Borrower';
import PasswordEntry from './src/screens/PasswordEntry';
import Settings from './src/screens/Settings';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import lightTheme from './src/themes/light';
import darkTheme from './src/themes/dark';

const Stack = createStackNavigator();
// console.disableYellowBox = true;

export default function App() {
  const [dark, setDark] = useState(false);
  console.warn('kldsjfkl', dark);
  const darkmode = () => {
    () => setDark(!dark);
  };

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <StatusBar
        barStyle={dark ? 'light-content' : 'dark-content'}
        backgroundColor={dark ? darkTheme.background : darkTheme.background}
      />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Password Saver" component={PasswordSaver} />
          <Stack.Screen name="Receiver" component={Receiver} />
          <Stack.Screen name="Borrower" component={Borrower} />
          <Stack.Screen name="Password Entry" component={PasswordEntry} />
          <Stack.Screen
            name="Settings"
            component={Settings}
            initialParams={{
              onDarkModeChange() {
                setDark(!dark);
              },
              darkModeValue: dark,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
