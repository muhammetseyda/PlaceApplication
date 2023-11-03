import { StyleSheet, Text, View, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React, {useState} from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function ShareModal({isVisible, onClose}) {
    
  return (
        <Modal transparent={true} animationType={'slide'} visible={isVisible} style={styles.modalinfo} >
            
            <View style={styles.centeredView}>
            
                <View style={styles.modalView}>
                
                    <View style={styles.touchView}>
                        <View style={styles.modalInfoDesc}>
                        <TouchableOpacity><Text style={styles.modalInfoDescText}>Hesap Hakkında</Text></TouchableOpacity>
                        </View>
                        <View style={styles.modalInfoDesc}>
                        <TouchableOpacity><Text style={styles.modalInfoDescText}>Hesap Hakkında</Text></TouchableOpacity>
                        </View>
                        <View style={styles.modalInfoDesc}>
                        <TouchableOpacity><Text style={styles.modalInfoDescText}>Hesap Hakkında</Text></TouchableOpacity>
                        </View>
                        <View style={styles.modalInfoDesc}>
                        <TouchableOpacity><Text style={styles.modalInfoDescText}>Hesap Hakkında</Text></TouchableOpacity>
                        </View>
                        <View style={styles.modalInfoDesc}>
                        <TouchableOpacity><Text style={styles.modalInfoDescText}>Hesap Hakkında</Text></TouchableOpacity>
                        </View>
                        <View style={styles.modalInfoDesc}>
                        <TouchableOpacity><Text style={styles.modalInfoDescText}>Hesap Hakkında</Text></TouchableOpacity>
                        </View>
                    </View>
                    
                </View>
                
            </View>
            <TouchableWithoutFeedback onPress={onClose}>
                        <View style={styles.modalBackground}></View>
                    </TouchableWithoutFeedback>
        </Modal>
  )
}

const styles = StyleSheet.create({
    modalinfo:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',


    },
    modalView:{
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 10,
        justifyContent: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        
    },
    centeredView:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    
      touchView:{
        flex:1,
        marginBottom: 20,
        marginTop: 20,
      },
      modalInfoDesc:{
        marginTop: 20,
        borderWidth: 1,
        backgroundColor: 'gray',
        borderRadius: 10,
      },
      modalInfoDescText:{
        margin: 5,
        textAlign: 'center',
      },
      modalBackground: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1
      }
})