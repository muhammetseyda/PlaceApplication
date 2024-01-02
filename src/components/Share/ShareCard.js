import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Modal } from 'react-native'
import React, {useState, useRef} from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ShareModal from '../molecules/ShareModal';
import Share from 'react-native-share';
import CommentModal from '../molecules/CommentModal';
import LikeModal from '../molecules/LikeModal';
import { useNavigation } from '@react-navigation/native';
import { calculateTimeDifference } from '../../helpers/dateHelpers';


export default function ShareCard({user, shareList}) {
    const navigation = useNavigation();
    const timeDifference = calculateTimeDifference(shareList.createdDate);
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };
      const [isHeartToggle, setHeartToggle] = useState(false);
      const [likeCount, setLikeCount] = useState(shareList.likeCount);
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
    <ScrollView nestedScrollEnabled={true}>
        <View style={styles.view} key={shareList.id}>
      <View style={styles.container}> 
        <View style={styles.imageViewProfile}>
            <TouchableOpacity>
                <Image style={styles.imageProfile} source={require('../../assets/profile.png')}></Image>
            </TouchableOpacity>
        </View>
        <View style={styles.nameView}>
            <TouchableOpacity>
                <Text style={styles.nameText}> {shareList.userName}</Text>
                <Text style={styles.nameDesc}> Kendisi hakkında Açıklama</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.descriptionView} onPress={toggleModal}> 
            <View>

                <FontAwesome5 name="ellipsis-v"  size={20} /> 
                <ShareModal key="share-modal" isVisible={isModalVisible}
                    onClose={toggleModal}
                    />
            </View>
        </TouchableOpacity>

      </View>
      <View style={styles.content}> 
        <View style={styles.contentView}>
            <View style={styles.contentContent}>
                <View style={styles.contentTitle}>
                    <Text style={{textAlign: 'center',fontWeight:'bold'}}>{shareList.listName}</Text>
                </View>
                <ScrollView style={{maxHeight: '90%'}} nestedScrollEnabled={true}>
                    {shareList.sharePlace.map((sharePlace) => (
                        <TouchableOpacity style={{margin: 10}} onPress={() => navigation.navigate("Place Detail", { placeId: sharePlace.id })}>
                        <View style={styles.contenDesc} key={sharePlace.id}>
                            <View style={styles.imageView}>
                                <Image style={styles.image} source={require('../../assets/5.png')}></Image>
                            </View>
                            <View style={{justifyContent: 'center', marginLeft: 5}}>
                                <Text>{sharePlace.name}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    ))}
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
                    key="comment-modal"
                    isVisible={isComment}
                    onClose={togglecomment}
                    listid={shareList.id}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleShare}>
                    <FontAwesome5 name="share"  size={20}  style={{paddingHorizontal: 5}}/> 
                </TouchableOpacity>

                <View style={{paddingRight: 10}}>
                <TouchableOpacity onPress={toggleLikeModal}> 
                        <Text>{likeCount} beğeni</Text> 
                        <LikeModal 
                        key="like-modal"
                        isVisible={isLikeModal}
                        onClose={toggleLikeModal}/>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={togglecomment}> 
                        <Text> {shareList.commentCount} yorum </Text> 
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.timeView}>
                <Text style={styles.timeText}>{timeDifference}</Text>
            </View>
        </View>
      </View>
      </View>
      <View style={{borderWidth: 1,borderColor: 'gray', marginHorizontal: 20,}}></View>
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
        maxHeight: 300,
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