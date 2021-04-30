import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { KeyboardAvoidingView, View, StyleSheet, Platform} from 'react-native'
import { Button, Input, Text } from 'react-native-elements'
import {auth, firebase} from '../firbase';

const RegisterScreen = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: 'Back to Login',
        });
    },[navigation]);
    
    const register = () => {
      firebase.auth().createUserWithEmailAndPassword(email,password)
      .then(authUser => {
          authUser.user,update({
              displayName: name,
              photoURL: imageUrl || "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png"
          });
      }).catch((error) => alert(error.message))
    }
    return (
        <KeyboardAvoidingView behavior={'padding'} style={styles.container}>
            <StatusBar style="light"/>
            <Text h3 style={{marginBottom: 50}}>Create a Signal Account</Text>
            <View style={styles.inputContainer}>
                <Input placeholder="Full Name" 
                autoFocus 
                type='text' 
                value={name} 
                onChangeText={(text) => setName(text)}/>
                <Input placeholder="Email" 
                type='email' 
                value={email} 
                onChangeText={(text) => setEmail(text)}/>
                <Input placeholder="Password" 
                secureTextEntry
                type='password' 
                value={password} 
                onChangeText={(text) => setPassword(text)}/>
                <Input placeholder="Profile Picture URL (Optional)"
                type='text' 
                value={imageUrl} 
                onChangeText={(text) => setImageUrl(text)}
                onSubmitEditing={register}/>
            </View>
            <Button 
             raised
             containerStyle={styles.button}
             title="Register"
             onPress={register}
             />
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white'
    },
    button: {
      width: 200,
      marginTop: 10
    },
    inputContainer: {
       width: 300
    }
})
