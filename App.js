import { StatusBar } from 'expo-status-bar'
import * as React from 'react';
import { StyleSheet, Image, Text, View, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import styles from './src/styles/Styles';
import Navigation from './src/navigation/Navigation';

const App = () => {
  return(
    <View style = {styles.container} >
      <Navigation />
    </View>
  );
}

export default App;