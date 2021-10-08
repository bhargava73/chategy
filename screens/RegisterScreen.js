import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffect, useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import { Button, Text,Input } from 'react-native-elements';
import { auth } from '../firebase';

const RegisterScreen = ({navigation}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    useLayoutEffect(()=> {
        navigation.setOptions({
            headerBackTitle: "Login",
        })
    },[navigation]);

    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .then(authUser => {
            authUser.user.updateProfile({
                displayName: name,
                photoURL: imageUrl || "https://i.pravatar.cc/300",
            })
        }).catch(error => alert(error.message));
    };
    return (
        <KeyboardAvoidingView style={styles.container}>
            <StatusBar style="light"/>
            <Text h3 style={{marginBottom: 50}}>Create a Chategy account</Text>
            <View style={styles.inputContainer}>
                <Input placeholder="Your Full Name" autoFocus value={name} onChangeText={(text)=> setName(text)} type="text" />
                <Input placeholder="Your Email" value={email} onChangeText={(text)=> setEmail(text)} type="email" />
                <Input placeholder="Your password" secureTextEntry value={password} onChangeText={(text)=> setPassword(text)} type="password" />
                <Input placeholder="Profile Picture Url (optional)" value={imageUrl} onChangeText={(text)=> setImageUrl(text)} type="text" onSubmitEditing={register} />
            </View>
            <Button raised containerStyle={styles.button} onPress={register} title="Register" />
            <Button containerStyle={styles.button} onPress={()=> navigation.navigate("Login")} type="outline" title="Login" />
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen;

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
