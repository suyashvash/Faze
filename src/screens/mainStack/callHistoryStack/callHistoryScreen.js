import React from "react";
import { View,Text, StyleSheet } from "react-native";


export default function CallHistoryScreen(){
    return(
        <View style={styles.screen}>
            <Text>
             Call History
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