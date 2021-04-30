import React, { useLayoutEffect } from 'react'
import { StyleSheet, View, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import CustomListItem from '../components/CustomListItem'
import { Avatar } from 'react-native-elements'
import {auth, firebase} from '../firbase';


const HomeScreen = ({navigation}) => {
    useLayoutEffect(() => {
       navigation.setOptions({
           title: 'Signal',
           headerStyle: {backgroundColor: "#fff"},
           headerTitleStyle: {color: "black"},
           headerTintColor: "black",
           headerLeft: () => 
           <View style={{marginLeft: 20}}>
               <TouchableOpacity>
               <Avatar rounded source={{uri: firebase.auth().currentUser.photoURL}}/>
               </TouchableOpacity>           
           </View>
       });
    }, [])
    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListItem />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
