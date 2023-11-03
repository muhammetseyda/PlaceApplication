import AsyncStorage from '@react-native-async-storage/async-storage';

export async function findPlaceById(placeId) {
  try {
    const placesData = await AsyncStorage.getItem('placeApi');
    if (placesData) {
      const parsedData = JSON.parse(placesData);
      const place = parsedData.find(place => place.id === placeId);
      return place;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Veri sorgulama hatası:', error);
    throw error;
  }
}

export async function findSharedPlaceListById(placeListId) {
  try {
    const placesData = await AsyncStorage.getItem('sharedPlaceList');
    if (placesData) {
      const parsedData = JSON.parse(placesData);
      const place = parsedData.find(place => place.id === placeListId);
      return place;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Veri sorgulama hatası:', error);
    throw error;
  }
}

export async function findPlaceListById(placeListId) {
  try {
    const placesListData = await AsyncStorage.getItem('placeList');
    if (placesListData) {
      const parsedData = JSON.parse(placesListData);
      const place = parsedData.placeList.find(place => place.id === placeListId);
      return place;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Veri sorgulama hatası:', error);
    throw error;
  }
}


export async function allKeys() {
  try {
    const allKeys = await AsyncStorage.getAllKeys();
    if (allKeys) {
      return allKeys; // Tüm anahtarları döndür
    } else {
      return null;
    }
  } catch (error) {
    console.error('Tüm anahtarları alırken hata oluştu:', error);
    throw error;
  }
}

export async function getDataByKey (key){
  try {
    const data = await AsyncStorage.getItem(key);
    if (data) {
      return data; // Örnek olarak, veriyi JSON'dan ayrıştırıyoruz
    } else {
      // Anahtar bulunamadı
      return null;
    }
  } catch (error) {
    console.error('anahtara göre verileri alırken hata oluştu:', error);
    throw error;
  }
}

export async function deleteDataByKey (key) {
  try {
    await AsyncStorage.removeItem(key);
    console.log(`Anahtar "${key}" ile ilişkilendirilen veri başarıyla silindi.`);
  } catch (error) {
    console.error('Anahtar "${key}" olan veriler silinemedi', error);
    throw error;

  }
}

export async function deleteDataByKeyAndId (key, id) {
  try {
    let data = await AsyncStorage.getItem(key);
    
    if (data) {
      // Önce mevcut veriyi çekin ve JSON olarak ayrıştırın
      data = JSON.parse(data);

      // Belirli bir ID'yi içermeyen verileri filtreleyin ve yeni veriyi oluşturun
      data = data.filter(item => item.id !== id);

      // Yeni veriyi tekrar JSON formatına çevirin ve kaydedin
      await AsyncStorage.setItem(key, JSON.stringify(data));

      console.log(`Anahtar "${key}" ile ilişkilendirilen veri başarıyla silindi.`);
    } else {
      console.log(`Anahtar "${key}" ile ilişkilendirilen veri bulunamadı.`);
    }
  } catch (error) {
    console.error(`Anahtar "${key}" olan veriler silinemedi`, error);
    throw error;
  }
}

export async function saveDataByKey (key,jsonData){
  try {
    await AsyncStorage.setItem(key,jsonData);
    console.log(`Veriler "${key}" adlı keye kaydedildi.`)
  } catch (error) {
    console.error('Datalar kaydedilemedi', error);
    throw error;
  }
}

export async function sharePlace (placeId){
  try {
    // Asenkron olarak veriyi alın
    console.log(placeId);
    const data = await AsyncStorage.getItem('sharedPlace');
    const place = await AsyncStorage.getItem('place');
    
    // JSON verilerini ayrıştırın
    const sharedPlaceData = JSON.parse(data) || [];
    const placeData = JSON.parse(place);
    
    // Veriyi birleştirin
    sharedPlaceData.sharedPlace.push(placeData.place.find(x => x.id === placeId));
    
    // Birleştirilmiş veriyi tekrar saklayın
    await AsyncStorage.setItem('sharedPlace', JSON.stringify(sharedPlaceData));
    
    console.log("Yer Paylaşma başarılı");
  } catch (error) {
    console.error('Yer paylaşılamadı!!!', error);
    throw error;
  }
}

export async function sharePlaceList (placeListId){
  try {
    // Asenkron olarak veriyi alın
    console.log(placeListId);
    const data = await AsyncStorage.getItem('sharedPlaceList');
    const place = await AsyncStorage.getItem('placeList');
    
    // JSON verilerini ayrıştırın
    const sharedPlaceData = JSON.parse(data) || [];
    const placeData = JSON.parse(place);
    
    // Veriyi birleştirin
    sharedPlaceData.sharedPlaceList.push(placeData.placeList.find(x => x.id === placeListId));
    
    // Birleştirilmiş veriyi tekrar saklayın
    await AsyncStorage.setItem('sharedPlaceList', JSON.stringify(sharedPlaceData));
    
    console.log("Liste Paylaşma başarılı");
  } catch (error) {
    console.error('Liste paylaşılamadı!!!', error);
    throw error;
  }
}