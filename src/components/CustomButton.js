///import { StatusBar } from 'expo-status-bar'
import * as React from 'react';
import { Text, View, ToastAndroid, TouchableOpacity} from 'react-native';
import styles from '../styles/Styles';

//Functions to see
export default function (props) {
    return(
        <TouchableOpacity onPress={() => props.press()} >
            <View style = {styles.button} >
                <Text style = {styles.buttonText}>
                    {props.name}
                </Text>
            </View>
        </TouchableOpacity>
    )
};