import { StyleSheet, Text, TextInput, View, ScrollView } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import React, {useState,useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Card from '../atoms/Card'
import CardSection from '../atoms/CardSection'
import Information from '../molecules/Information'
import Button from '../atoms/Button';

export default function AddPlaceList() {
    const [listData, setListData] = useState({
      id: 15,
      userId: '',
      createdDate:'',
      updateDate:'',
      listName: '',
      listDescription: '',
      places: [],
      placeIds: [],
})
const {listName, listDescription,placeIds} = listData;
const {inputStyle} = styles;

const handleSelectionChange = (placeId, isSelected) => {
  // placesIds'i güncellemek için yeni bir dizi oluşturun
  const newPlacesIds = isSelected
    ? [...placeIds, placeId]
    : placeIds.filter((id) => id !== placeId);
  setListData({ ...listData, placeIds: newPlacesIds });
};

const [places, setPlaces] = useState([]); 

  useEffect(() => {
    // AsyncStorage'den verileri al
    const fetchPlacesData = async () => {
      try {
        const asyncStorageKey = 'place'; // AsyncStorage'de hangi anahtarla saklandığını belirtin
        const placesData = await AsyncStorage.getItem(asyncStorageKey);
        if (placesData) {
          const parsedData = JSON.parse(placesData);
          // console.log(parsedData);
          setPlaces(parsedData.place);
        }
      } catch (error) {
        console.error('Veri alma hatası:', error);
      }
    };

    fetchPlacesData(); 
  }, []);

  const addPlaceList = async () => {
    try {
      const placeData = await AsyncStorage.getItem('place');
    const existingData = await AsyncStorage.getItem('placeList');
    const existingDataJSON = existingData ? JSON.parse(existingData) : [];
    const parsedPlaceData = JSON.parse(placeData);
    const formDataWithPlaces = { ...listData, places: [] }; 

    for (const placeId of listData.placeIds) {
      const place = parsedPlaceData.place.find(place => place.id === placeId);
      if (place) {
        formDataWithPlaces.places.push(place);
      }
    };
    console.log(existingDataJSON);
   
    
    existingDataJSON.placeList.push(formDataWithPlaces);

    await AsyncStorage.setItem('placeList', JSON.stringify(existingDataJSON));

    console.log('Yeni veri başarıyla eklendi ve AsyncStorage güncellendi.');
    } catch (error) {
      console.error('Veri ekleme hatası:', error);
    }
  };
  console.log(listData);
  return (
    <Card>
    <CardSection>
    <TextInput 
            placeholder="Name"
            style={inputStyle}
            value={listName}
            onChangeText={(newValue) => setListData({ ...listData, listName: newValue })}
            />
      </CardSection>

      <CardSection>
    <TextInput 
            placeholder="Description"
            style={inputStyle}
            value={listDescription}
            onChangeText={(newValue) => setListData({ ...listData, listDescription: newValue })}
            />
      </CardSection>
      
      <CardSection>
        <ScrollView style={{height: 400}}>
                <Text style={{textAlign: 'center', fontSize: 20,}}>Place</Text>
            {places.map((place) => (
            <View key={place.id} style={styles.rowContainer}>
              
              <View style={styles.checkbox}>
                <CheckBox
                   value={placeIds.includes(place.id)}
                   onValueChange={(newValue) => handleSelectionChange(place.id, newValue)}
                 />
                </View>
                <View style={styles.information}>
                <Information
                    placeId={place.id}
                    key={place.id}
                    title={place.name}
                    imageSource={require('../../assets/no.png')}
                    desc={place.description}
                    isAnimated={false}
                />  
                </View>
            </View>
                ))}
            </ScrollView>
      </CardSection>
      <Button onPress={addPlaceList}>ADD PLACELİST</Button>
    </Card>

  )
}

const styles = StyleSheet.create({
    inputStyle: {
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        flex: 1,
        height: 40,
      },
      rowContainer: {
        flexDirection: 'row',
      alignItems: 'center',
      },
      checkbox: {
      },
      information: {
        flex: 1
      },
})