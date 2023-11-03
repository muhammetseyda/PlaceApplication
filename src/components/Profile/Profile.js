import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, {useState} from 'react'
import ProfilePlaces from '../molecules/Profile/ProfilePlaces';
import ProfilePlaceList from '../molecules/Profile/ProfilePlaceList';
import ProfileShare from '../molecules/Profile/ProfileShare';

export default function Profile({userId}) {
    const [selectedTab, setSelectedTab] = useState('places');

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };
  return (
    <View style={styles.mainView}>
        <View style={styles.topView}>
            <View style={styles.userNameView}>
                <Text style={styles.nameText}>Muhammet Seyda Armağan</Text>
                <Text style={styles.descText}>Uyuyor</Text>
                <View style={styles.descView}>
                    <View style={styles.placeView}>
                        <TouchableOpacity>
                            <Text style={styles.descViewText}>Place</Text>
                            <Text style={styles.descViewText}>12</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.placeView}>
                    <TouchableOpacity>
                            <Text style={styles.descViewText}>Place List</Text>
                            <Text style={styles.descViewText}>12</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.placeView}>
                    <TouchableOpacity>
                            <Text style={styles.descViewText}>Share</Text>
                            <Text style={styles.descViewText}>12</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.imageViewProfile}>
                <TouchableOpacity>
                    <Image style={styles.imageProfile} source={require('../../assets/profile.png')}></Image>
                </TouchableOpacity>
            </View>
            
        </View>
        <View style={{borderWidth: 1}}></View>

        <View style={styles.centerView}>
            <View style={styles.selectView}>
                <TouchableOpacity onPress={() => handleTabClick('places')}>
                <Text style={[styles.selectText, selectedTab === 'places' && styles.selectedTab]}>Place</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.selectView}>
                <TouchableOpacity onPress={() => handleTabClick('placeList')}>
                <Text style={[styles.selectText, selectedTab === 'placeList' && styles.selectedTab]}>Place List</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.selectView}>
                <TouchableOpacity onPress={() => handleTabClick('share')}>
                <Text style={[styles.selectText, selectedTab === 'share' && styles.selectedTab]}>Share</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={{borderWidth: 1}}></View>

        <View style={styles.bottomView}>
                <View style={styles.scrollbottomView}>
                    {selectedTab === 'places' && (
                    <View style={styles.placesView}>
                        <ScrollView >
                            <ProfilePlaces userId={userId}/>
                        </ScrollView>
                    </View>
                )}
                    {selectedTab === 'placeList' && (
                    <View style={styles.placesListView}>
                        <ScrollView>
                            <ProfilePlaceList userId={userId}/>
                        </ScrollView>
                    </View>
                )}
                    {selectedTab === 'share' && (
                    <View style={styles.sharePlacesListView}>
                        <ScrollView>
                            <ProfileShare userId={userId}/>
                        </ScrollView>
                    </View>
                )}
                </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainView: {
        margin: 5,
        padding: 5,
        flexDirection:'column',
        height:'99%',
    },
    topView:{
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    imageViewProfile:{
        width: 100, 
        height: 100, 
        borderRadius: 20, 
        overflow: 'hidden',
        margin: 10,
        },

    imageProfile:{
        height: '100%',
        width: '100%',
    },
    userNameView:{
        margin: 5,
        flex:1,
    },
    nameText:{
        fontSize: 17,
        paddingLeft: 5
    },
    descText:{
        fontSize:15,
        paddingLeft: 5,
    },
    descView:{
        flexDirection:'row',
        marginTop: 10,
        justifyContent:'center'
    },
    placeView:{
        marginHorizontal: 20,
    },
    descViewText:{
        fontSize: 15,
        textAlign: 'center',

    },
    centerView:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 3
    },
    selectView:{
       marginHorizontal: 10,
       borderWidth: 1,
       flex:1
    },
    selectText:{
        textAlign: 'center',
        fontSize: 15
    },
    bottomView:{
        borderWidth: 2,
        width:'100%',
        flex:1,
        marginTop:5,
        borderRadius: 5,
    },
    
    scrollbottomView:{
    },
    placesView:{
    },
    placesListView:{
        backgroundColor:'pink'
    },
    selectedTab: {
        width: '100%',
        borderWidth: 1,
      },
})