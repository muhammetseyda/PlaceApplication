/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: 'AIzaSyDYLO3KZoN12DfoZgHKCkB-08BNev26saY',
    authDomain: 'placeappv01.firebaseapp.com',
    projectId: 'placeappv01',
    storageBucket: 'placeappv01.appspot.com',
    messagingSenderId: '791203202625',
    appId: '1:791203202625:web:f557177b62847e15bea8c0',
    measurementId: 'G-TWDE45GZGK'
  };

AppRegistry.registerComponent(appName, () => App);
