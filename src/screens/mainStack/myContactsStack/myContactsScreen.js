import React from "react";
import { View,Text, StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function MyContactsScreen(){
    return(
        <View style={styles.screen}>
            <Text>
                My Contact will be here
                <Ionicons name="home" size={25}/>
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