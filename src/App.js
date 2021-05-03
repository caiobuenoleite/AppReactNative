import React from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'

import Curb65 from './components/Curb65'

export default () => (
    <SafeAreaView style={style.App}>
        <Curb65 />
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        backgroundColor: "#e9ecef",
        flexGrow: 1, // flex:1 tbm rola
        fontSize: 20,
        // justifyContent: 'center',
        // alignItems: 'center',
        // paddingTop: 20,

    }
})