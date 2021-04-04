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
  SafeAreaView,
  View,
  FlatList,
  Text,
  Pressable,
} from "react-native";
import { material } from "react-native-typography"; //consider using this!
import { Metrics, Colors } from "../Themes";
import * as Linking from 'expo-linking';
import { TouchableOpacity } from "react-native";
import Article from './Article';


export default function News(props) {
  const defaultProps = { articles: [] };
  const [result, setResult] = useState(null);


  const propTypes = {
    articles: PropTypes.array,
  };

  const renderArticles = (item) => {
    
    return (
      // <View style={styles.card}>

      <Pressable onPress={() => {
        // Linking.openURL(item.item.url);
        // return <Article/>
        console.log('item url check ', item.item.url);
        props.navigation.navigate('Article', item.item.url);

      
        
      }
    
    }
      >
        <View style={styles.card}>
          <Text style={material.title}>{item.item.title}</Text>
          <Text style={material.subheading}> {item.item.snippet}</Text>
          <Text style={material.body2}> {item.item.byline}</Text>
          <Text style={material.body2}> {item.item.date.substr(0, 10)}</Text>

        </View>


      </Pressable>

      // </View>
    )
  }



  return (


    <View style={styles.container}>
      

      {/*A FlatList or SectionList of news articles*/}
      <FlatList
        //data
        data={props.resultArticles} //passed in as props? 
        renderItem={renderArticles}
        keyExtractor={item => item.url}
      //display it
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  card: {
    padding: 7,

    height: Metrics.screenHeight / 3,
    width: Metrics.screenWidth * 0.9,
    borderRadius: Metrics.screenWidth * 0.9 * 0.02,
    margin: 5,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',

  },

  flatlist: {
    flex: 1,
    width: '100%',
  },
});
