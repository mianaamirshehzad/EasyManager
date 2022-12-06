///import { StatusBar } from 'expo-status-bar'
import * as React from 'react';
import { StyleSheet, Image, Text, View, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style = {styles.headerBar}>
        <Text style = {styles.headerBarText} >Welcome to Mobile App Development</Text>
      </View>
      <View>
        <Image 
        style = {styles.image}
        source={require('../assets/man.png')} />
      </View>
      <TextInput 
      style = {styles.input}
      placeholder='Enter your email'  
      />
      <TextInput 
      style = {styles.input}
      placeholder='Enter your password' 
      secureTextEntry = {true}
      />
      <TouchableOpacity 
      style = {styles.button}>
        <Text style = {styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.bottomText}>
        <Text>Signup Instead</Text>
      </TouchableOpacity>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerBar: {
    alignSelf: 'center',
    backgroundColor: 'orange',
    padding: 10,
    margin: 5,
    position: 'absolute',
    top: 0
  },
  headerBarText: {
    fontSize: 20,
    color: '',
    fontWeight: 'bold',
    alignContent: 'center',
    justifyContent: 'center'
  },
  
  
  image: {
    borderColor: "orange",
    borderWidth: 5,
    height: 100,
    width: 200,
    resizeMode: 'contain',
    borderRadius: 80
  }, 
  bottomText: {
    padding: 10,
  }

});

export default Login;


