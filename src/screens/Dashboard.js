import * as React from 'react';
import {Image, Text, View, TouchableOpacity, TextInput } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import styles from '../styles/Styles';

const Dashboard = () => {
    return(
        <View>
            <View style = {styles.topDashboard} >
                <Text style = {styles.titleTextDashboard}>
                    At a Glance
                </Text>
                <Text style = {styles.textUnderTitle}>
                    Spent Rs.3500
                </Text>
            </View>
            <View style = {{justifyContent: 'center', alignContent: 'center', flexDirection: 'row', padding: 10}} >
                <Text style = {styles.textDashboard}>
                    Save Expenses Record
                </Text>
                {/* <TouchableOpacity>
                    <Text style = {{ fontWeight: 'bold', color: '#4b4df8'}}>
                        View all
                    </Text>
                </TouchableOpacity> */}
            </View>
            <View style = {{justifyContent: 'center', alignItems: 'center', flexDirection: 'row', padding: 10}} >
                <TouchableOpacity style = {styles.expenseViewContainer}>
                    <Text style = {styles.expenseView}>
                        Food
                    </Text>
                    <Image
                    source={require('../../assets/food.png')}
                    style = {styles.icon} />
                </TouchableOpacity>
            </View>
            <View style = {{justifyContent: 'center', alignItems: 'center', flexDirection: 'row', padding: 10}}>
                <TouchableOpacity style = {styles.expenseViewContainer}>
                        <Text style = {styles.expenseView}>
                            Shopping
                        </Text>
                        <Image
                         source={require('../../assets/shopping.png')}
                         style = {styles.icon} />
                </TouchableOpacity>
            </View>
            <View style = {{justifyContent: 'center', alignItems: 'center', flexDirection: 'row', padding: 10}}>
                <TouchableOpacity style = {styles.expenseViewContainer}>
                        <Text style = {styles.expenseView}>
                            Entertainment
                        </Text>
                        <Image
                         source={require('../../assets/entertainment.png')}
                         style = {styles.icon} />
                </TouchableOpacity>
            </View>
            <View style = {{justifyContent: 'center', alignItems: 'center', flexDirection: 'row', padding: 10}}>
                <TouchableOpacity style = {styles.expenseViewContainer}>
                        <Text style = {styles.expenseView}>
                            Travel
                        </Text>
                        <Image
                         source={require('../../assets/travel.png')}
                         style = {styles.icon} />
                </TouchableOpacity>
            </View>
            <View style = {{justifyContent: 'center', alignItems: 'center', flexDirection: 'row', padding: 10}}>
                <TouchableOpacity style = {styles.expenseViewContainer}>
                        <Text style = {styles.expenseView}>
                            Education
                        </Text>
                        <Image
                         source={require('../../assets/education.png')}
                         style = {styles.icon} />
                </TouchableOpacity>
            </View>
            <View style = {{justifyContent: 'center', alignItems: 'center', flexDirection: 'row', padding: 10}}>
                <TouchableOpacity style = {styles.expenseViewContainer}>
                        <Text style = {styles.expenseView}>
                            Health
                        </Text>
                        <Image
                         source={require('../../assets/health.png')}
                         style = {styles.icon} />
                </TouchableOpacity>
            </View>
            <CustomButton
            name = {'Report'} />
        </View>
    );
};

export default Dashboard;