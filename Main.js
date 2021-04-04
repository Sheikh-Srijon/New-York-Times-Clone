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
import APIRequest from "./App/Config/APIRequest";
//import Logo from "./App/Components/topBar";
import Logo from "./App/Components/logo";
import search from "./App/Images/search.svg";
import Icon from 'react-native-vector-icons/AntDesign';
import Article from './App/Components/Article';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import News from "./App/Components/News";
import Search from "./App/Components/Search";
import { Alert } from "react-native";

export default function Main({navigation}) {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [searchText] = useState("");
  const [category] = useState("");

  const [text, setText] = useState('');//for text input

  const loadArticles = async (searchTerm = "", category = "") => {
    setLoading(true);
    setArticles([]);
    console.log("search term check", searchTerm);
    var resultArticles = [];
    if (category === "") {
      resultArticles = await APIRequest.requestSearchPosts(searchTerm);
    } else {
      resultArticles = await APIRequest.requestCategoryPosts(category);
    }
    
    setArticles(resultArticles);
    setLoading(false);
  };


  useEffect(() => {
    //uncomment this to run your API query!
     loadArticles();
  }, []);

  contentDisplayed = null;

  return (

    <SafeAreaView style={styles.container}>

      {/* <Logo /> */}
      <Search 
       loadArticles = {loadArticles} 
      />
       
        {loading === true? 

          <View>
            <ActivityIndicator size="large" />

          </View> :  
          <News
          resultArticles = {articles}
          loading = {loading}
          navigation = {navigation}
          > 
          </News>}
         {/* <Article></Article> */}
         
        
    </SafeAreaView>
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
