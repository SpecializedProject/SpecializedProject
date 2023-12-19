import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {useState} from 'react';
import Icon, { Icons } from '../components/Icons';
import HomeScreen from './HomeScreen';
import LessonList from './LessonList';

const Stack = createNativeStackNavigator();
export default StackHomeScreen = ({navigation}) => {
   
    // let parentStack = navigation.getParent();
    // console.log(parentStack);

    return (
            <Stack.Navigator
                screenOptions={
                    {
                        headerShown:false
                    }
                }
            >
            <Stack.Screen name="Home" component={HomeScreen} 
              
            />
            <Stack.Screen name="LessonList" component={LessonList} />
            </Stack.Navigator>
    )
}