import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { Button, Image,Input } from 'react-native-elements'
import { auth } from '../firebase'

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(()=> {
        const unsubscribe = auth.onAuthStateChanged((authUser)=>{
            if (authUser) {
                navigation.replace('Home')
            }
        })
        return unsubscribe
    },[])

    const signIn = () => {
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <StatusBar style="light"/>
            <Image source={require('../assets/logo.png')} style={{width: 200, height: 200, marginBottom: 30}}/>
            <View style={styles.inputContainer}>
                <Input placeholder="Your Email" autoFocus value={email} onChangeText={(text)=> setEmail(text)} type="email" />
                <Input placeholder="Your password" secureTextEntry value={password} onChangeText={(text)=> setPassword(text)} type="password" />
            </View>
            <Button containerStyle={styles.button} onPress={signIn} title="Login" />
            <Button containerStyle={styles.button} onPress={()=> navigation.navigate("Register")} type="outline" title="Register" />
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 10,
    },
    inputContainer: {
        width: 300
    },
    button: {
        width: 200,
        marginTop: 10
    },
})