import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import ImageCropPicker  from 'react-native-image-crop-picker';


export default function ImagePickerModal({ isVisible, onClose, onImageSelected }) {
    const selectFromGallery = () => {
        ImageCropPicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
          })
            .then((image) => {
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
            .then((image) => {
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
        onClose(); // Modal'ı kapat
      };
  return (
    <Modal visible={isVisible}>
      <View>
        <Text>Select Image Source:</Text>
        <TouchableOpacity onPress={() => handleImageSelect(false)}>
          <Text>Select from Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleImageSelect(true)}>
          <Text>Capture from Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onClose}>
          <Text>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({})