import ImageCropPicker from 'react-native-image-crop-picker';
import firebase from 'firebase/compat/app';
import 'firebase/storage';
import React from 'react';
import { View, Button, TouchableOpacity, Text } from 'react-native';

// Firebase yapılandırma bilgilerini ekleyin

  
  // Firebase Storage referansı
  const storage = firebase.storage();

export default function CameraScreen({ onImageSelected }) {
    const selectFromGallery = () => {
        ImageCropPicker.openPicker({
          width: 300,
          height: 400,
          cropping: true,
        })
          .then(async (image) => {
            await uploadImage(image.path);
            onImageSelected(image);
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
      const captureFromCamera = () => {
        ImageCropPicker.openCamera({
          width: 300,
          height: 400,
          cropping: true,
        })
        .then(async (image) => {
            await uploadImage(image.path);
            onImageSelected(image);
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
      const handleImageSelect = (fromCamera) => {
        if (fromCamera) {
          captureFromCamera();
        } else {
          selectFromGallery();
        }
      };

      const uploadImage = async (localFilePath) => {
        try {
            console.log(localFilePath);
          const imageName = `image_${new Date().getTime()}.jpg`; // Özel bir isim oluşturabilirsiniz.
          const fileRef = storage.ref(`images/${imageName}`);
          const response = await fetch(localFilePath);
          const blob = await response.blob();
          await fileRef.put(blob);
          console.log('Resim başarıyla yüklendi.');
        } catch (error) {
          console.error('Resim yükleme hatası:', error);
        }
      };
    

return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        onPress={() => handleImageSelect(false)}
        style={{ backgroundColor: 'lightgray', padding: 10, margin: 10 }}
      >
        <Text>Select from Gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleImageSelect(true)}
        style={{ backgroundColor: 'lightgray', padding: 10, margin: 10 }}
      >
        <Text>Capture from Camera</Text>
      </TouchableOpacity>
    </View>
  );
}