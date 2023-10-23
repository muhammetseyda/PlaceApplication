import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header(props) {
  return (
    <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{props.headerText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 20
    },
    viewStyle:{
        backgroundColor: '#f8f8f8',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop : 15,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,

    },
})