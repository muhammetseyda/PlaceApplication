import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import AddPlaceList from '../../components/Places/AddPlaceList'

export default function AddPlaceListScreen() {
  return (
    <ScrollView automaticallyAdjustKeyboardInsets={true} 
    contentContainerStyle={{flexGrow: 1}}>
      <AddPlaceList />
    </ScrollView>
  )
}

const styles = StyleSheet.create({})