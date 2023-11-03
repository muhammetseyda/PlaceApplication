import { Modal, StyleSheet, Text, TouchableOpacity, View, TouchableWithoutFeedback, ScrollView, TextInput } from 'react-native'
import React, {useState} from 'react'
import { Image } from 'react-native-animatable'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default function CommentModal({isVisible, onClose}) {
    const comments = [
        "React Native ile hızlı ve etkili bir şekilde mobil uygulamalar geliştirebilirsiniz. Hem iOS hem de Android için aynı kod tabanını kullanmak büyük bir avantajdır.",
        "React Native, geliştiricilere kullanımı kolay ve zengin bir araç seti sunar. Bu, geliştirme sürecini hızlandırır ve kod tekrarını azaltır.",
        "Uygulama geliştirmenin yanı sıra, React Native ile oyunlar ve interaktif içerikler oluşturabilirsiniz. Çok yönlü bir çerçeve.",
        "React Native, Facebook tarafından desteklenir ve büyük bir geliştirici topluluğuna sahiptir. Sorunlarınıza hızlı çözümler bulabilirsiniz.",
        "Mobil uygulama geliştirme sürecini basitleştiren React Native'i öğrenmek, geleceğe yönelik bir beceri olabilir.",
        "React Native ile hızlı ve etkili bir şekilde mobil uygulamalar geliştirebilirsiniz. Hem iOS hem de Android için aynı kod tabanını kullanmak büyük bir avantajdır.",
        "React Native, geliştiricilere kullanımı kolay ve zengin bir araç seti sunar. Bu, geliştirme sürecini hızlandırır ve kod tekrarını azaltır.",
        "Uygulama geliştirmenin yanı sıra, React Native ile oyunlar ve interaktif içerikler oluşturabilirsiniz. Çok yönlü bir çerçeve.",
        "React Native, Facebook tarafından desteklenir ve büyük bir geliştirici topluluğuna sahiptir. Sorunlarınıza hızlı çözümler bulabilirsiniz.",
        "Mobil uygulama geliştirme sürecini basitleştiren React Native'i öğrenmek, geleceğe yönelik bir beceri olabilir."
      ];
      const [comments_deger, setComments_deger] = useState(comments);
      const [comment, setComment] = useState('');
      const addComment = () => {
        if(comment){
            setComments_deger([ ...comments_deger, comment]);
            setComment('');
        }
      };
      const [isHeartToggle, setHeartToggle] = useState(false);
      const [likeCount, setLikeCount] = useState(0);
      const toggleHeart = () => {
        setHeartToggle(!isHeartToggle);
        if (isHeartToggle) {
            setLikeCount(likeCount - 1); // Beğeni azalt
          } else {
            setLikeCount(likeCount + 1); // Beğeni artır
          }
      };
  return (
    <Modal transparent={true} animationType={'slide'} visible={isVisible} style={styles.modalinfo} >
            
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                
                    <View style={styles.touchView}>
                        <Text>Comments</Text>
                    <ScrollView>
                       { comments_deger.map((comment) =>  
                       (<View style={styles.modalInfoDesc}>
                            <View style={styles.imageView}>
                                <Image style={styles.image} source={require('../../assets/profile.png')}></Image>
                            </View>
                            <View style={styles.commentDescView}>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={styles.nameView}>
                                        <Text style={styles.nameText}>Muhammet Seyda Armağan</Text>
                                    </View>
                                    <View style={styles.timeView}>
                                        <Text style={styles.timeText}> 5d önce</Text>
                                    </View>
                                </View>
                                <View style={styles.commentView}>
                                    <View>
                                    <Text> {comment} </Text>
                                    </View>
                                    <View style={{flexDirection: 'row'}}>
                                        <TouchableOpacity onPress={toggleHeart}>
                                        <FontAwesome5  name="heart"  size={20}  style={{paddingHorizontal: 5, color: isHeartToggle ? 'red' : 'black'}}/>
                                        </TouchableOpacity>
                                        <Text> {likeCount} beğeni</Text>
                                    </View>
                                </View>
                            </View>
                        </View> ))}

                        </ScrollView>

                            <View style={styles.inputView}>
                                <TextInput
                                    placeholder="Comment"
                                    style={styles.inputStyle}
                                    value={comment}
                                    onChangeText={(newValue) => setComment(newValue)}
                                    maxLength={500} // Maksimum karakter sınırlaması
                                    multiline={true} // Metin girişinin çok satırlı olmasını sağlar
                                    textAlignVertical="top"
                                />
                                <TouchableOpacity onPress={addComment}>
                                    <FontAwesome5 name="paper-plane"  size={20}  style={{paddingHorizontal: 5}}/>
                                </TouchableOpacity>
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
        height: '70%'

        
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
        },
        image:{
            height: '100%',
            width: '100%',
        },
        nameText:{
            fontSize: 12
        },
        nameView:{
            marginTop: 5,
            paddingRight: 5,
            width: '85%',


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