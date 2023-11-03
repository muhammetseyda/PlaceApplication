import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const WeatherData = ({ weatherData }) => {
    const { name, main, weather } = weatherData;
  
    return (
      <View style={styles.cardContainer}>
        <Text style={styles.cityName}>{name}</Text>
        <Text style={styles.temperature}>{Math.round(main.temp - 273.15) }°C</Text>
        <Text style={styles.weatherDescription}>{weather[0].description}</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    cardContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    cityName: {
      fontSize: 24,
      color: 'black',
      fontWeight: 'bold',
    },
    temperature: {
      fontSize: 48,
      color: 'black',
    },
    weatherDescription: {
      fontSize: 16,
      color: 'gray',
    },
  });
  
  export default WeatherData;