import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import InformationList from '../../components/molecules/InformationList'; // Information bileşenini içeri aktarın
import Information from '../../components/molecules/Information';
import placeListData from '../../components/Data/placeList.json'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDataByKey } from '../../utils/AsyncStorage/AsyncStorageUtils';
import InformationSharePlaceList from '../../components/molecules/InformationSharePlaceList';

export default function SharedPlaceListScreen() {
  const [expandedIds, setExpandedIds] = useState([]);

  const handleInformationPress = (placeId) => {
    if (expandedIds.includes(placeId)) {
      // Eğer tıklanan eleman zaten açıksa, kapatın
      setExpandedIds(expandedIds.filter(id => id !== placeId));
    } else {
      // Aksi takdirde, tıklanan elemanı açın
      setExpandedIds([...expandedIds, placeId]);
    }
  };
  const [placeListData, setPlaceListData] = useState([]);

  useEffect(() => {
    const getPlaceList = async () => {
      try {
        const key = 'sharedPlaceList';
        const placeListData = await getDataByKey(key);
        if(placeListData){
          const parsedData = JSON.parse(placeListData);
          setPlaceListData(parsedData.sharedPlaceList);
        }
      } catch (error) {
        console.error("PlaceList alınamadı", error);
      }
    };
    getPlaceList();
  }, []);
  

  return (

    <View>
      <InformationSharePlaceList storageKey={'sharedPlaceList'}/>
    </View>
  )
}

const styles = StyleSheet.create({})