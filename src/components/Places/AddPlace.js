import {StyleSheet, Text, View, TextInput, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import RNFS from 'react-native-fs';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import * as FileSystem from 'expo-file-system';
import Card from '../atoms/Card'
import CardSection from '../atoms/CardSection'
import DropDown from '../atoms/DropDown';
import City from '../atoms/City';
import Town from '../atoms/Town';
import Rating from '../atoms/Rating';
import Button from '../atoms/Button';
import placeData from '../Data/place.json';
import ImagePickerModal from '../molecules/ImagePickerModal';

export default function AddPlace() {
    const [formData, setFormData] = useState(
        {id: 19,
        userId: '',
        category: null,
        name : null,
        city:'', 
        town:'',
        address:'',
        link1:'',
        link2:'',
        webSiteLink:'',
        mapsLink:'',
        cretaedOn:'',
        updateOn:'',
        went:'',
        retryWent:'',
        description:'',
        atmosphereRating:'',
        foodRating:'',
        serviceRating:'',
        userRating:'',}
    );
    
    const {id, userId, name, category,city,town,address,link1,link2,
        webSiteLink,mapsLink,cretaedOn,updateOn,went,retryWent,description,
    atmosphereRating,foodRating,serviceRating,userRating} = formData;
    const {inputStyle} = styles;
    const categoryList = [
        {label: 'labelRest', value:'Restaurant', },
        {label: 'labelKafe', value:'Kafe', },
        {label: 'labelhamburger', value:'Hamburger', },
    ];
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
      };
    
      const closeModal = () => {
        setModalVisible(false);
      };
      const saveModal = () => {
        setFormData({...formData});
      };
    // console.log("Formfdata: " + JSON.stringify(formData));

    const getPlacesData = () => {
        return placeData.place; // JSON verisini döndürün
      };
          console.log(formData);
      const addPlace = async () => {
        try {
          // AsyncStorage'den mevcut veriyi al
          const existingData = await AsyncStorage.getItem('place');
          console.log(existingData);
          const existingDataJSON = existingData ? JSON.parse(existingData) : [];
    console.log(existingDataJSON);
          existingDataJSON.place.push(formData);
    existingDataJSON.place = existingDataJSON.place.filter(place => place.id !== 18);
    console.log("existingdatajson" + JSON.stringify(existingDataJSON));
    
          // AsyncStorage'e güncellenmiş veriyi kaydedin
          await AsyncStorage.setItem('place', JSON.stringify(existingDataJSON));
    
          console.log('Yeni veri başarıyla eklendi ve AsyncStorage güncellendi.');
        } catch (error) {
          console.error('Veri ekleme hatası:', error);
        }
      };
      const [placeData, setPlaceData] = useState([]);
      const fetchPlaceData = async () => {
        try {
          const data = await AsyncStorage.getItem('placeData');
          if (data) {
            const jsonData = JSON.parse(data);
            setPlaceData(jsonData);
          }
        } catch (error) {
          console.error('Veri alma hatası:', error);
        }
      };
    
      useEffect(() => {
        // Verileri al ve bileşen yüklendiğinde çalıştır
        fetchPlaceData();
      }, []);

      const savePlaceDataToAsyncStorage = async () => {
        const filePath = RNFS.DocumentDirectoryPath + '/place.json';

            // Dosyayı oku
            RNFS.readFile(filePath, 'utf8')
            .then(async (fileContents) => {
                // Dosya içeriğini JSON olarak ayrıştır
                const jsonData = JSON.parse(fileContents);
                console.log(jsonData);


                // AsyncStorage'de saklamak istediğiniz anahtar (key) belirtin
                const asyncStorageKey = 'place';

                // AsyncStorage'ye veriyi yazın
                
                await AsyncStorage.setItem(asyncStorageKey, JSON.stringify(jsonData));

                console.log('Veri başarıyla AsyncStorage\'e kaydedildi.');
            })
            .catch((error) => {
                console.error('Dosya okuma hatası:', error);
            });
      };

      const placesDataAsync = async () => {
        try {
          const data = await AsyncStorage.getItem('place');
          console.log(data);
          if (data) {
            const jsonData = JSON.parse(data);
            console.log(jsonData);
          }
        } catch (error) {
          console.error('Veri alma hatası:', error);
        }
      };
    
        const handleDeleteData = () => {
          const mainKey = 'place';

// Silmek istediğiniz place anahtarını belirleyin
const placeKeyToDelete = 'place'; // Silmek istediğiniz place anahtarı

// Silmek istediğiniz öğenin ID'sini belirleyin
const idToDelete = 8;

// Öğeyi silin
AsyncStorage.getItem(mainKey)
  .then((data) => {
    if (data) {
      const parsedData = JSON.parse(data);

      // Belirtilen ID'ye sahip öğeyi filtreleyin ve yeni veriyi oluşturun
      const updatedData = parsedData.place.map((place) => {
        if (place.place === placeKeyToDelete) {
          // Place anahtarına sahip veriyi güncelleme veya silme
          const updatedPlace = place.place.filter((item) => item.id !== idToDelete);
          return { ...place, place: updatedPlace };
        }
        return place;
      });

      // Verileri güncelleyin
      AsyncStorage.setItem(mainKey, JSON.stringify(updatedData))
        .then(() => {
          console.log(`ID'si ${idToDelete} olan öğe başarıyla silindi.`);
        })
        .catch((error) => {
          console.error('Silme hatası:', error);
        });
    } else {
      console.error('Belirtilen anahtar için veri bulunamadı.');
    }
  });}
  const [isCameraVisible, setCameraVisible] = useState(false);

  const toggleModal = () => {
    setCameraVisible(!isCameraVisible);
  };

      
  return (
    <Card>
        <CardSection>
            <TextInput 
            placeholder="Name"
            style={inputStyle}
            value={name}
            onChangeText={(newValue) => setFormData({ ...formData, name: newValue })}
            />
        </CardSection>

        <CardSection>
            <TextInput 
            placeholder="Description"
            style={inputStyle}
            value={description}
            onChangeText={(newValue) => setFormData({ ...formData, description: newValue })}
            />
        </CardSection>

        <CardSection >
            <DropDown  data={categoryList} placeholderName={'Kategori Seçiniz'}/> 
        </CardSection>

        <CardSection >
            <City onCityChange={(newValue) => setFormData({ ...formData, city: newValue })}/>
        </CardSection>

        <CardSection >
            <Town data={city} onTownChange={(newValue) => setFormData({ ...formData, town: newValue })}/>
        </CardSection>

        <CardSection>
            <TextInput 
            placeholder="Address"
            style={inputStyle}
            value={address}
            onChangeText={(newValue) => setFormData({ ...formData, address: newValue })}
            />
        </CardSection>

        <CardSection>
            <TextInput 
            placeholder="Maps Link"
            style={inputStyle}
            value={mapsLink}
            onChangeText={(newValue) => setFormData({ ...formData, mapsLink: newValue })}
            />
        </CardSection>

        <CardSection>
            <TextInput 
            placeholder="Insta Profile Link"
            style={inputStyle} 
            value={link1}
            onChangeText={(newValue) => setFormData({ ...formData, link1: newValue })}
            />
        </CardSection>

        <CardSection>
            <TextInput 
            placeholder="Insta Reels Link"
            style={inputStyle}
            value={link2}
            onChangeText={(newValue) => setFormData({ ...formData, link2: newValue })}
            />
        </CardSection>

        <CardSection>
            <TextInput 
            placeholder="Website Link"
            style={inputStyle}
            value={webSiteLink}
            onChangeText={(newValue) => setFormData({ ...formData, webSiteLink: newValue })}
            />
        </CardSection>

        <CardSection>
            <Button onPress={openModal}>Rating</Button>
            <Rating visible={modalVisible} onClose={closeModal} onSave={saveModal}/>
        </CardSection>
<Button onPress={addPlace}>ADD PLACE</Button>
        
<Button
        
        onPress={placesDataAsync}
      >Güncel Verileri Göster</Button>
    <Button onPress={toggleModal}>Open Image Picker</Button>
      <ImagePickerModal
        isVisible={isCameraVisible}
        onClose={toggleModal}
        onImageSelected={(image) => {
          // Seçilen resmi burada işleyin
          console.log(image);
        }}
      />
    
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
})