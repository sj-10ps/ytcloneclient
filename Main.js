import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Videoplay from './components/Videoplay';

const Main = () => {
    const Stack=createStackNavigator()
    return (
        <NavigationContainer>
             <Stack.Navigator initialRouteName='home' screenOptions={{animation:'fade'}}>
                <Stack.Screen name='home' component={Home} options={{headerShown:false}}></Stack.Screen>
                 <Stack.Screen name='playvideo' component={Videoplay} options={{headerTitle:'',headerStyle: {backgroundColor: 'black',}, headerTintColor: 'white'}}></Stack.Screen>
             </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({})

export default Main;
