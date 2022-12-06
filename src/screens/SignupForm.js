///import { StatusBar } from 'expo-status-bar'
import React, {useState} from 'react';
import { StyleSheet, ToastAndroid, Image, ScrollView, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import {app} from '../firebase/Firebase';

import CustomButton from '../../src/components/CustomButton';
import CustomTextInput from '../../src/components/CustomTextInput';
import styles from '../styles/Styles';

const Signup = (props) => {

    const auth = getAuth(app);

    const [name, setName] = useState("");
    // const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");


    const signupPress = async () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            alert(name);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert(errorMessage);
        });
    }

    return(
        <ScrollView >
            {/* <KeyboardAvoidingView 
                behavior='position'
                style = {styles.container}> */}
                <View>
                    <Image
                    style = {styles.signupImage} 
                    source={require('../../assets/signup.jpg')} />
                    <Text style = {styles.titleText} >Create An Account</Text>
                    
                    {/* //Account needed fields */}
                    <View style = {styles.inputViewContainer}>
                        <CustomTextInput 
                        type = 'Name' 
                        onText = {()=> setName()}
                        style = {{flex: 1}} />
                        <Image 
                        source={require('../../assets/name.png')}
                        style = {styles.icon}
                        />                    
                    </View>
                    <View style = {styles.inputViewContainer}>
                        <CustomTextInput 
                        type = 'Email' 
                        onText = {() => setEmail()}
                        style = {{flex: 1}} />
                        <Image 
                        source={require('../../assets/mailbox.png')}
                        style = {styles.icon}
                        />                    
                    </View>
                    <View style = {styles.inputViewContainer}>
                        <CustomTextInput 
                        type = 'Phone'
                        onText = {() => setPhone()}
                         style = {{flex: 1}} />
                        <Image 
                        source={require('../../assets/phone.png')}
                        style = {styles.icon}
                        />                    
                    </View>
                    <View style = {styles.inputViewContainer}>
                        <CustomTextInput 
                        type = 'Password'
                        onText = {() => setPassword()}
                        style = {{flex: 1}} />
                        <Image 
                        source={require('../../assets/hide.png')}
                        style = {styles.icon}
                        />                    
                    </View>
                    <View style = {styles.inputViewContainer}>
                        <CustomTextInput 
                        type = 'Re-Enter Password'
                        onText = {() => setRePassword()}
                        style = {{flex: 1}} />
                        <Image 
                        source={require('../../assets/hide.png')}
                        style = {styles.icon}
                        />                    
                    </View>
                    <View style = {{ alignItems: 'center', justifyContent:'center', margin: 10, flexDirection: 'row'}}>
                        <Text >
                            Alread a Member?
                        </Text>
                        <TouchableOpacity 
                        onPress={() => props.navigation.navigate('Login')}>
                            <Text style = {{ fontWeight: 'bold', color: '#4b4df8'}} 
                            >
                                 Login
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <CustomButton 
                    name = 'Signup'
                    press = {() => signupPress()} />
                    <Text style = {styles.bottomText}>_______ with _______</Text>
                    <View style = {{ alignItems: 'center', justifyContent:'center', margin: 10, flexDirection: 'row'}}>
                        <TouchableOpacity >
                            <Image
                            style = {styles.orSignupImage}
                            source={require('../../assets/facebook.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Image
                            style = {styles.orSignupImage}
                            source={require('../../assets/google.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Image
                            style = {styles.orSignupImage}
                            source={require('../../assets/github.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            {/* </KeyboardAvoidingView> */}
        </ScrollView>
    );
}

export default Signup;