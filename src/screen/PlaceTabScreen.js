import { StyleSheet, Text, View, Button} from 'react-native'
import React from 'react'

export default function PlaceScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* <Button
        title="Place Detail"
        onPress={() => navigation.navigate('Place Detail')}
      /> */}
        <Button
          title="Place/PlacesIndex"
          onPress={() => navigation.navigate('Places')}
        />

        <Button
          title="Place/AddPlace"
          onPress={() => navigation.navigate('AddPlace')}
        />

        <Button
          title="Place/PlaceList"
          onPress={() => navigation.navigate('Place List')}
        />  
        <Button
          title="Place/AddPlaceList"
          onPress={() => navigation.navigate('Add Place List')}
        />  

      </View>
    )
  }
  
  const styles = StyleSheet.create({})