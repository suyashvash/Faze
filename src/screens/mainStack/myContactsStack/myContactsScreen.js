import React from "react";
import { View,Text, StyleSheet } from "react-native";


export default function MyContactsScreen(){
    return(
        <View style={styles.screen}>
            <Text>
                My Contact will be here
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