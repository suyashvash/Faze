import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Alert, Touchable, TouchableOpacity } from "react-native";
import { Colors } from '../../utils/colors';
import { Routes } from '../routes';

export default function RegisterScreen() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [mobile, setMobile] = useState(0)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signUp = () => {

        if (firstName !== "" && lastName !== "" && mobile.length !== 0 && email !== "" && password !== "") {
            const data = {
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
                mobile: mobile
            }
            console.log(data)
        } else {
            Alert.alert('Sign Up / Register', "Please fill all fields !")
        }
    }

    return (
        <View style={styles.page}>
            <Text style={{ marginBottom: 20, fontSize: 25, color: Colors.primary }}>Welcome to Faze</Text>
            <View style={{ width: '85%', flexDirection: 'column', justifyContent: 'flex-start' }}>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>

                    <TextInput
                        style={[styles.input, { width: '48%', marginRight: 5 }]}
                        onChange={setFirstName}
                        placeholder="First Name" />

                    <TextInput
                        style={[styles.input, { width: '48%', margin: 5 }]}
                        onChange={setLastName}
                        placeholder="Last Name" />

                </View>


                <TextInput
                    style={styles.input}
                    onChange={setMobile}
                    placeholder="Mobile Number"
                    keyboardType='phone-pad'
                />

                <TextInput
                    style={styles.input}
                    onChange={setEmail}
                    placeholder="Email"
                    keyboardType='email-address'
                />

                <TextInput
                    style={styles.input}
                    onChange={setPassword}
                    secureTextEntry={true}
                    placeholder='Password'
                />
                <TouchableOpacity onPress={() => signUp()} style={styles.button}>
                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 18 }}>Sign Up</Text>
                </TouchableOpacity>


            </View>

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
        margin: 5,
        width: '100%',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        fontSize: 16,
        marginTop: 12,

    },
    button: {
        width: '100%',
        padding: 10,
        marginTop: 15,
        borderRadius: 5,
        backgroundColor: Colors.primary
    }
})