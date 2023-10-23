import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CardSection(props) {
    const {subContainerSytle} = styles;
  return (
    <View style={subContainerSytle}>
        {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
    subContainerSytle:{
        borderBottomWidth: 1,
        padding: 10,
        backgroundColor: '#E8E8E8',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
        borderRadius: 10,
        width: 350,
        marginTop: 20,
        alignSelf: 'center',
    },
})