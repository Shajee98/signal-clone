import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {StyleSheet, View, KeyboardAvoidingView} from 'react-native';
import {Button, Image, Input} from 'react-native-elements';
import auth from '../firbase';

const LoginScreen = ({navigation}) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    
useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((authUser => {
      if (authUser)
      {
          navigation.replace('Home')
      }
  }));
  return unsubscribe;
},[])

    const SignIn = () => {

    }
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding" : "height"} style={styles.container}>
            <StatusBar style='light'/>
            <Image source={{
                uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
            }}
            style={{width: 200, height: 200, position: 'relative'}}
            />
            <View style={styles.inputContainer}>
                <Input placeholder="Email" autoFocus type="email" value={email} onChangeText={(text) => setEmail(text)}/>
                <Input placeholder="Password" secureTextEntry type="password" value={password} onChangeText={(text) => setPassword(text)}/>
            </View>
            <Button title='Login' onPress={SignIn} containerStyle={styles.button}/>
            <Button title='Register' onPress={() => navigation.navigate('Register')} type='outline' containerStyle={styles.button}/>

        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      backgroundColor: 'white'
    },
    inputContainer: {
       width: 300
    },
    button: {
     width: 200,
     marginTop: 10
    }
});