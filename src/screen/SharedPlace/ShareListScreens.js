import { ActivityIndicator, ScrollView, StyleSheet, Text, View, Alert } from 'react-native'
import React, {useEffect, useState} from 'react'
import ShareCard from '../../components/Share/ShareCard'
import { ShareList } from '../../utils/api/Api'
import NetInfo from '@react-native-community/netinfo';

export default function ShareListScreens() {
    const [shareList, setshareList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const pageSize = 10;
    const getShareList = async (pageNumber) => {
      try {
        const response = await ShareList(pageNumber, pageSize);
        // console.log(response.data.sharePlaceLists);
        return response.data;
      } catch (error) {
        console.error("ShareListScreen", error);
        throw error;
      }
    };
    

    const fetchData = async () => {
      try {
        setLoading(true);
        const netInfoState = await NetInfo.fetch();
      if (!netInfoState.isConnected) {
        throw new Error("İnternet bağlantınızı kontrol edin.");
      }
        const data = await getShareList(page);
        setshareList((prevList) => [...prevList, ...data.sharePlaceLists]);
        setPage((prevPage) => prevPage + 1);
      } catch (error) {
        console.error("ShareListScreennnn", error.message);
        Alert.alert("Hata", error.message);
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => { 
        fetchData();
      }, []); 

      const handleScroll = (event) => {
        const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
        if (contentOffset.y + layoutMeasurement.height >= contentSize.height && !loading) {
            setLoading(true);
            fetchData();
        }
    }; 
  return (
    <ScrollView onScroll={handleScroll} style={styles.scrollView}>
      {shareList.map((placeList) => (
        <ShareCard shareList={placeList}/>
      ))}
      {loading && (
        <View style={{ padding: 10 }}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
      },
})