import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';   



export default function InformationList({ title, imageSource, desc, placeId, isExpanded, onInformationPress }) {
    const navigation = useNavigation();
    // console.log("Information.js" + placeId);
    return (
        <TouchableOpacity onPress={() => onInformationPress(placeId)}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.desc}>{desc}</Text>
          {/* {isExpanded && (<Text style={styles.desc}>{desc}</Text>)} */}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            mode="contained"
            onPress={() => navigation.navigate('Places')} // Buradaki sayfa adını PlaceScreen olarak değiştirdim
            style={styles.detailButton}
          ><Text>Detail</Text>
          </TouchableOpacity>
        </View>
        
      </View>
      
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row', 
      alignItems: 'center', 
      backgroundColor: 'white',
      borderWidth: 2,
      borderRadius: 10,
      marginHorizontal: 10,
      marginVertical: 5,
    },
    imageStyle: {
      width: 70, // Fotoğrafın genişliği
      height: 70, // Fotoğrafın yüksekliği
      borderRadius: 7,
    },
    textContainer: {
      flex: 1, // Metinlerin mevcut alanın tamamını kaplamasını sağlar
      marginLeft: 10, // Metinler ile fotoğraf arasındaki boşluk
      padding: 5,
      backgroundColor : 'white',
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold', // Başlık metni kalın yapar
    },
    desc: {
      fontSize: 12,
      color: 'red', // Açıklama metni gri renkte
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
      },
  });