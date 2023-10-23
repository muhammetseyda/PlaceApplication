import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import RegisterForm from '../../components/molecules/RegisterForm'

export default function RegisterScreen() {
  return (
    <ScrollView automaticallyAdjustKeyboardInsets={true} 
    contentContainerStyle={{flexGrow: 1}}
    >
        <RegisterForm />
    </ScrollView>
  )
}

const styles = StyleSheet.create({})