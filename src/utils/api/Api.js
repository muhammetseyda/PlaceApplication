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

// export const ShareList = () => { 
//     return api.get("Share/GetSharePlaceLists");
// };
export const ShareList = (page, pageSize) => { 
    return api.get(`Share/GetSharePlaceListByPage?page=${page}&pageSize=${pageSize}`);
};

export const CommentByListId = (listid) => { 
    return api.get(`/comment/getcommentbylistid/${listid}`);
};

export const CommentPost = (commentModel) => {
    return api.post("/comment", commentModel);
};

export const CommentCount = (listid) => {
    var count = api.get(`/comment/getCommentCount/${listid}`)
    return count;
};

// export const getPlace = (placeId) => {
// return api.get(`/places/${placeId}`);
// };