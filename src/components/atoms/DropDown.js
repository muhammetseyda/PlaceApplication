import { StyleSheet, View, ScrollView, FlatList } from 'react-native'
import React, {useState} from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import { SafeAreaView } from 'react-native-safe-area-context';

DropDownPicker.setListMode("SCROLLVIEW");

export default function DropDown({data, placeholderName,}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(data);
  // console.log(open);
  // console.log(value);
  // console.log(items);
  return (
    <ScrollView>
      <View style={{minHeight: open ? (items.length >= 5 ? 250 : 52 + items.length*40) : 40}}> 
          <DropDownPicker
          placeholder= {placeholderName}
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