import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import InformationList from '../InformationList';
import {getPlaceListsByUserId} from '../../../utils/api/Api'
import InformationPlaceList from '../InformationPlaceList';

export default function ProfilePlaceList({userId}) {
    console.log(userId);
    const [placesData, setPlacesData] = useState([]); 
    const fetchPlacesData = async () => {
        try {
          const response = await getPlaceListsByUserId(userId);
          setPlacesData(response.data);

        } catch (error) {
          console.error('API başarısız: ', error); 
        }
      };
    
      useEffect(() => {
        if(userId){
        fetchPlacesData(); 
        } 
      }, [userId]);
  return (
    <View>
      {placesData.map((placeList) => (
        <InformationPlaceList place={placeList} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({})