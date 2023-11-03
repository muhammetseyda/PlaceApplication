import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Modal } from 'react-native'
import React, {useState, useRef} from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ShareModal from '../components/molecules/ShareModal';
import Share from 'react-native-share';
import CommentModal from '../components/molecules/CommentModal';
import LikeModal from '../components/molecules/LikeModal';


export default function ShareCardScreen() {
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };
      const [isHeartToggle, setHeartToggle] = useState(false);
      const [likeCount, setLikeCount] = useState(18);
      const toggleHeart = () => {
        setHeartToggle(!isHeartToggle);
        if (isHeartToggle) {
            setLikeCount(likeCount - 1); // Beğeni azalt
          } else {
            setLikeCount(likeCount + 1); // Beğeni artır
          }
      };
      const shareContent = {
        message: 'Bu bir paylaşım mesajıdır.',
      };
      const handleShare = () => {
        Share.open(shareContent)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            err && console.log(err);
          });
      };
      const [isComment, setisComment] = useState(false);
      const togglecomment = () => {
        setisComment(!isComment);
      };
      const [isLikeModal, setLikeModal] = useState(false);
      const toggleLikeModal = () =>{
        setLikeModal(!isLikeModal);
      }
  return (
    <ScrollView>
        <View style={styles.view}>
      <View style={styles.container}> 
        <View style={styles.imageViewProfile}>
            <TouchableOpacity>
                <Image style={styles.imageProfile} source={require('../assets/profile.png')}></Image>
            </TouchableOpacity>
        </View>
        <View style={styles.nameView}>
            <TouchableOpacity>
                <Text style={styles.nameText}> Muhammet Seyda Armağan</Text>
                <Text style={styles.nameDesc}> Kendisi hakkında Açıklama</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.descriptionView} onPress={toggleModal}> 
            <View>

                <FontAwesome5 name="ellipsis-v"  size={20} /> 
                <ShareModal isVisible={isModalVisible}
                    onClose={toggleModal}
                    />
            </View>
        </TouchableOpacity>

      </View>
      <View style={styles.content}> 
        <View style={styles.contentView}>
            <View style={styles.contentContent}>
                <View style={styles.contentTitle}>
                    <Text style={{textAlign: 'center'}}>Listenin Adı</Text>
                </View>
                <ScrollView style={{height: '90%'}}>
                <TouchableOpacity style={{margin: 10}}>
                    <View style={styles.contenDesc}>
                        <View style={styles.imageView}>
                            <Image style={styles.image} source={require('../assets/5.png')}></Image>
                        </View>
                        <View style={{justifyContent: 'center', marginLeft: 5}}>
                            <Text>birinci yerbi yerbirinci yer</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{margin: 10}}>
                    <View style={styles.contenDesc}>
                        <View style={styles.imageView}>
                            <Image style={styles.image} source={require('../assets/5.png')}></Image>
                        </View>
                        <View style={{justifyContent: 'center', marginLeft: 5}}>
                            <Text>birinci yerbi yerbirinci yer</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{margin: 10}}>
                    <View style={styles.contenDesc}>
                        <View style={styles.imageView}>
                            <Image style={styles.image} source={require('../assets/5.png')}></Image>
                        </View>
                        <View style={{justifyContent: 'center', marginLeft: 5}}>
                            <Text>birinci yerbi yerbirinci yer</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{margin: 10}}>
                    <View style={styles.contenDesc}>
                        <View style={styles.imageView}>
                            <Image style={styles.image} source={require('../assets/5.png')}></Image>
                        </View>
                        <View style={{justifyContent: 'center', marginLeft: 5}}>
                            <Text>birinci yerbi yerbirinci yer</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{margin: 10}}>
                    <View style={styles.contenDesc}>
                        <View style={styles.imageView}>
                            <Image style={styles.image} source={require('../assets/5.png')}></Image>
                        </View>
                        <View style={{justifyContent: 'center', marginLeft: 5}}>
                            <Text>birinci yerbi yerbirinci yer</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{margin: 10}}>
                    <View style={styles.contenDesc}>
                        <View style={styles.imageView}>
                            <Image style={styles.image} source={require('../assets/5.png')}></Image>
                        </View>
                        <View style={{justifyContent: 'center', marginLeft: 5}}>
                            <Text>birinci yerbi yerbirinci yer</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{margin: 10}}>
                    <View style={styles.contenDesc}>
                        <View style={styles.imageView}>
                            <Image style={styles.image} source={require('../assets/5.png')}></Image>
                        </View>
                        <View style={{justifyContent: 'center', marginLeft: 5}}>
                            <Text>birinci yerbi yerbirinci yer</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
        <View>
            <View style={styles.icons}>
                <TouchableOpacity onPress={toggleHeart}>
                    <FontAwesome5 name={'heart'} size={20}  style={{paddingHorizontal: 5, color: isHeartToggle ? 'red' : 'black'}}/> 
                </TouchableOpacity>
                <TouchableOpacity onPress={togglecomment}>
                    <FontAwesome5 name="comment"  size={20}  style={{paddingHorizontal: 5}}/>
                    <CommentModal 
                    isVisible={isComment}
                    onClose={togglecomment}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleShare}>
                    <FontAwesome5 name="share"  size={20}  style={{paddingHorizontal: 5}}/> 
                </TouchableOpacity>

                <View style={{paddingRight: 10}}>
                <TouchableOpacity onPress={toggleLikeModal}> 
                        <Text>{likeCount} beğeni</Text> 
                        <LikeModal 
                        isVisible={isLikeModal}
                        onClose={toggleLikeModal}/>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={togglecomment}> 
                        <Text>3 yorum </Text> 
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.timeView}>
                <Text style={styles.timeText}>3 saat önce</Text>
            </View>
        </View>
      </View>
      </View>
    </ScrollView>
    
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 5,
        flexDirection: 'row',
        marginHorizontal: 10,
    },
    nameView:{
        flex:1,
        marginLeft: 10,
        justifyContent: 'center',
    },
    nameText:{
    },
    imageView:{
    width: 40, 
    height: 40, 
    borderRadius: 15, 
    overflow: 'hidden',
    margin: 5,
    },
    imageViewProfile:{
        width: 40, 
        height: 40, 
        borderRadius: 20, 
        overflow: 'hidden',
        margin: 5,
        },
    imageProfile:{
        height: '100%',
        width: '100%',
    },
    image:{
        height: '100%',
        width: '100%',
    },
    descriptionView:{
        marginLeft: 10,
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: 20,
    },
    nameDesc:{
        fontSize: 12,
    },
    content:{
        margin: 5
    },
    contentView:{
        height: 300,
        margin : 10,
    },
    view:{
        margin: 10,
    },
    contentContent:{
        margin: 5,
        
    },
    contentTitle:{
    },
    contenDesc:{
        flexDirection: 'row',
        borderRadius: 10,
        borderWidth: 1,

    },
    icons:{
        flexDirection: 'row',
        paddingHorizontal: 15
    },
    timeText:{
        fontSize: 12,
        marginLeft: 5
    },
    timeView:{
        padding: 2,
        margin: 7

    },
})