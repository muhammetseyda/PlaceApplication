import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Button({onPress, children}) {
    const {buttonStyle,textStyle} = styles;
  return (
    <TouchableOpacity onPress={ onPress} style ={buttonStyle}>
      <Text style ={textStyle}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 5,
    paddingBottom: 5,
  },
  buttonStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    height: 40,
    width: 'auto',
    textAlign: 'center',
    paddingHorizontal: 10,
    margin: 5,
  },

})