import { StyleSheet, Text, View,ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function PlaceShow({ placeId, places, navigation, placeshow_container_style }) {
  return (
    <ScrollView nestedScrollEnabled={true} style={{maxHeight: 200, backgroundColor:'gray', marginVertical: 10, borderRadius: 10, marginRight:10,}}>
            <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 16}}>Places</Text>
            {places.map(subPlace => ( 
                <TouchableOpacity key={places.id} onPress={() => navigation.navigate('Place Detail', { placeId: subPlace.id })}>
                <View style={[styles.container, placeshow_container_style]}>
                    <Image style={styles.imageStyle} source={require('../../assets/no.png')}/>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{subPlace.name}</Text>
                        <Text style={styles.desc}>{subPlace.description}</Text>
                        <Text>{subPlace.id}</Text>
                    </View>
                </View>
          </TouchableOpacity>
              ))}
          </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', // İçeriği yatay olarak düzenlemek için
        alignItems: 'center', // İçeriği dikey olarak ortalamak için
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
      shareContainer: {
        alignSelf: 'flex-start',
        marginTop: 15,
        backgroundColor: 'red',
        },
})