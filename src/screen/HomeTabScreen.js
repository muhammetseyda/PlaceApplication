import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <Button
        title="Accoun/Login"
        onPress={() => navigation.navigate('AccountLogin')}
      />

      <Button
        title="Account/Register"
        onPress={() => navigation.navigate('Register')}
      />

      <Button
        title="Storage"
        onPress={() => navigation.navigate('Storage')}
      />

      <Button
        title="Deneme"
        onPress={() => navigation.navigate('Deneme')}
      />
      <Button
        title="Camera"
        onPress={() => navigation.navigate('Camera')}
      />

<Button
        title="Swipe"
        onPress={() => navigation.navigate('Swipe')}
      />

<Button
        title="Weather"
        onPress={() => navigation.navigate('Weather')}
      />

    </View>
  )
}

const styles = StyleSheet.create({})