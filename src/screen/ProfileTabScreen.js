import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import Button from '../components/atoms/Button';
import Information from '../components/molecules/Information';
import AsyncStorage from '@react-native-async-storage/async-storage'
import InformationSharePlace from '../components/molecules/InformationSharePlace';



export default function ProfileTabScreen() {
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
  return (
    <View style={styles.container}>
      <View style={[styles.cell, styles.cellTopLeft]}>
        <ScrollView>
          <Text style={{textAlign: 'center'}}>Share Places</Text>
      {places.map((place) => (
      <InformationSharePlace
            placeId={place.id}
            key={place.id}
            title={place.name}
            imageSource={require('../assets/5.png')}
            desc={place.description}
          />
        ))}
        </ScrollView>
      </View>
      <View style={[styles.cell, styles.cellTopRight]}>
          <Button>Tutorial</Button>
          <Button>Giriş Yap</Button>
          <Button>Üye Ol</Button>
      </View>
      <View style={[styles.cell, styles.cellBottomLeft]}>
        <Text>Cell 3</Text>
      </View>
      <View style={[styles.cell, styles.cellBottomRight]}>
        <Text>Cell 4</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
    backgroundColor: 'white',
  },
  cell: {
    width: '49%',
    height: '49%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    margin: 1,
  },
  cellTopLeft: {
    flexDirection: 'row'
  },
  cellTopRight: {
    
  },
  cellBottomLeft: {
    
  },
  cellBottomRight: {
    
  },
});