import React, { useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, TextInput, Text, Button } from 'react-native';
// import { AsyncStorage } from 'react-native';
import { AsyncStorage } from 'react-native';
import metrics from '../Themes/Metrics';
// import Button from '@material-ui/core/Button';

export default function Onboarding({navigation}) {
    const [name, setName] = useState("");
    const [greet, setGreet] = useState("What's your name?");
    const save = async () => {
        try {
            await AsyncStorage.setItem("name", name);
            console.log('async storage execution');
        }


        catch (err) {
            alert(err);
        }
    }
    const load = async () => {
        try {
            let name = await AsyncStorage.getItem("name");

            if (name !== null) {
                setName(name);
            }
        }
        catch(err){
            alert(err);

        }
    }

    useEffect( () =>{
        load();

    }, [])


    return (
        <SafeAreaView style={styles.container
        }>
            <Text style={{fontSize:18,}}>{greet}</Text>
            <TextInput
                style={styles.textBox}
                value={name}
                onChangeText={(value) => { setName(value) }}
            />
            <Button title='Save'
                onPress={() =>{setGreet("Welcome back, ");
                    save(); } 
                    }
            ></Button>

            <Button title='Enter'
            onPress={()=>{navigation.navigate('Main')}}
            ></Button>

        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:10,
    },

    textBox: {
        padding: 3,
        width: metrics.screenWidth * 0.6,
        height: 50,
        borderRadius: 5,
        borderWidth: 1,

    },

    text:{
        fontSize:14,

    }
})
