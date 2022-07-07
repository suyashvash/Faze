import React from "react";
import { View,Text, StyleSheet } from "react-native";


export default function MyContactChatScreen(){
    return(
        <View style={styles.screen}>
            <Text>
                My Contact VC Chat
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