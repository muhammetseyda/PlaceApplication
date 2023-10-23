import { StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native'
import React, {useState} from 'react'
import Card from '../atoms/Card';
import CardSection from '../atoms/CardSection';
import Button from '../atoms/Button';

export default function RegisterForm() {
    const {inputStyle} = styles;
    const [showpasw, setShowpasw] = useState(false);
    const [formData, setFormData] = useState({
      name: '',
      surname: '',
      email: '',
      phone: '',
      password: '',
      repassword: '',
      gender: '',
    });
    const toggleShowPassword = () => {
      setShowpasw(!showpasw);
    };
    const [reshowpasw, setReShowpasw] = useState(false);
    const toggleReShowPassword = () => {
      setReShowpasw(!reshowpasw);
    };

  return (
    <Card>
        <CardSection>
          <TextInput
            placeholder="Name"
            style={inputStyle}
            value={formData.name}
            onChangeText={(newValue) => setFormData({ ...formData, name: newValue })}
          />
        </CardSection>

        <CardSection>
          <TextInput
            placeholder="SurName"
            style={inputStyle}
            value={formData.surname}
            onChangeText={(newValue) => setFormData({ ...formData, surname: newValue })}
          />
        </CardSection>

        <CardSection>
          <TextInput
            placeholder="E-mail"
            style={inputStyle}
            value={formData.email}
            onChangeText={(newValue) => setFormData({ ...formData, email: newValue })}
          />
        </CardSection>

        <CardSection>
          <TextInput
            placeholder="Phone (5XX)-XXX-XXXX"
            style={inputStyle}
            value={formData.phone}
            onChangeText={(newValue) => setFormData({ ...formData, phone: newValue })}
          />
        </CardSection>

        <CardSection>
            <TextInput
                secureTextEntry={!showpasw} //şifreyi noktalı gösterme
                placeholder="Password"
                autoCapitalize="none" 
                autoCorrect={false}
                style={inputStyle}
                value={formData.password}
                onChangeText={(newValue) => setFormData({ ...formData, password: newValue })}
            />
            <TouchableOpacity onPress={toggleShowPassword} style={styles.showButtonStyle}>
              <Text style={styles.showButtonTextStyle}>{showpasw ? 'Hide' : 'Show'}</Text>
            </TouchableOpacity>
        </CardSection>

        <CardSection>
            <TextInput
                secureTextEntry={!reshowpasw} //şifreyi noktalı gösterme
                placeholder="RePassword"
                autoCapitalize="none" 
                autoCorrect={false}
                style={inputStyle}
                value={formData.repassword}
                onChangeText={(newValue) => setFormData({ ...formData, repassword: newValue })}
            />
            <TouchableOpacity onPress={toggleReShowPassword} style={styles.showButtonStyle}>
              <Text style={styles.showButtonTextStyle}>{reshowpasw ? 'Hide' : 'Show'}</Text>
            </TouchableOpacity>
        </CardSection>

        <CardSection>
            <TextInput
                placeholder="Gender"
                style={inputStyle}
                value={formData.gender}
                onChangeText={(newValue) => setFormData({ ...formData, gender: newValue })}
            />
        </CardSection>
            <Button onPress={() => navigation.navigate}> KAYIT OL </Button>
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
      showButtonStyle : {
        backgroundColor: 'transparent',
        paddingHorizontal: 10,
      },
      
      showButtonTextStyle : {
        color: '#007aff',
        fontSize: 18,
      },
})