import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import {Picker} from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';
import citiesData from '../../assets/citiesData.json'

export default function City({onCityChange}) {
    const [cities, setCities] = useState([]);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([]);
    useEffect(() => {
        // JSON dosyasından veriyi al
        setCities(citiesData.cities);
        setItems(citiesData.cities.map(city => ({
          label: city.text,
          value: city.value,
        })));


      }, []);

      useEffect(() => {
        if (value) {
          onCityChange(value);
        }
      }, [value]);

      
      
    
    // console.log("cityValue: " + value);
    // console.log("cityItems: " + JSON.stringify(items));
    return (
      <ScrollView>
        <View style={{minHeight: open ? (items.length >= 5 ? 250 : 52 + items.length*40) : 40}}> 
            <DropDownPicker
            placeholder='İl Seçiniz'
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                />
        </View>
      </ScrollView>
    )
  }
const styles = StyleSheet.create({})