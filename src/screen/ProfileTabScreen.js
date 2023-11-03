import { StyleSheet, Text, View, Button } from 'react-native'
import React, {useState, useEffect} from 'react'
import { getUserByEmail } from '../utils/api/Api'
import Profile from '../components/Profile/Profile';
import Spinner from '../components/atoms/Spinner';

export default function ProfileTabScreen() {
  const [user, setUser] = useState([]);
  const fetchGetUser = async () => {
    try {
      const response = await getUserByEmail("muhammedseyda@hotmail.com");
      console.log(response);
      setUser(response.data);

    } catch (error) {
      console.error('API başarısız profile tab screen.js: ', error);
    }
  };

  useEffect(() => {
    fetchGetUser();
  }, []);
  console.log(user);
  return (
    <View>
      {user ? (
        <Profile userId={user.id}/>
      ) : (
        <Spinner size="large" />
      )}
    
  </View>
  )
}

const styles = StyleSheet.create({})