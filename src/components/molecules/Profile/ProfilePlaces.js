import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import { getUserByEmail, getPlacesByUserId } from '../../../utils/api/Api'
import Information from '../Information';
import Spinner from '../../atoms/Spinner';

export default function ProfilePlaces({userId}) {
    console.log(userId);
    const [placesData, setPlacesData] = useState([]); 
    const fetchPlacesData = async () => {
        try {
          const response = await getPlacesByUserId(userId);
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
       { userId ? (placesData.map((place) => (
      <Information    
        placeId={place.id}
        key={place.id}
        title={place.name}
        imageSource={require('../../../assets/no.png')}
        desc={place.description}
        isAnimated={false}
      />
    ))) : (
      <Spinner size="large" />
    )}
    </View>
  )
}

const styles = StyleSheet.create({})