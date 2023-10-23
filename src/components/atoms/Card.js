import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Card(props) {
    const {containerStyle} = styles;
  return (
    
    <View style={containerStyle}>
            {props.children}
        </View>
  )
}

const styles = StyleSheet.create({
    containerStyle:{
      backgroundColor: 'skyblue',
      height: '100%',
      marginBottom: 20,
    },
})