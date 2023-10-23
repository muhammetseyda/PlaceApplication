import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Information from '../../components/molecules/Information'
import InformationSharePlace from '../../components/molecules/InformationSharePlace';

export default function SharedPlaceScreen() {
    const [places, setPlaces] = useState([]); 
    useEffect(() => {
      // AsyncStorage'den verileri al
      const fetchPlacesData = async () => {
        try {
          const asyncStorageKey = 'sharedPlace'; // AsyncStorage'de hangi anahtarla saklandığını belirtin
          const placesData = await AsyncStorage.getItem(asyncStorageKey);
          // console.log(placesData);
          if (placesData) {
            const parsedData = JSON.parse(placesData);
            setPlaces(parsedData.sharedPlace);
          }
        } catch (error) {
          console.error('Veri alma hatası:', error);
        }
      };
  
      fetchPlacesData(); 
    }, []);
    // console.log(places);
    return (
      <ScrollView>
        {places.map((place) => (
        <InformationSharePlace
          placeId={place.id}
          key={place.id}
          title={place.name}
          imageSource={require('../../assets/no.png')}
          desc={place.description}
          isAnimated={false}
        />
      ))}
      </ScrollView>
    )
  }
  

const styles = StyleSheet.create({})