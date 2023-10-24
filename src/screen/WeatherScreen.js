import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WeatherData from '../components/atoms/WeatherData'; // WeatherData bileşenini içe aktarıyoruz

const WeatherScreen = () => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = 'dedb42cf0bbe7aeed2fa59e920541925'; // OpenWeatherMap API anahtarınızı ekleyin
  const latitude = 40.7128; // Örnek enlem bilgisi
  const longitude = -74.0060; // Örnek boylam bilgisi

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        // Hava durumu verilerini alın ve state'e kaydedin
        setWeatherData(data);
      })
      .catch((error) => {
        console.error('Hava durumu isteği sırasında hata:', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      {weatherData ? (
        <WeatherData weatherData={weatherData} /> 
      ) : (
        <Text>Loading...</Text>
      )}
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
