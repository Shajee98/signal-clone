import React, { useEffect, useLayoutEffect, useState } from 'react'
import { StyleSheet, View, ScrollView, SafeAreaView, TouchableOpacity, LogBox } from 'react-native'
import CustomListItem from '../components/CustomListItem'
import { Avatar } from 'react-native-elements'
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons'
import {auth, firebase, db} from '../firbase';


const HomeScreen = ({navigation}) => {
    LogBox.ignoreLogs(['Setting a timer']);
    const [chats, setChats] = useState([]);

    const signOut = () => {
        firebase.auth().signOut().then(() => {
            navigation.replace("Login");
        });
    };

    useEffect(() => {
        const unsubscribe = db.collection('chats').onSnapshot(snapshots => (
            setChats(snapshots.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))));
            return unsubscribe;
    },[]);



    useLayoutEffect(() => {
       navigation.setOptions
       ({
           title: 'Signal',
           headerStyle: {backgroundColor: "#fff"},
           headerTitleStyle: {color: "black"},
           headerTintColor: "black",
           headerLeft: () => 
           (
           <View style={{marginLeft: 20}}>
               <TouchableOpacity onPress={signOut} activeOpacity={0.5}>
               <Avatar rounded source={{uri: firebase.auth().currentUser?.photoURL}}/>
               </TouchableOpacity>           
           </View>
           ),
            headerRight: () => 
            (
              <View 
              style={{flexDirection: "row",
              justifyContent: "space-between",
              width: 80,
              marginRight: 20}}>
              <TouchableOpacity activeOpacity={0.5}>
              <AntDesign name="camerao" size={24} color="black"/>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => {navigation.navigate("AddChat")}}>
              <SimpleLineIcons name="pencil" size={24} color="black"/>
              </TouchableOpacity>    
              </View>
            )
        });
    },[navigation])
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                {chats.map(({id, data: {ChatName}}) => (
                   <CustomListItem key={id} id={id} chatName={ChatName}/>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        height: "100%"
    }
})
