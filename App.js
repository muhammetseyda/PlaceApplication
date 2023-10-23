import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTabScreen from './src/screen/HomeTabScreen';
import PlaceTabScreen from './src/screen/PlaceTabScreen';
import ShareTabScreen from './src/screen/ShareTabScreen';
import PlaceDetailScreen from './src/screen/Place/PlaceDetailScreen';
import LoginScreen from './src/screen/Account/LoginScreen';
import RegisterScreen from './src/screen/Account/RegisterScreen';
import PlacesScreen from './src/screen/Place/PlacesScreen';
import AddPlaceScreen from './src/screen/Place/AddPlaceScreen';
import PlaceListScreen from './src/screen/Place/PlaceListScreen';
import AddPlaceListScreen from './src/screen/Place/AddPlaceListScreen';
import StorageScreen from './src/screen/Storage/StorageScreen';
import DenemeScreen from './src/screen/DenemeScreen';
import PlaceListDetailScreen from './src/screen/Place/PlaceListDetailScreen';
import CameraScreen from './src/screen/CameraScreen';
import SharedPlaceScreen from './src/screen/SharedPlace/SharedPlaceScreen';
import SwipeScreen from './src/screen/SwipeScreen';
import SharePlaceDetailScreen from './src/screen/SharedPlace/SharePlaceDetailScreen';
import SharedPlaceListScreen from './src/screen/SharedPlace/SharedPlaceListScreen';
import ProfileTabScreen from './src/screen/ProfileTabScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
  <Stack.Screen name="Home" component={HomeTabScreen} />
  
<Stack.Screen name="AccountLogin" component={LoginScreen} options={{
    headerStyle:styles.headerStyle, 
    headerTitleAlign: 'center',
    headerTintColor: 'black',
  }} />
<Stack.Screen name="Register" component={RegisterScreen} options={{
    headerStyle:styles.headerStyle, 
    headerTitleAlign: 'center',
    headerTintColor: 'black',
  }} />

<Stack.Screen name="Storage" component={StorageScreen} options={{
    headerStyle:styles.headerStyle, 
    headerTitleAlign: 'center',
    headerTintColor: 'black',
  }} />

<Stack.Screen name="Deneme" component={DenemeScreen} options={{
    headerStyle:styles.headerStyle, 
    headerTitleAlign: 'center',
    headerTintColor: 'black',
  }} />

<Stack.Screen name="Camera" component={CameraScreen} options={{
    headerStyle:styles.headerStyle, 
    headerTitleAlign: 'center',
    headerTintColor: 'black',
  }} />

<Stack.Screen name="Swipe" component={SwipeScreen} options={{
      headerStyle:styles.headerStyle, 
      headerTitleAlign: 'center',
      headerTintColor: 'black',
    }} />
  

</Stack.Navigator>
);

const PlacesStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Place" component={PlaceTabScreen} />
    <Stack.Screen name="Places" component={PlacesScreen} options={{
      headerStyle:styles.headerStyle, 
      headerTitleAlign: 'center',
      headerTintColor: 'black',
    }} />
    <Stack.Screen name="Place Detail" component={PlaceDetailScreen} options={{
      headerStyle:styles.headerStyle, 
      headerTitleAlign: 'center',
      headerTintColor: 'black',
    }} />

    <Stack.Screen name="AddPlace" component={AddPlaceScreen} options={{
      headerStyle:styles.headerStyle, 
      headerTitleAlign: 'center',
      headerTintColor: 'black',
    }} />

  <Stack.Screen name="Place List" component={PlaceListScreen} options={{
        headerStyle:styles.headerStyle, 
        headerTitleAlign: 'center',
        headerTintColor: 'black',
      }} />

<Stack.Screen name="Add Place List" component={AddPlaceListScreen} options={{
        headerStyle:styles.headerStyle, 
        headerTitleAlign: 'center',
        headerTintColor: 'black',
      }} />

<Stack.Screen name="Place List Detail" component={PlaceListDetailScreen} options={{
      headerStyle:styles.headerStyle, 
      headerTitleAlign: 'center',
      headerTintColor: 'black',
    }} />


  </Stack.Navigator>

  

  
);

const ShareStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Shared" component={ShareTabScreen} />
    <Stack.Screen name="Share Place" component={SharedPlaceScreen} options={{
      headerStyle:styles.headerStyle, 
      headerTitleAlign: 'center',
      headerTintColor: 'black',
    }} />

<Stack.Screen name="Share Place Detail" component={SharePlaceDetailScreen} options={{
      headerStyle:styles.headerStyle, 
      headerTitleAlign: 'center',
      headerTintColor: 'black',
    }} />

<Stack.Screen name="Share Place List" component={SharedPlaceListScreen} options={{
      headerStyle:styles.headerStyle, 
      headerTitleAlign: 'center',
      headerTintColor: 'black',
    }} />
  </Stack.Navigator>
);

const ProfileStack = ()  => (
  <Stack.Navigator>
    <Stack.Screen name="Profil" component={ProfileTabScreen} />
  </Stack.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
    headerShown: false, // Header'ı gizler
  }}>
        <Tab.Screen name="Hom" component={HomeStack} />
        <Tab.Screen name="Plac" component={PlacesStack} />
        <Tab.Screen name="Share" component={ShareStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerStyle:{
    backgroundColor: '#5D6AE3', 
    justifyContent: 'center',
  },
  headerTitleStyle:{
    
  },
  headerTitleAlign: 'center',
});
