import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import InformationList from '../../components/molecules/InformationList'; // Information bileşenini içeri aktarın
import Information from '../../components/molecules/Information';
import placeListData from '../../components/Data/placeList.json'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDataByKey } from '../../utils/AsyncStorage/AsyncStorageUtils';
import InformationSharePlaceList from '../../components/molecules/InformationSharePlaceList';

export default function SharedPlaceListScreen() {
  
  

  return (

    <View>
      <InformationSharePlaceList storageKey={'sharedPlaceList'}/>
    </View>
  )
}

const styles = StyleSheet.create({})