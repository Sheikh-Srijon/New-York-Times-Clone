import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ImageStore } from "react-native";
import { Images, Colors, Metrics } from "../Themes";

export default class Logo extends React.Component {
    render() {
        return (
            <View style={styles.logo}>
                <Image style={styles.pic} source={Images.logo}></Image>
            </View>
            
            

        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      //justifyContent: "center",
      //alignItems: "center",
    },
    logo: {
       
      height: Metrics.screenHeight * 0.1,
      width: Metrics.screenWidth,
      
     
    },
    pic: {
      justifyContent:'flex-start',
      height: 50,
      width: Metrics.screenWidth,
      resizeMode: 'contain',
      alignSelf: 'center',
      
    },
  });
