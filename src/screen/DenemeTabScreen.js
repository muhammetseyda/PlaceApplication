import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function DenemeTabScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
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
  
  <Button
          title="Share Card"
          onPress={() => navigation.navigate('Share Card')}
        />
  
  <Button
          title="Api"
          onPress={() => navigation.navigate('Api')}
        />
  
      </View>
    )
  }
  
  const styles = StyleSheet.create({})