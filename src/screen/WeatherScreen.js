import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WeatherData from '../components/atoms/WeatherData'; // WeatherData bileşenini içe aktarıyoruz
import Button from '../components/atoms/Button';
import Geolocation from 'react-native-geolocation-service';
import { PermissionsAndroid } from 'react-native';


const WeatherScreen = () => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = 'dedb42cf0bbe7aeed2fa59e920541925'; // OpenWeatherMap API anahtarınızı ekleyin
  const latitude = 41.08159362686214; // Örnek enlem bilgisi
  const longitude = 28.992347081420764; // Örnek boylam bilgisi
  const [latitudes, setlatitudes] = useState(latitude);
  const [longitudes, setlongitudes] = useState(longitude);
  useEffect(() => {
    // İlk render sırasında ve her koordinat güncellendiğinde hava durumu verilerini çekin.
    fetchWeatherData(latitudes, longitudes);
  }, [latitudes, longitudes]);

  const fetchWeatherData = (lat, lon) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => {
        console.error('Hava durumu isteği sırasında hata:', error);
      });
  };

  
  const [location, setLocation] = useState(false);
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Konum İzni',
          message: 'Konumunuza erişmemize izin verir misiniz?',
          buttonNeutral: 'Daha Sonra Sor',
          buttonNegative: 'Reddet',
          buttonPositive: 'Tamam',
        }
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // Konum izni verildiğinde, konumu alabilirsiniz.
        getLocation();
      } else {
        console.log('Konum izni reddedildi.');
      }
    } catch (err) {
      console.error(err);
    }
  };


  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        setLocation(position);
        setlatitudes(position.coords.latitude);
        setlongitudes(position.coords.longitude);
        console.log('Konum:', position.coords);
      },
      error => {
        console.log('Konum hata:', error.code, error.message);
        setLocation(false);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };


  return (
    <View style={styles.container}>
      {weatherData ? (
        <WeatherData weatherData={weatherData} /> 
      ) : (
        <Text>Loading..</Text>
      )}
      <View style={{marginTop: 50}}>
        <Button onPress={requestLocationPermission}>Get Location</Button>
        {location ? (
          <View>
            <Text>Enlem: {location.coords.latitude}</Text>
            <Text>Boylam: {location.coords.longitude}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WeatherScreen;
