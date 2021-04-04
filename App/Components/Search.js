/*
 *
 * Assignment 3
 * Starter Files
 *
 * CS47
 * Jan, 2021
 */

import React, { useState } from "react";
import PropTypes from "prop-types"; //consider using this!
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Platform,
  Keyboard,
  Pressable,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Metrics, Colors } from "../Themes";
import { SearchBar } from "react-native-elements";
import Icon from 'react-native-vector-icons/AntDesign';

export default function Search(props) {
  const [text, setText] = useState("");
  

  return (

    <View style={styles.searchBar}>
       <Pressable onPress={() => Alert.alert('pressed')}>
          <Icon name="search1"
            size= "30"
           />

        </Pressable>

        <TextInput
          value={text}
          onChangeText={(text) => setText(text)}
          style={styles.textInput}
          onSubmitEditing={()=>
            //run a query to NYT API
           props.loadArticles(text,"")
          
          }     
        />
        {/* News.js should received this.resultArticles  from parent */}
        
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    alignSelf: 'center',
    width: Metrics.screenWidth * .6,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
  },
  searchBar: {
    margin: 10,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    height: 44,
    width: Metrics.screenWidth * 0.95,
    // backgroundColor:'red',
    backgroundColor: '#C5C5C5',
    borderRadius: 50,
    padding: 7,
    borderColor: '#ccc',


  },
});
