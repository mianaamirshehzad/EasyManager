import * as React from 'react';
import {Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/LoginForm';
import Signup from '../screens/SignupForm';
import styles from '../styles/Styles';
import ForgotPassword from '../screens/ForgotPassword';
import Dashboard from '../screens/Dashboard';


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
       screenOptions={{
            headerStyle: {
              backgroundColor: '#4b4df8',
            }, 
            headerTitleStyle : {
              color: 'white'
            }
       }} >
        <Stack.Screen
          name="Login"
          component = {Login}
          options={{ 
            title: 'Welcome', 
            statusBarColor: 'white', 
            headerTitleAlign: 'center' }}
        />
        <Stack.Screen 
          name = "Signup"
          component = {Signup}
          options = {{
            title: 'Registration',
            statusBarColor: 'white',
            headerTitleAlign: 'center'
            }}
        />
        <Stack.Screen
        name = "ForgotPassword"
        component = {ForgotPassword}
        options ={{
          title: 'Reset your Security',
          statusBarColor: 'white',
          headerTitleAlign: 'center'
        }}
        />
        <Stack.Screen
        name = "Dashboard"
        component={Dashboard}
        options = {{
          title: 'Manage Your Money',
          statusBarColor: 'white',
          headerTitleAlign: 'center'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;