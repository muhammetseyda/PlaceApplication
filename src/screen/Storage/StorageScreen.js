import { StyleSheet, Text, View, Modal, ScrollView } from 'react-native'
import React, {useState} from 'react'
import Button from '../../components/atoms/Button'
import { allKeys, deleteDataByKey, getDataByKey, saveDataByKey } from '../../utils/AsyncStorage/AsyncStorageUtils'
import PlaceListData from '../../components/Data/placeList.json'
import PlaceData from '../../components/Data/place.json'
import SharedPlaceData from '../../components/Data/sharedPlace.json'
import SharedPlaceListData from '../../components/Data/sharedPlaceList.json'

const PlaceListDataString = JSON.stringify(PlaceListData);
const PlaceDataString = JSON.stringify(PlaceData);
const SharedPlaceDataString = JSON.stringify(SharedPlaceData);
const SharedPlaceListDataString = JSON.stringify(SharedPlaceListData);

export default function StorageScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalData, setModalData] = useState(null);
    const closeDataModal = () => {
        setModalVisible(false);
      };
    const handleGetAllKeysClick = async () => {
        try {
          const keys = await allKeys();
          if (keys) {
            setModalData(keys);
            setModalVisible(true);
            console.log('Tüm Anahtarlar:', keys);
          } else {
            console.log('Anahtarlar bulunamadı.');
          }
        } catch (error) {
          console.error('Anahtarları alma hatası:', error);
        }
      };

      const GetDataByKeyClick = async () => {
        try {
            key= 'place'
          const data = await getDataByKey(key);
          if (data) {
            setModalData(data);   
            setModalVisible(true);
            console.log("Verileri alında", key, data );
          } else {
            console.log('Datalar bulunamadı.');
          }
        } catch (error) {
          console.error('Dataları alma hatası:', error);
        }
      };

      const DeleteDataByKey = async () => {
        try {
            key = 'place';
            const data = await deleteDataByKey(key);
            setModalData(data);
            setModalVisible(true);
            console.log('Veriler Baaşrıyla Silindi, Silinen Key: "${key}"');
        } catch (error) {
            console.error( ' Veri Silme Hatası',error);
        }
      };

      const SaveDataByKey = async () =>{
        try {
            key = 'placeList'
            jsonData = PlaceListDataString;
            const save = await saveDataByKey(key, jsonData);
            setModalData(jsonData);
            setModalVisible(true);
            console.log('Veriler "${key} ine kaydedildi."');
            
        } catch (error) { 
            console.error( ' Veri Yükleme Hatası',error);
        }
      };

      const deleteById = async () =>{
        try {
            key = 'placeList';
            id = 18;
            const deleted = await saveDataByKey(key, id);
            setModalData(deleted);
            setModalVisible(true);
        } catch (error) {
            console.error( ' Veri Yükleme Hatası',error);
        }
      };
  return (
    <View>
      <Button onPress={handleGetAllKeysClick}> Bütün Keyler</Button>
      <Modal visible={modalVisible} style={styles.modal} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
            <ScrollView style={styles.modalContent}>
                <Text style={styles.modalText}>Modal İçeriği</Text>
                <Text style={styles.modalData}>{modalData}</Text>
            </ScrollView>
            <Button onPress={closeDataModal}>Kapat</Button>
        </View>
        </Modal>
      <Button onPress={GetDataByKeyClick}> Keye Göre Data </Button>
      <Button onPress={DeleteDataByKey}> Keye Göre Data Sil </Button>
      <Button onPress={SaveDataByKey}> Data Yükleme </Button>
      <Button onPress={deleteById}> Id ye Göre Data Silme </Button>
    </View>
  )
}

const styles = StyleSheet.create({
    
    modal: {
      backgroundColor: 'white',
      margin: 0, 
      justifyContent: 'center',
    alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%', 
        
      },
      modalData:{
        marginVertical: 20,
        paddingBottom: 20,
      }
   
  });