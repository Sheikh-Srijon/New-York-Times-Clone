import React from 'react'; 
import {View, StyleSheet,SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';

export default function Article(props) {
    console.log( 'webview props', props.route.params)
    return (
       
            <WebView source={{uri: props.route.params}}
            />

      
    )
}
const styles = StyleSheet.create({

    container:
    {flex:1,
    }
})
