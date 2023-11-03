import { StyleSheet, Text, TextInput, View, ScrollView } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import React, {useState,useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Card from '../atoms/Card'
import CardSection from '../atoms/CardSection'
import Information from '../molecules/Information'
import Button from '../atoms/Button';
import { useNavigation } from '@react-navigation/native';
import { postPlaceList } from '../../utils/api/Api';

export default function AddPlaceList() {
  const navigation = useNavigation();
  const currentDate = new Date();
  const [isLoading, setIsLoading] = useState(false);
  const [listData, setListData] = useState({
    id: 0,
    userId: '38b9b5bd-cd6a-45d8-b821-f60a13fa9c77',
    createdDate: currentDate.toISOString(),
    updateDate: currentDate.toISOString(),
    listName: '',
    listDescription: '',
    places: [],
    placeIds: "",
  })
const {listName, listDescription,placeIds} = listData;
const {inputStyle} = styles;

const handleSelectionChange = (placeId, isSelected) => {
  // placesIds'i güncellemek için yeni bir dizi oluşturun
  const newPlaceIds = listData.placeIds.split(',').filter(id => id !== ''); // Mevcut placeIds'i bölmek ve boş öğeleri filtrelemek

  if (isSelected) {
    newPlaceIds.push(placeId.toString());
  } else {
    const index = newPlaceIds.indexOf(placeId.toString());
    if (index !== -1) {
      newPlaceIds.splice(index, 1);
    }
  }

  // Yeni placeIds'i listData içinde güncelleyin
  setListData({ ...listData, placeIds: newPlaceIds.join(',') });
};

const [places, setPlaces] = useState([]);  

  useEffect(() => {
    // AsyncStorage'den verileri al
    const fetchPlacesData = async () => {
      try {
        const asyncStorageKey = 'placeApi'; // AsyncStorage'de hangi anahtarla saklandığını belirtin
        const placesData = await AsyncStorage.getItem(asyncStorageKey);
        if (placesData) {
          const parsedData = JSON.parse(placesData);
          // console.log(parsedData);
          setPlaces(parsedData);
        }
      } catch (error) {
        console.error('Veri alma hatası:', error);
      }
    };

    fetchPlacesData(); 
  }, []);

  const addPlaceList = async () => {
    try {
      setIsLoading(true);
      const placeData = await AsyncStorage.getItem('placeApi');
    const existingData = await AsyncStorage.getItem('placeListApi');
    const existingDataJSON = existingData ? JSON.parse(existingData) : [];
    const parsedPlaceData = JSON.parse(placeData);
    const formDataWithPlaces = { ...listData, places: [] }; 

    for (const placeId of listData.placeIds) {
      const place = parsedPlaceData.find(place => place.id === placeId);
      console.log(place);
      if (place) {
        formDataWithPlaces.places.push(place);
      }
    };
    console.log("existing data",formDataWithPlaces);
   
    
    existingDataJSON.push(formDataWithPlaces);
    await AsyncStorage.setItem('placeListApi', JSON.stringify(existingDataJSON));

    postPlaceList(formDataWithPlaces)
    .then((response) => {
      console.log("yeni yer eklendi", response);
      navigation.navigate("Place List");
    })
    .catch((error) => {
      console.error("Hata  Add Place Api" , error);
    })
    .finally(() => {
      setIsLoading(false);
    });
   
    } catch (error) {
      console.error('Veri ekleme hatası:', error);
      setIsLoading(false);  
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
                   value={placeIds.includes(place.id.toString())}
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
      <Button onPress={addPlaceList} disabled={isLoading}>
      {isLoading ? 'Yükleniyor...' : 'ADD PLACELİST'}
      </Button>
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