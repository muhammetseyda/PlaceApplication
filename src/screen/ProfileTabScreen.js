import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import Button from '../components/atoms/Button';
import Information from '../components/molecules/Information';
import AsyncStorage from '@react-native-async-storage/async-storage'
import InformationSharePlace from '../components/molecules/InformationSharePlace';
import WeatherData from '../components/atoms/WeatherData';
import { getDataByKey } from '../utils/AsyncStorage/AsyncStorageUtils';
import InformationSharePlaceList from '../components/molecules/InformationSharePlaceList';




export default function ProfileTabScreen() {
  const [places, setPlaces] = useState([]); 
  useEffect(() => {
    // AsyncStorage'den verileri al
    const fetchPlacesData = async () => {
      try {
        const asyncStorageKey = 'place'; // AsyncStorage'de hangi anahtarla saklandığını belirtin
        const placesData = await AsyncStorage.getItem(asyncStorageKey);
        // console.log(placesData);
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

  const [weatherData, setWeatherData] = useState(null);
  const apiKey = 'dedb42cf0bbe7aeed2fa59e920541925'; // OpenWeatherMap API anahtarınızı ekleyin
  const latitude = 40.7128; // Örnek enlem bilgisi
  const longitude = -74.0060; // Örnek boylam bilgisi

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        // Hava durumu verilerini alın ve state'e kaydedin
        setWeatherData(data);
      })
      .catch((error) => {
        console.error('Hava durumu isteği sırasında hata:', error);
      });
  }, []);

  // const [expandedIds, setExpandedIds] = useState([]);

  // const handleInformationPress = (placeId) => {
  //   if (expandedIds.includes(placeId)) {
  //     // Eğer tıklanan eleman zaten açıksa, kapatın
  //     setExpandedIds(expandedIds.filter(id => id !== placeId));
  //   } else {
  //     // Aksi takdirde, tıklanan elemanı açın
  //     setExpandedIds([...expandedIds, placeId]);
  //   }
  // };
//   const [placeListData, setPlaceListData] = useState([]);

//   useEffect(() => {
//     const getPlaceList = async () => {
//       try {
//         const key = 'sharedPlaceList';
//         const placeListData = await getDataByKey(key);

//         if(placeListData){
//           const parsedData = JSON.parse(placeListData);
//           setPlaceListData(parsedData.sharedPlaceList);
// console.log("placelistdata:::::::::", placeListData); 

//         }
//       } catch (error) {
//         console.error("PlaceList alınamadı", error);
//       }
//     };
//     getPlaceList();
//   }, []);
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
            imageSource={require('../assets/black.png')}
            desc={place.description}
            container={styles.sharePlace}
            image_style={styles.image_style}
            title_style={styles.title_style}
            desc_style={styles.desc_style}
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
      {weatherData ? (
        <WeatherData weatherData={weatherData} /> 
      ) : (
        <Text>Loading...</Text>
      )}
      </View>
      <View style={[styles.cell, styles.cellBottomRight]}>
        <InformationSharePlaceList
        placeshow_container_style={styles.placeshow_container_style} 
        container_style={styles.listContainer}
        storageKey={'sharedPlaceList'}/>  
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
    backgroundColor: 'red',
  },
  cell: {
    width: '48%',
    height: '48%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 10,
    margin: 2,
  },
  cellTopLeft: {
    flexDirection: 'row'
  },
  cellTopRight: {
    backgroundColor: 'green'
    
  },
  cellBottomLeft: {
    
  },
  cellBottomRight: {
    flexDirection: 'row',
    backgroundColor: 'green'

  },
  sharePlace:{
    height: 50
  },
  image_style:{
    height: 50,
    width: 50,
  },
  title_style:{
    fontSize: 14
  },
  desc_style:{
    fontSize: 10,
  },
  listContainer:{
    borderRadius: 10
  },
  placeshow_container_style:{
    flexDirection:'column'
  },
});