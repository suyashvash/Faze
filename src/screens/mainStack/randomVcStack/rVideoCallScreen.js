import React from "react";
import { View,Text, StyleSheet } from "react-native";


export default function RandomVideoCallScreen(){
    return(
        <View style={styles.screen}>
            <Text>
             R Video Call
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})