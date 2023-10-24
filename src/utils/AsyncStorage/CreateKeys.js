import AsyncStorage from '@react-native-async-storage/async-storage';

export async function CreateKeys() {
 try {
    const createdKey = ["place", "placeList", "sharedPlace", "sharedPlaceList"];
    const keys = await AsyncStorage.getAllKeys();
    for (const key of createdKey){
        if (!keys.includes(key)) {
            await AsyncStorage.setItem(key, JSON.stringify([]));
            console.log(`${key} oluşturuldu.`);
        }
    }
    console.log("Anahytar kontrolü sağlandı.");
 } catch (error) {
    console.error("Hata", error);
 }
};
