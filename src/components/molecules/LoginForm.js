import { StyleSheet, Text, View, TextInput, } from 'react-native'
import React, {useState} from 'react'
import Card from '../atoms/Card'
import CardSection from '../atoms/CardSection'
import Button from '../atoms/Button'
import { Login } from '../../utils/api/Api'


export default function LoginForm() {
    const {inputStyle} = styles;
    const [loginForm, setloginForm] = useState({
      email: '',
      password: '',
      returnUrl: '',
      rememberMe: true
    });
    console.log(loginForm);
    const login = async () => {
      try {
        Login(loginForm)
        .then((response) => {
          console.log("Giriş Yapıldı", response.data);
        })
        .catch((error) => {
          console.error("Hata  Login Api" , error);
        });
        
      } catch (error) {
        console.error("Login Hata", error);
      }
    };
  return (
    <Card>
        <CardSection>
          <TextInput
            placeholder="E-mail"
            style={inputStyle}
            value={loginForm.email}
            onChangeText={(newValue) => setloginForm({ ...loginForm, email: newValue })}
          />
          
        </CardSection>

        <CardSection>
            <TextInput
                secureTextEntry //şifreyi noktalı gösterme
                placeholder="Password"
                style={inputStyle}
                value={loginForm.password}
                onChangeText={(newValue) => setloginForm({ ...loginForm, password: newValue })}
            />
        </CardSection>

            <Button onPress={login}> GİRİŞ </Button>
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