import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import InformationList from '../../components/molecules/InformationList'; // Information bileşenini içeri aktarın
import Information from '../../components/molecules/Information';
import placeListData from '../../components/Data/placeList.json'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDataByKey } from '../../utils/AsyncStorage/AsyncStorageUtils';
import InformationPlaceList from '../../components/molecules/InformationPlaceList';
import Button from '../../components/atoms/Button';


export default function PlaceListScreen( {navigation}) {
  const [refresh, setrefresh] = useState(0);
  const [placeListData, setPlaceListData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getPlaceList = async () => {
    try {
      const storageKey = 'placeListApi'
      const placeListData = await getDataByKey(storageKey);
      if(placeListData){
        const parsedData = JSON.parse(placeListData);
        storageKey == 'placeListApi' ? setPlaceListData(parsedData) : setPlaceListData(parsedData);
      }
    } catch (error) {
      console.error("PlaceList alınamadı", error); 
    } finally {
      setIsLoading(false);
      setrefresh(refresh + 1); 
    }
  };

  useEffect(() => {
      getPlaceList(); 
  }, [refresh]); 

  
  return (
    <ScrollView nestedScrollEnabled={true}>
      <View>
        <Button onPress={() => navigation.navigate("Add Place List")}>ADD PLACE LİST</Button>
      </View>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        placeListData.map((placeList) => (
          <InformationPlaceList place={placeList} />
        ))
      )}
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
});