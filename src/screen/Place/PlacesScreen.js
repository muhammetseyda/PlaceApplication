import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Information from '../../components/molecules/Information'


export default function PlacesScreen() {
  const [places, setPlaces] = useState([]); 
  useEffect(() => {
    // AsyncStorage'den verileri al
    const fetchPlacesData = async () => {
      try {
        const asyncStorageKey = 'place'; // AsyncStorage'de hangi anahtarla saklandığını belirtin
        const placesData = await AsyncStorage.getItem(asyncStorageKey);
        console.log(placesData);
        if (placesData) {
          const parsedData = JSON.parse(placesData);
          setPlaces(parsedData.place);
        }
      } catch (error) {
        console.error('Veri alma hatası:', error);
      }
    };

    fetchPlacesData(); 
  }, []);
  console.log(places);
  return (
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
  )
}

const styles = StyleSheet.create({})