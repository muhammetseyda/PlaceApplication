import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AddPlace from '../../components/Places/AddPlace'

export default function AddPlaceScreen() {
  return (
    <ScrollView automaticallyAdjustKeyboardInsets={true} 
    contentContainerStyle={{flexGrow: 1}}>
      <AddPlace />
    </ScrollView>
  )
}

const styles = StyleSheet.create({})