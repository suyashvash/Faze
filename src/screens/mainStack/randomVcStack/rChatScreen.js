import React from "react";
import { View,Text, StyleSheet } from "react-native";


export default function RandomVCChatScreen(){
    return(
        <View style={styles.screen}>
            <Text>
              R Video Call chat Screen
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