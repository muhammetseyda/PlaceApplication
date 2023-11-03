import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Information from '../../components/molecules/Information'
import Button from '../../components/atoms/Button';
import { useNavigation } from '@react-navigation/native';   


export default function PlacesScreen() {
  const navigation = useNavigation();
  const [places, setPlaces] = useState([]); 
  useEffect(() => {
    // AsyncStorage'den verileri al
    const fetchPlacesData = async () => {
      try {
        const asyncStorageKey = 'placeApi'; // AsyncStorage'de hangi anahtarla saklandığını belirtin
        const placesData = await AsyncStorage.getItem(asyncStorageKey);
        console.log(placesData);
        if (placesData) {
          const parsedData = JSON.parse(placesData);
          setPlaces(parsedData);
        }
      } catch (error) {
        console.error('Veri alma hatası:', error);
      }
    };

    fetchPlacesData(); 
  }, []);
  console.log(places);
  return (
    <View>
      <View>
        <Button onPress={() => navigation.navigate('AddPlace')}> ADD PLACE</Button>
      </View>
    <ScrollView>
      {places.map((place) => (
      <Information    
        placeId={place.id}
        key={place.id}
        title={place.name}
        imageSource={require('../../assets/no.png')}
        desc={place.description}
        isAnimated={true}
      />
    ))}
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})