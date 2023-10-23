import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'

export default function Spinner({size}) {
  return (
    <View>
        <ActivityIndicator size={size || 'large'} />
    </View>
  )
}

const styles = StyleSheet.create({})