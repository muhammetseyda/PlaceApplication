import { StyleSheet, Text, View, TouchableOpacity, Linking, ScrollView, Image } from 'react-native'
import React, {useState} from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const openURL = (url) => {
    Linking.openURL(url); // URL'yi aç
};

export default function PlaceDetail({place}) {
  console.log("palceDEtail.js" + place);
    const url1 = 'https://www.instagram.com/womeprive/'; // İkona verilecek URL
    const url2 = 'https://www.google.com/maps/place/Wome+Prive/@41.0134164,29.0374522,17z/data=!3m1!4b1!4m6!3m5!1s0x14cab9cd8ea16555:0x93a4bc9fc2a430bf!8m2!3d41.0134124!4d29.0400271!16s%2Fg%2F11ssdvc5zy?entry=tts&shorturl=1'; // İkona verilecek URL
    const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  }; 

    return (
    <View style={styles.mainView}>
      <View style={styles.imageView} >
        <Image style={styles.imageStyle} source={require('../../assets/forest.jpg')}/>
      </View>
        <View style={styles.nameView}>
            <Text style={styles.name}>{place.name}</Text>
        </View>
        <View style={styles.description}>
            <Text style={styles.descText}>{place.category}</Text>
            <Text style={styles.descText}>City / Town</Text>
            <Text style={styles.descText}>Adres</Text>
        </View>
        <View style={styles.icon}>
          <View style={styles.instaIcon}>
          {place.link1 ? (
            <TouchableOpacity onPress={() => openURL(place.link1)} activeOpacity={1.0}>
              <FontAwesome5 name="instagram" size={40} color="#3b5998" />
            </TouchableOpacity>
          ) : (
            <FontAwesome5 name="instagram" size={40} color="#ccc" />
          )}
          </View>
          <View style={styles.mapsIcon}>
          {place.link1 ? (
            <TouchableOpacity onPress={() => openURL(place.mapsLink)}>
            <FontAwesome5 name="map" size={40} color="#3b5998" />
        </TouchableOpacity>
          ) : (
            <FontAwesome5 name="map" size={40} color="#ccc" />
          )}
          </View>
        </View>
      <Text>Link2</Text>
      <Text>WebSiteLink</Text>
      <Text>MapsLink</Text>
      <Text>CreatedOn</Text>
      <Text>UpdatedOn</Text>    
      <Text>Went <FontAwesome5 name="check" size={30} color="green"/></Text>    
      <Text>RetryWent</Text>    
      <Text>Description</Text>    
      <Text>IstaURl</Text>    
      <View>
      <TouchableOpacity onPress={toggleAccordion}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          {isOpen ? '-' : '+'} Rating
        </Text>
      </TouchableOpacity>
      {isOpen && (
        <View style={{ padding: 10 }}>
          <Text>Food Rating: X</Text>
          <Text>Service Rating: Y</Text>
          <Text>Service Rating: Y</Text>
          <Text>Service Rating: Y</Text>
          <Text>Service Rating: Y</Text>
          <Text>Service Rating: Y</Text>
          <Text>Atmosphere Rating: Z</Text>
          {/* Diğer rating bilgileri */}
        </View>
      )}
    </View>   
      <Text>UserRating</Text>    
    </View>
  )
};




const styles = StyleSheet.create({
  imageView:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  mainView:{
    marginBottom: 10,
    flex: 1,
  },
    name:{
        fontSize: 30,
        color: 'black',
        margin: 5,
        textAlign: 'center',
        
    },
    description:{
        fontSize: 15,
        alignItems: 'center',
    },
    descText:{
        margin: 5,
    },
    instaIcon:{
      alignSelf: 'center',
      marginHorizontal: 10,
    },
    mapsIcon:{
      alignSelf: 'center',
    },
    icon:{
      flexDirection: 'row',
    },
    imageStyle: {
      width: '100%',
      height: 300,
      borderRadius: 7,
      flex: 1,
    },
})