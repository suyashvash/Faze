import React from "react";
import { View,Image, StyleSheet,Text,TouchableOpacity,ScrollView } from "react-native";
import userAvatar from '../../../utils/userAvatar.png'

export default function CallHistoryScreen(){



    const historyListD=[
        {id:"231",name:"Palak",pic:"",type:"incoming"},
        {id:"231",name:"Hetarth",pic:"",type:"outgoing"},
        {id:"231",name:"Arun",pic:"",type:"incoming"},
        {id:"231",name:"Praveen",pic:"",type:"outgoing"},
        {id:"231",name:"Hemant",pic:"",type:"outgoing"},
        {id:"231",name:"Krrish",pic:"",type:"incoming"},
        {id:"231",name:"Aditi",pic:"",type:"outgoing"},
        {id:"231",name:"Nikita",pic:"",type:"incoming"},
        {id:"231",name:"Kamal",pic:"",type:"outgoing"},
        {id:"231",name:"Sarthak",pic:"",type:"incoming"},
        {id:"231",name:"Piyush",pic:"",type:"incoming"},
    ]


    return(
        <View style={styles.screen}>
            <ScrollView style={styles.scrollStyle}>
                {
                    historyListD.map((item,index)=>(
                        <View style={styles.contactSlab}>
                        {/* <Image source={userAvatar} style={{width:40,borderRadius:50,height:40}}/> */}
                      
                        <View >
                            <Text style={{fontSize:16}}>{item.name}</Text>
                            <Text style={{fontSize:12,marginTop:2,color:'grey'}}>{item.type }</Text>
                        </View>
                        <Text>July 10 | 02:30 PM</Text>
                        
                    </View>
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
        justifyContent:'space-between'
    }
})