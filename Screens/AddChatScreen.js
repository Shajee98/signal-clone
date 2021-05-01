import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { db } from '../firbase'

const AddChatScreen = ({navigation}) => {
    const [input, setInput] = useState("");
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Add a new chat",
            headerBackTitle: "Chats"
        })
    },[navigation]);

    const createChat = () => {
            db.collection('chats').add({
            ChatName: input
        }).then(() => {
            navigation.goBack();
        }).catch((error) => alert(error));
    }
    return (
        <View style={styles.container}>
        <Input placeholder="Enter a chat name" 
               value={input} 
               onChangeText={(chat) => setInput(chat)} 
               onSubmitEditing={createChat}
               leftIcon={
                   <Icon name="wechat" type="antdesign" size={24} color="grey"/>
               }/>
               <Button disabled={!input} title="Create new Chat" onPress={createChat} /> 
        </View>
    )
}

export default AddChatScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 30,
        height: "100%"      
    }
})
