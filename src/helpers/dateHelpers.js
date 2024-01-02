import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


export function calculateTimeDifference(createdDate) {
    const dateCreated = typeof createdDate === 'object' ? createdDate.getTime() : new Date(createdDate).getTime();
    const now = Date.now();
    const timeDifference = now - dateCreated;
  
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
  
    if (weeks > 0) {
      return `${weeks} hafta önce`;
    } else if (days > 0) {
      return `${days} gün önce`;
    } else if (hours > 0) {
      return `${hours} saat önce`;
    } else if (minutes > 0) {
      return `${minutes} dakika önce`;
    } else {
      return `${seconds} saniye önce`;
    }
  }
  
