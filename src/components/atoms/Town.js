import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import {Picker} from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';
import citiesData from '../../assets/citiesData.json'

export default function Town({ data, onTownChange }) {
    
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([]);
    useEffect(() => {
        // JSON dosyasından veriyi al
        // console.log(JSON.stringify(data));
        setValue(null);
        if (data) {
            const cityData = citiesData.cities.find(c => c.value === data);
            // console.log("townCity:" + cityData);
            if (cityData) {
                setItems(cityData.districts.map(district => ({
                    label: district.text,
                    value: district.value
                })));
            }
        }else{
            setItems([]);
        }
      }, [data]);

      useEffect(() => {
        if (value) {
          onTownChange(value);
        }
      }, [value]);


      
    // console.log("data: " + city);
    // console.log("townValue: " + value);
    // console.log("townItems: " + items);
    return (
      <ScrollView>
        <View style={{minHeight: open ? (items.length >= 5 ? 250 : 52 + items.length*40) : 40}}> 
            <DropDownPicker
            placeholder='İlçe Seçiniz'
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