import * as React from 'react';
import {Image, Text, View, TouchableOpacity, TextInput } from 'react-native';
import CustomButton from '../components/CustomButton';
// import CustomTextInput from '../components/CustomTextInput';
import styles from '../styles/Styles';

const ForgotPassword = () => {
    return(
        <View style={{flex: 1}}>
            <Image
            style = {styles.passwordImage}
            source={require('../../assets/forgot.jpg')} 
            />
            <Text style = {styles.bottomText} >
                Enter Email Address
            </Text>
            <Text style = {{paddingLeft: 20}} > 
                We'll send a password reset email!
            </Text>
            <TextInput 
            placeholder = 'Enter your email'
            style = {styles.sentEmail} />
            <CustomButton name = 'Send'
            press = {() => alert('Password Reset Email Sent')}
             />
        </View>
    );
};

export default ForgotPassword;