import React from "react";
import { View,Image, StyleSheet,Text,TouchableOpacity,ScrollView } from "react-native";
import userAvatar from '../../../utils/userAvatar.png'
import {Colors} from '../../../utils/colors'

export default function ProfileViewScreen(){





    return(
        <View style={styles.screen}>
            <ScrollView contentContainerStyle={{alignItems:'center'}} style={styles.scrollStyle}>
                <Image source={userAvatar } style={{width:100,height:100,borderRadius:50}}/>
                <View style={{width:'95%',marginVertical:10}}>
                <Text style={styles.heading}>Name</Text>
                <Text style={styles.details}>Suyash Vashishtha</Text>

                <Text style={styles.heading}>Mobile</Text>
                <Text style={styles.details}>6378138062</Text>

                <Text style={styles.heading}>Email</Text>
                <Text style={styles.details}>suyashvashishtha@gmail.com</Text>

                <Text style={styles.heading}>About</Text>
                <Text style={styles.details}>Hi, I am a Software Engineer who just copy pastes the code from diff sites and do Caffiene drugs </Text>
                
                
                <Text style={[styles.heading,{marginTop:20}]}>Options</Text>
               
               <TouchableOpacity style={styles.button} >
                    <Text style={{paddingLeft:10,  textAlign: 'left', color: 'white', fontSize: 18 }}>Make Video call</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} >
                    <Text style={{paddingLeft:10,  textAlign: 'left', color: 'white', fontSize: 18 }}>Block</Text>
                </TouchableOpacity>


             
              
                </View>

               

            </ScrollView>
   
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
    },
    scrollStyle:{

        width:'100%',
        padding:10,
        paddingTop:20,
        paddingBottom:40,
      
    },
    heading:{
        fontWeight:'bold',
        fontSize:14,
        marginBottom:2,
        color:Colors.primary
    },
    details:{
        fontSize:16,
        marginBottom:15,
        color:'grey'
    },
    button: {
        width: '95%',
        padding: 8,
        marginTop: 10,
        borderRadius: 5,
        backgroundColor: Colors.primary
    }
    
})