import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import WelcomeScreen from './Screens/WelcomeScreen.js'


export default function App() {
  return (
    
    <View>
    <WelcomeScreen/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
