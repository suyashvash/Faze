import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, Touchable, TouchableOpacity, Alert } from "react-native";
import { Colors } from '../../utils/colors';
import { Routes } from '../routes';

export default function LoginScreen({ navigation }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const login = () => {
        if (email.trim() !== "" && password.trim() !== "") {

            const data = {
                email: email,
                password: password
            }
            console.log(data)
        } else {
            Alert.alert('Login', 'Please fill all the fields !')
        }
    }

    return (
        <View style={styles.page}>
            <Text style={{ fontSize: 30, color: Colors.primary }}>Faze</Text>
            <Text style={{ marginBottom: 20 }}>Online video-chat app</Text>
            <TextInput
                style={styles.input}
                onChange={setEmail}
                placeholder="Email"
                keyboardType='email-address'
            />
            <TextInput
                style={styles.input}
                onChange={setPassword}
                placeholder="Password"
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button} onPress={() => login()}>
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 18 }}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate(Routes.onBoardingStack.registerScreen)} style={{ marginTop: 15 }}>
                <Text style={{ textAlign: 'center' }}>Need an Account ? Register now !</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: 43,
        margin: 12,
        width: '80%',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        fontSize: 16

    },
    button: {
        width: '80%',
        padding: 10,
        marginTop: 15,
        borderRadius: 5,
        backgroundColor: Colors.primary
    }
})