import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import InformationList from '../../components/molecules/InformationList'; // Information bileşenini içeri aktarın
import Information from '../../components/molecules/Information';
import placeListData from '../../components/Data/placeList.json'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDataByKey } from '../../utils/AsyncStorage/AsyncStorageUtils';
import InformationPlaceList from '../../components/molecules/InformationPlaceList';


export default function PlaceListScreen() {
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
        const key = 'placeList';
        const placeListData = await getDataByKey(key);
        if(placeListData){
          const parsedData = JSON.parse(placeListData);
          setPlaceListData(parsedData.placeList);
        }
      } catch (error) {
        console.error("PlaceList alınamadı", error);
      }
    };
    getPlaceList();
  }, []);
  

  return (

    <View>
      <InformationPlaceList storageKey={'placeList'}/>
    </View>
    // <ScrollView>
    //   {placeListData.map((place) => (
    //     <View key={place.id} style={{backgroundColor: 'gray'}}>
    //       <InformationList
    //         title={place.listName}
    //         desc={place.listDescription}
    //         placeId={place.id}
    //         onInformationPress={handleInformationPress}
    //         isExpanded={expandedIds.includes(place.id)}
    //       />
    //       {expandedIds.includes(place.id) && (
    //         <ScrollView>
    //           {place.places.map(subPlace => ( 
    //             <Information
    //               key={subPlace.id}
    //               title={subPlace.name}
    //               imageSource={require('../../assets/no.png')}
    //               desc={subPlace.description}
    //               placeId={subPlace.id}
    //             />
                
    //           ))}
    //         </ScrollView>
    //       )}
    //       </View>
    //   ))}
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  // Stil tanımları buraya eklenebilir
});