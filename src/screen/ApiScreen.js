import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import { getPlaces, getPlace, getSharePlaceList, getUser } from '../utils/api/Api'
import Button from '../components/atoms/Button';

export default function ApiScreen() {
    const [placesData, setPlacesData] = useState([]); 
    const fetchPlacesData = async () => {
        try {
          const response = await getPlace('12');
          console.log(response);
          setPlacesData(response.data);

        } catch (error) {
          console.error('API başarısız 5209: ', error);
        }
      };
    
      useEffect(() => {
        // Bileşen yüklendiğinde API sorgusunu otomatik olarak yapar
        fetchPlacesData();
      }, []);
 
  return ( 
    <View>
      <Text>ApiScreen</Text>
        <View >
            <Text >{placesData.name} liste adları</Text>
            
        </View>
      <Button title="Sorgu" onPress={() => {
          // Butona basıldığında sorgu yapar
          fetchPlacesData();
        }}>Sorgu</Button>
            
    </View>
  );
}

const styles = StyleSheet.create({})