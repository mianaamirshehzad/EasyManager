///import { StatusBar } from 'expo-status-bar'
import * as React from 'react';
import { Text, TextInput, View, TouchableOpacity} from 'react-native';
import styles from '../../src/styles/Styles';

export default function (props) {
    return(
        <TextInput 
                style = {styles.input}
                placeholder= {props.type}
                // onChangeText = {(t) => props.onText(t)}
        />
    )
};