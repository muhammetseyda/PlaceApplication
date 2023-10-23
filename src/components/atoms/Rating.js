import { StyleSheet, Text, View, Modal, TextInput, Alert } from 'react-native'
import React, {useState} from 'react'
import Button from './Button';

export default function Rating( {visible, onClose, onSave}) {
    const [atmosphereRating, setAtmosphereRating] = useState(0);
  const [serviceRating, setServiceRating] = useState(0);
  const [foodRating, setFoodRating] = useState(0);
  const [userRating, setUserRating] = useState('');
  if(atmosphereRating < 0 || atmosphereRating > 5){
    Alert.alert('Hata', 'Lütfen 0 ile 5 arsıdna sayı giriniz.')
  }
  
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text>Atmosphere Rating</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setAtmosphereRating(text)}
            value={atmosphereRating.toString()}
            keyboardType="numeric"
          />

          <Text>Service Rating</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setServiceRating(text)}
            value={serviceRating.toString()}
            keyboardType="numeric"
          />

          <Text>Food Rating</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setFoodRating(text)}
            value={foodRating.toString()}
            keyboardType="numeric"
          />

          <Text>User Rating</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setUserRating(text)}
            value={userRating.toString()}
            keyboardType="numeric"
          />
        <View style={{flexDirection: 'row', justifyContent: 'center'}}> 
          <Button onPress={onClose}>KAPAT</Button>
          <Button onPress={onSave}>KAYDET</Button>
        </View>
        </View>
        </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%', // Modal'ın genişliğini ayarlayabilirsiniz
      },
      input: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: '100%', // Inputların genişliğini modal'a göre ayarlar
        padding: 8,
        marginBottom: 10,
        borderRadius: 10,
      },
})