import { StyleSheet, Text, View, Button} from 'react-native'
import React from 'react'

export default function ShareTabScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* <Button
        title="Place Detail"
        onPress={() => navigation.navigate('Place Detail')}
      /> */}
        <Button
          title="Share Place"
          onPress={() => navigation.navigate('Share Place')}
        />

<Button
          title="Share Place List"
          onPress={() => navigation.navigate('Share Place List')}
        />
    
         
      </View>
    )
  }
  
  const styles = StyleSheet.create({})