import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import InformationSharePlace from '../molecules/InformationSharePlace';

export default function SharePlaceListDetail({placeList}) {
    console.log("placeListDetails" ,placeList);
  return (
    <View style={styles.mainView}>
      <View style={styles.nameView}>
        <Text style={styles.textName}>{placeList.listName}</Text>
        </View>
        <View style={styles.descView}>
            <Text style={styles.textDesc}>{placeList.listDescription}</Text>
        </View>
        <View style={styles.placesView}>
            <Text style={styles.placeTitle}> Places</Text>
            <ScrollView style={styles.placeScrollView}>
                {placeList.sharePlace.map((place) => (
                    <InformationSharePlace 
                    placeId={place.id}
                    key={place.id}
                    title={place.name}
                    imageSource={require('../../assets/no.png')}
                    desc={place.description}
                    />
                ))}
            </ScrollView>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainView:{
    },
    nameView:{
        alignItems: 'center',
        paddingVertical: 10,
    },
    textName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    descView:{
        alignItems: 'center',
        paddingVertical: 10,
    },
    textDesc:{

    },
    placesView:{
        alignSelf: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor:'white',
        maxHeight: '80%',
        borderRadius: 10,

    },
    placeScrollView:{
    },
    placeTitle:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
    },
})