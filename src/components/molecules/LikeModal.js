import { Modal, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

export default function LikeModal({isVisible, onClose}) {
  return (
    <Modal transparent={true} animationType={'slide'} visible={isVisible} style={styles.modalinfo} >
            
    <View style={styles.centeredView}>
        <View style={styles.modalView}>
        
            <View style={styles.touchView}>
                <Text>Likes</Text>
            <ScrollView>
               <View style={styles.modalInfoDesc}>
                    <View style={styles.imageView}>
                        <Image style={styles.image} source={require('../../assets/profile.png')}></Image>
                    </View>
                    <View style={styles.commentDescView}>
                            <View style={styles.nameView}>
                                <Text style={styles.nameText}>Muhammet Seyda Armağan</Text>
                            </View>
                    </View>
                </View> 

                </ScrollView>

                   

        
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
        height: '50%'

        
    },
    centeredView:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',

    },
    
      touchView:{
        flex:1,
        marginBottom: 10,
        marginTop: 20,

      },
      modalInfoDesc:{
        marginTop: 10,
        backgroundColor: 'pink',
        borderRadius: 10,
        flexDirection: 'row',
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
      },
      imageView:{
        width: 40, 
        height: 40, 
        borderRadius: 20, 
        overflow: 'hidden',
        margin: 5,
        borderWidth: 1,
        },
        image:{
            height: '100%',
            width: '100%',
        },
        nameText:{
            fontSize: 15
        },
        nameView:{
            paddingRight: 5,
            paddingLeft: 5,
            width: '100%',
            flex:1,
            justifyContent: 'center'


        },
        timeView:{
            marginTop: 5,
            margin: 10,
        },
        timeText:{
            fontSize: 10
        },
        commentView:{

        },
        commentDescView:{
            width: '85%',
        },
        inputView:{
            marginTop: 7,
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: 10,
            backgroundColor: '#CCCCCC',

        },
        inputStyle: {
            paddingRight: 5,
            paddingLeft: 5,
            fontSize: 15,
            flex: 1,
            borderRadius: 10,
          },
    })