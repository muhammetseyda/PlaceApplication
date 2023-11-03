import { StyleSheet, Text, View, Button, TouchableOpacity, ImageBackground} from 'react-native'
import React from 'react'

export default function PlaceScreen({navigation}) {
    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity style={[styles.cell, styles.placeContainer]} onPress={() => navigation.navigate("Places")}>
        <ImageBackground source={require('../assets/place1.png')} style={styles.imageBack}>
        <View >
          <Text style={[styles.textCell, styles.placeText]}>PLACE</Text>
        </View>
        </ImageBackground>
        </TouchableOpacity>

        
        <TouchableOpacity style={[styles.cell, styles.placeListContainer]} onPress={() => navigation.navigate("Place List")}>
        <ImageBackground source={require('../assets/placeList.png')} style={styles.imageBack}>
        <View >
          <Text style={[styles.textCell, styles.placeText]}>PLACE LİST</Text>
        </View >
        </ImageBackground>

        </TouchableOpacity>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    mainContainer:{
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    cell:{
      borderWidth: 2,
      height: '50%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textCell:{
      fontSize: 25,
      fontWeight: 'bold',
      color: 'purple',
      marginTop: 100
    },
    placeContainer:{
     
    },
    placeListContainer:{
   

    },
    imageBack:{
      resizeMode:'contain',
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },  
  })