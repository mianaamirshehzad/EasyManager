///import { StatusBar } from 'expo-status-bar'
import { NavigationHelpersContext } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, ToastAndroid, Image, ScrollView, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons';


import CustomButton from '../../src/components/CustomButton';
import CustomTextInput from '../../src/components/CustomTextInput';
import styles from '../styles/Styles';
import Signup from './SignupForm';
import ForgotPassword from './ForgotPassword';
import Dashboard from './Dashboard';

const Login = (props) => {
    return(
        <KeyboardAvoidingView
            behavior='position'
            style = {styles.container}>
            <ScrollView>
                <Image 
                    style = {styles.loginImage}
                    source={require('../../assets/login.jpg')}    
                />
                <View style = {{flexDirection: 'row', justifyContent: 'flex-end'}}>
                   <TouchableOpacity
                   onPress={() => props.navigation.navigate('ForgotPassword')}
                   >
                        <Text style = {{fontWeight: 'bold', color: '#4b4df8', marginRight: 20}} >
                            Forgot Password?
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.inputViewContainer}>
                    <CustomTextInput type = 'Email'
                    keyboardType='numeric'
                    />
                    <Image source={require('../../assets/mailbox.png')}
                        style = {styles.icon}
                        />
                </View>
                <View style = {styles.inputViewContainer}>
                    <CustomTextInput type = 'Password'
                    secureTextEntry = {true}
                    />
                    <Image source={require('../../assets/lock.png')}
                        style = {styles.icon}
                        />

                    
                </View>
                <View style = {{ alignItems: 'center',justifyContent:'center', flexDirection: 'row'}}>
                    <Text>
                        By signing in, you agree to
                    </Text>
                    <TouchableOpacity>
                        <Text style = {{ fontWeight: 'bold', color: '#4b4df8'}} > terms & conditions</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <CustomButton name = " Login"
                    press = {() => props.navigation.navigate('Dashboard')}
                    />
                </View>
                <View style = {{ alignItems: 'center', justifyContent:'center', margin: 10, flexDirection: 'row'}}>
                    <Text >
                        Don't Have Account?
                    </Text>
                    <TouchableOpacity 
                    onPress={() => props.navigation.navigate('Signup')}>
                        <Text style = {{ fontWeight: 'bold', color: '#4b4df8'}} 
                         >
                              Register
                        </Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
            </KeyboardAvoidingView>
    );
}

export default Login;