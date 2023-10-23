import { StyleSheet, Text, View, TextInput, } from 'react-native'
import React, {useState} from 'react'
import Card from '../atoms/Card'
import CardSection from '../atoms/CardSection'
import Button from '../atoms/Button'


export default function LoginForm() {
    const {inputStyle} = styles;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  return (
    <Card>
        <CardSection>
          <TextInput
            placeholder="E-mail"
            style={inputStyle}
            value={email}
            onChangeText={(newValue) => setEmail(newValue)}
          />
          
        </CardSection>

        <CardSection>
            <TextInput
                secureTextEntry //şifreyi noktalı gösterme
                placeholder="Password"
                style={inputStyle}
                value={password}
                onChangeText={(newValue) => setPassword(newValue)}
            />
        </CardSection>

            <Button onPress={() => navigation.navigate}> GİRİŞ </Button>
      </Card>
  )
}

const styles = StyleSheet.create({
    inputStyle: {
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        flex: 1,
      },
})