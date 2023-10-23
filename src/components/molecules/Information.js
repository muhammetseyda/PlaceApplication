import { StyleSheet, Text, View, Image, TouchableOpacity, PanResponder, Animated, Easing } from 'react-native'
import React, {useRef, useState} from 'react'
import { useNavigation } from '@react-navigation/native';   
import * as Animatable from 'react-native-animatable';
import { sharePlace } from '../../utils/AsyncStorage/AsyncStorageUtils';
import Button from '../atoms/Button';


export default function Information({title, imageSource, desc, placeId, isAnimated}) {
    const navigation = useNavigation();
    const [swipeDistance, setSwipeDistance] = useState(0);
    const animatedValue = useRef(new Animated.Value(0)).current;
    const maxSwipeDistance = -84;
    const originalSwipeDistance = useRef(0);
  
    const panResponder = useRef(
      PanResponder.create({
        onStartShouldSetPanResponder: () => isAnimated == true ? true: false,
        onMoveShouldSetPanResponder: () => isAnimated == true ? true: false,
        onPanResponderMove: (e, gestureState) => {
          // Swipe işlemi burada yapılır, gestureState.dx yatay kaydırma mesafesini verir.
          const newSwipeDistance = Math.min(0, swipeDistance + gestureState.dx);
          const integerSwipeDistance = parseInt(newSwipeDistance);
  
  
          animatedValue.setValue(newSwipeDistance);
          setSwipeDistance(newSwipeDistance);
          originalSwipeDistance.current = newSwipeDistance;



        },
        onPanResponderRelease: (e, gestureState) => {
          if (originalSwipeDistance.current <= -200) {
            // Swipe işlemi burada gerçekleştirilebilir.
            let finalToValue = originalSwipeDistance.current < maxSwipeDistance ? maxSwipeDistance : originalSwipeDistance.current;
            Animated.timing(animatedValue, {
              toValue: finalToValue,
              duration: 300,
              easing: Easing.ease,
              useNativeDriver: false,
            }).start();
          } else {
            // Swipe işlemi sıfırlanır, ancak swipeDistance'ı sıfırlamaz.
            Animated.timing(animatedValue, {
              toValue: 0,
              duration: 300,
              easing: Easing.ease,
              useNativeDriver: false,
            }).start();
          }
        },
      })
    ).current;
  


  const animatedStyle = {
    transform: [{ translateX: animatedValue }],
  };

    return (
      <View style={{borderWidth: 0}}>
      <Animatable.View {...panResponder.panHandlers} style={[animatedStyle]}>
        <TouchableOpacity key={placeId} onPress={() => navigation.navigate('Place Detail', { placeId: placeId })}>
            <View style={styles.container}>
                <Image style={styles.imageStyle} source={imageSource}/>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.desc}>{desc}</Text>
                    <Text>{placeId}</Text>
                </View>
            </View>
      </TouchableOpacity>
      </Animatable.View>
      {isAnimated && <View style={styles.additionalView}>
        <Button onPress={() => sharePlace(placeId)}>Share</Button>
        </View>}
      </View>
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
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold', // Başlık metni kalın yapar
    },
    desc: {
      fontSize: 12,
      color: 'red', // Açıklama metni gri renkte
    },
    additionalView: {
      backgroundColor: 'lightgrey',
      position: 'absolute', // Ek view'ı özgün view ile aynı satırda tutmak için
      right: 0, // Ek view'ı özgün view'in solunda tutmak için
      alignItems: 'flex-end', // İçeriği yatay olarak ortalamak için
      justifyContent: 'flex-end', // İçeriği dikey olarak ortalamak için
      zIndex: -10,
      borderRadius: 10,
      marginHorizontal: 10,
      marginVertical: 5,
      borderWidth: 2,
      flexDirection: 'row', // İçeriği yatay olarak düzenlemek için
      alignItems: 'center', 
      height: '88%',
      borderColor: 'black',
      width: '95%',

    },
  });
  