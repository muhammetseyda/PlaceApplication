import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import InformationList from '../../components/molecules/InformationList'; // Information bileşenini içeri aktarın
import Information from '../../components/molecules/Information';
import placeListData from '../../components/Data/placeList.json'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDataByKey, sharePlaceList } from '../../utils/AsyncStorage/AsyncStorageUtils';
import { useNavigation } from '@react-navigation/native';   
import PlaceShow from './PlaceShow';

export default function InformationPlaceList({ title, imageSource, desc, placeId, isExpanded, onInformationPress, storageKey }) {
    const navigation = useNavigation();
  console.log(storageKey);
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

        const placeListData = await getDataByKey(storageKey);
        console.log(placeListData);
        if(placeListData){
          const parsedData = JSON.parse(placeListData);
          storageKey == 'placeList' ? setPlaceListData(parsedData.placeList) : setPlaceListData(parsedData);
        }
      } catch (error) {
        console.error("PlaceList alınamadı", error); 
      }
    };
    getPlaceList();
  }, []);  
  // const maped = storageKey == 'placeList' ? placeListData.place.places : (sharePlace);

    return (

        <ScrollView horizontal={false} >
      {placeListData.map((place) => (
        <View key={place.id} style={{backgroundColor: 'white'}}>
           <TouchableOpacity onPress={() => handleInformationPress(place.id)}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{place.listName}</Text>
          <Text style={styles.desc}>{place.listDescription}</Text>
          {expandedIds.includes(place.id) && <PlaceShow placeId={place.id} places={place.places} navigation={navigation} />
          
          }
        </View>
        {!expandedIds.includes(place.id) &&
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            key={place.id} 
            onPress={() => navigation.navigate('Place List Detail', { placeListId: place.id })}
            style={{paddingRight: 10,}}
          ><Text>Detail</Text>
          </TouchableOpacity>
        </View>
        }
        {expandedIds.includes(place.id) &&
        <View style={styles.shareContainer}>
          <TouchableOpacity
            key={place.id} 
            onPress={() => sharePlaceList({ placeListId: place.id })}
            style={{paddingRight: 10,}}
          ><Text>Share</Text>
          </TouchableOpacity>
        </View>
        }
      </View>
      
    </TouchableOpacity>
          </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row', // İçeriği yatay olarak düzenlemek için
      alignItems: 'center', // İçeriği dikey olarak ortalamak için
      backgroundColor: 'white',
      borderWidth: 2,
      borderRadius: 10,
      marginHorizontal: 10,
      marginVertical: 5,
    },
    imageStyle: {
      width: 70, // Fotoğrafın genişliği
      height: 70, // Fotoğrafın yüksekliği
      borderRadius: 7,
    },
    textContainer: {
      flex: 1, // Metinlerin mevcut alanın tamamını kaplamasını sağlar
      marginLeft: 10, // Metinler ile fotoğraf arasındaki boşluk
      padding: 5,
      backgroundColor : 'white',
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold', // Başlık metni kalın yapar
    },
    desc: {
      fontSize: 12,
      color: 'red', // Açıklama metni gri renkte
    },
    shareContainer: {
      alignSelf: 'flex-start',
      marginTop: 15,
      backgroundColor: 'red',
      
      },
  });