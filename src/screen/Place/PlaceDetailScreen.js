import { StyleSheet, Text, View, TouchableOpacity, Linking, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { findPlaceById } from '../../utils/AsyncStorage/AsyncStorageUtils'
import PlaceDetail from '../../components/Places/PlaceDetail'

export default function PlaceScreen({ route }) {
  const { placeId } = route.params;
  const [selectedPlace, setSelectedPlace] = useState(null);

  useEffect(() => {
    // Bileşen yüklendiğinde verileri al
    async function fetchData() {
      try {
        console.log(placeId);
        const place = await findPlaceById(placeId);
        setSelectedPlace(place);
        console.log(place);
      } catch (error) {
        console.error('Veri alımı hatası:', error);
      }
    }
    fetchData();
  }, [placeId]); // placeId değiştiğinde yeniden çağır

  return (
    <ScrollView>
      {selectedPlace ? (
        <PlaceDetail place={selectedPlace} />
      ) : (
        <Text>Veri yükleniyor...</Text>
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({})
