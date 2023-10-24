import { StyleSheet, Text, View, TouchableOpacity, Linking, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { findSharedPlaceListById } from '../../utils/AsyncStorage/AsyncStorageUtils'
import SharePlaceListDetail from '../../components/Share/SharePlaceListDetail'

export default function SharedPlaceListDetailScreen({ route }) {
  const { placeListId } = route.params;
  const [selectedPlaceList, setSelectedPlaceList] = useState(null);
  useEffect(() => {
    // Bileşen yüklendiğinde verileri al
    async function fetchData() {
      try {
        console.log(placeListId, "a");
        const placeList = await findSharedPlaceListById(placeListId);
        setSelectedPlaceList(placeList);
      } catch (error) {
        console.error('Veri alımı hatası:', error);
      }
    }
    fetchData();
  }, [placeListId]); 
 
  return (
    <View>
      {selectedPlaceList ? (
        <SharePlaceListDetail placeList={selectedPlaceList} />
      ) : (
        <Text>Veri yükleniyor...</Text>
      )}
    </View>
      )
    }
    

const styles = StyleSheet.create({})