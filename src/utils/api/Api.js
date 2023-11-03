import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import axios from 'axios';


const api = axios.create({
    baseURL: 'http://10.0.2.2:5209/api', 
  });


// Get User Acount
export const getUserByEmail = (email) => {
    return api.get(`/Account/user/${email}`);
};

export const getPlaces = () => { 
return api.get('/Places'); 
};

export const getPlacesByUserId = (userId) => { 
    return api.get(`Places/byUserId/${userId}`); 
    };

export const getPlaceListsByUserId = (userId) => { 
    return api.get(`placelist/byUserId/${userId}`); 
    };

export const getShareByUserId = (userId) => { 
    return api.get(`/Share/share/${userId}`); 
    };

export const getPlacesByUser = (userId) => { 
    return api.get('/Places/getallplacesbyuser'); 
    };

export const getPlace = (placeId) => { 
    return api.get(`/Places/${placeId}`); 
    };

export const getSharePlaceList = () => { 
    return api.get(`/Share/GetSharePlaceLists`); 
    };

export const postPlaceList = (placeList) => {
    return api.post("/placelist", placeList);
    };

export const Login = (loginModel) => {
    return api.post("/Account/Login", loginModel);
};

// export const getPlace = (placeId) => {
// return api.get(`/places/${placeId}`);
// };