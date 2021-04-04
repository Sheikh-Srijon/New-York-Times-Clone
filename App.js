/*
 *
 * Assignment 3
 * Starter Files
 *
 * CS47
 * Jan, 2021
 */

import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View, SafeAreaView, Image, ImageStore, TextInput, Button, TouchableOpacity,
  ActivityIndicator } from "react-native";
import { Images, Colors, Metrics } from "./App/Themes";
// import APIRequest from "./App/Config/APIRequest";
// //import Logo from "./App/Components/topBar";
// import Logo from "./App/Components/logo";
// import search from "./App/Images/search.svg";
// import Icon from 'react-native-vector-icons/AntDesign';
// import Article from './App/Components/Article';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import News from "./App/Components/News";
import Search from "./App/Components/Search";
import Article from './App/Components/Article';
import { Alert } from "react-native";
import Main from './Main';
import Logo from './App/Components/logo';
import Onboarding from "./App/Components/Onboarding";

const Stack = createStackNavigator();

export default function App() {
  const MyTheme = {
    dark: false,
    colors: {
      primary: 'black',
      background: 'white',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };
 

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
       screenOptions={{
        headerStyle: {
          backgroundColor: 'gray',
          
        },
        headerTitleStyle: {
          // color: 'transparent',
          fontWeight: 'bold',
          fontSize: 24,
          justifyContent:'center',
          
         
        },
        // headerTintColor:'#fff',
      }}
      >
        <Stack.Screen name='OnBoarding' component={Onboarding}/>
        <Stack.Screen name = 'Main' component={Main} options={{headerTitle :<Logo/>}}/>
        <Stack.Screen name='Article' component={Article} options={{headerTitle :<Logo/>}}/>

      </Stack.Navigator>

    </NavigationContainer>
    // <Main/>
    // <Onboarding/>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent:'center',

    backgroundColor: "#fff",

  },
  logo: {
    flex: 1,
    //position: 'fixed',
   // marginTop: 0,
    top: 0,
    height: Metrics.screenHeight * 0.1,
    width: Metrics.screenWidth,
    backgroundColor: 'red',

  },
  pic: {
    //justifyContent: 'flex-start',
    height: Metrics.screenHeight * 0.1,
    width: Metrics.screenWidth,
    resizeMode: 'contain',
    alignSelf: 'center',

  },

 
  searchPic: {
    // resizeMode:'contain',
    
    width: 30,
    height: 30,
  },
});
