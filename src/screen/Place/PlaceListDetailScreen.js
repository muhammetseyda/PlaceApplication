import { StyleSheet, Text, View, TouchableOpacity, Linking, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { findPlaceListById } from '../../utils/AsyncStorage/AsyncStorageUtils'
import PlaceListDetail from '../../components/Places/PlaceListDetail';

export default function PlaceListDetailScreen({ route }) {
  const { placeListId } = route.params;
  const [selectedPlaceList, setSelectedPlaceList] = useState(null);
  useEffect(() => {
    // Bileşen yüklendiğinde verileri al
    async function fetchData() {
      try {
        console.log(placeListId, "a");
        const placeList = await findPlaceListById(placeListId);
        setSelectedPlaceList(placeList);
        console.log(placeList, "b");
      } catch (error) {
        console.error('Veri alımı hatası:', error);
      }
    }
    fetchData();
  }, [placeListId]); 
 
  return (
    <View>
      {selectedPlaceList ? (
        <PlaceListDetail placeList={selectedPlaceList} />
      ) : (
        <Text>Veri yükleniyor...</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({})