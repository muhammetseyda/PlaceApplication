import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getPlaceListsByUserId, getPlacesByUserId, getShareByUserId } from '../api/Api';

const api = axios.create({
  baseURL: 'http://10.0.2.2:5209/api', 
});
const userId = "38b9b5bd-cd6a-45d8-b821-f60a13fa9c77";
export async function CheckKey () {
try {
  const keys = await AsyncStorage.getAllKeys();
  
  const placeResponse = await getPlacesByUserId(userId);
  const placeListResponse = await getPlaceListsByUserId(userId);
  const shareResponse = await getShareByUserId(userId);

  const placeResponseData = placeResponse.data;
  const placeListResponseData = placeListResponse.data;
  const shareResponseData = shareResponse.data;

  await AsyncStorage.setItem("placeApi", JSON.stringify(placeResponseData));
  await AsyncStorage.setItem("placeListApi", JSON.stringify(placeListResponseData));
  await AsyncStorage.setItem("shareApi", JSON.stringify(shareResponseData));

  const apiKeys = keys.filter((key) => key.includes('Api'));
  const apiData = {};
  for (const apiKey of apiKeys) {
    const data = await AsyncStorage.getItem(apiKey);
    apiData[apiKey] = JSON.parse(data);
  }
  console.log('API verileri:', apiData);
  

  
} catch (error) {
  console.error("CheckKey",error);
}
};
