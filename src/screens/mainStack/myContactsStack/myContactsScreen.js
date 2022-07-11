import React from "react";
import { View,Image, StyleSheet,Text,TouchableOpacity,ScrollView } from "react-native";
import userAvatar from '../../../utils/userAvatar.png'
import { Routes } from "../../routes";

export default function MyContactsScreen({navigation}){



    const contactListD=[
        {id:"231",name:"Palak",pic:""},
        {id:"231",name:"Hetarth",pic:""},
        {id:"231",name:"Arun",pic:""},
        {id:"231",name:"Praveen",pic:""},
        {id:"231",name:"Hemant",pic:""},
        {id:"231",name:"Krrish",pic:""},
        {id:"231",name:"Aditi",pic:""},
        {id:"231",name:"Nikita",pic:""},
        {id:"231",name:"Kamal",pic:""},
        {id:"231",name:"Sarthak",pic:""},
        {id:"231",name:"Piyush",pic:""},
    ]


    return(
        <View style={styles.screen}>
            <ScrollView style={styles.scrollStyle}>
                {
                    contactListD.map((item,index)=>(
                        <TouchableOpacity style={styles.contactSlab} onPress={()=>navigation.navigate(Routes.tabs.myContactStack.profileViewScreen)}>
                        <Image source={userAvatar} style={{width:40,borderRadius:50,height:40}}/>
                        <View style={{paddingLeft:10}}>
                            <Text style={{fontSize:16}}>{item.name}</Text>
                            <Text style={{fontSize:12,marginTop:2,color:'grey'}}>Tap to view Profile</Text>
                        </View>
                        
                    </TouchableOpacity>
                    ))
                }
          
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
        paddingTop:0,
        paddingBottom:40,
    },
    contactSlab:{
        width:'100%',
        flexDirection:'row',
        borderWidth:0.5,
        padding:10,
        borderColor:'whitesmoke',
        backgroundColor:'white',
        borderRadius:8,
        marginVertical:5,
    }
})