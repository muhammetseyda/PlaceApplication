import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React, {useState, useEffect} from 'react'
import firebase from "firebase/compat/app";
import "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import RNFS from 'react-native-fs';


// Firebase yapılandırma bilgilerini ekleyin
const firebaseConfig = {
  apiKey: 'AIzaSyDYLO3KZoN12DfoZgHKCkB-08BNev26saY',
  authDomain: 'placeappv01.firebaseapp.com',
  projectId: 'placeappv01',
  storageBucket: 'placeappv01.appspot.com',
  messagingSenderId: '791203202625',
  appId: '1:791203202625:web:f557177b62847e15bea8c0',
  measurementId: 'G-TWDE45GZGK'
};

// Firebase uygulamasını başlatın
firebase.initializeApp(firebaseConfig);  

// Firebase Storage referansı
const storage = firebase.storage();

// Örnek: Belirli bir dosyayı almak
// const fileRef = storage.ref("images/1.png");

// fileRef.getDownloadURL()
//   .then((url) => {
//     // Veri başarıyla alındı, URL'i kullanabilirsiniz
//     console.log("Dosya URL'si:", url);
//   })
//   .catch((error) => {
//     console.error("Hata oluştu:", error);
//   });

// Örnek: Belirli bir klasördeki dosyaları listeleme
// const folderRef = storage.ref("images");

// folderRef.listAll()
//   .then((result) => {
//     result.items.forEach((itemRef) => {
//       console.log("Dosya adı:", itemRef.name);
//     });
//   })
//   .catch((error) => {
//     console.error("Hata oluştu:", error);
//   });
export default function DenemeScreen() {
  const [imageUrls, setImageUrls] = useState([]);
  const [imageUploadProgress, setImageUploadProgress] = useState(0);

  // Resim URL'lerini almak için kullanılabilecek bir fonksiyon
  const fetchImageUrls = async () => {
    try {
      const imageNames = ["1", "3", "4"];
      const urls = await Promise.all(
        imageNames.map(async (imageName) => {
          const fileRef = storage.ref(`images/${imageName}.png`); // Resim dosya adını ekleyin
          return await fileRef.getDownloadURL();
        })
      );
      setImageUrls(urls); // Resim URL'lerini state'e ekleyin
    } catch (error) {
      console.error("Resim URL'lerini alma hatası:", error);
    }
  };

  const uploadImage = async () => {
    try {
      const fileUri = 'file:///storage/emulated/0/Android/data/com.place/files/Pictures/5.png';  // Yüklemek istediğiniz resmin yerel dosya yolu
      const imageName = '5.png'; // Kaydedilecek resmin ismi
      console.log(fileUri);
      const response = await fetch(fileUri);
      const blob = await response.blob();
      const fileRef = storage.ref(`images/${imageName}`);

      const uploadTask = fileRef.put(blob);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageUploadProgress(progress);
        },
        (error) => {
          console.error('Resim yükleme hatası:', error);
        },
        () => {
          // Yükleme tamamlandıktan sonra işlenecek kod buraya gelebilir.
          console.log('Resim başarıyla yüklendi.');
          fetchImageUrls(); // Resimlerin güncel listesini almak için
        }
      );
    } catch (error) {
      console.error('Resim yükleme hatası:', error);
    }
  };

  useEffect(() => {
    fetchImageUrls();
  }, []);

  return (
    <View>
      <Text>DenemeScreen</Text>
      {imageUrls.map((imageUrl, index) => (
        <View key={index}>
          <Image style={{ width: 100, height: 100 }} source={{ uri: imageUrl }} />
        </View>
      ))}
    <Button title="Resim Yükle" onPress={uploadImage} />
      <Text>Yükleme %{imageUploadProgress.toFixed(2)}</Text>
      
    </View>
  );
}


const styles = StyleSheet.create({})







































// import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
// import React, {useState} from 'react'
// import { useNavigation } from '@react-navigation/native';   
// import Information from '../components/molecules/Information';

// export default function DenemeScreen({ title, desc, placeId,  onInformationPress }) {
//     const navigation = useNavigation();
//     const [isExpanded, setisExpanded] = useState(false);
//     const toggleExpand = () => {
//         setisExpanded(!isExpanded);
//       };
//     console.log("Information.js" + placeId);
//     return (
//         <TouchableOpacity onPress={toggleExpand}>
//       <View style={styles.container}>
//         <View style={styles.textContainer}>
//           <Text style={styles.title}>Title</Text>
//           <Text style={styles.desc}>Description</Text>
//           {isExpanded && 
//           <ScrollView style={{height: 200, backgroundColor:'red', marginBottom: 10,}}>
//           <TouchableOpacity key={placeId} onPress={() => navigation.navigate('Place Detail', { placeId: placeId })}>
//           <View style={styles.container}>
//               <Image style={styles.imageStyle} source={require('../assets/no.png')}/>
//               <View style={styles.textContainer}>
//                   <Text style={styles.title}>title</Text>
//                   <Text style={styles.desc}>description ınformation</Text>
//                   <Text>ıd</Text>
//               </View>
//           </View>
//     </TouchableOpacity>
//     <TouchableOpacity key={placeId} onPress={() => navigation.navigate('Place Detail', { placeId: placeId })}>
//           <View style={styles.container}>
//               <Image style={styles.imageStyle} />
//               <View style={styles.textContainer}>
//                   <Text style={styles.title}>title</Text>
//                   <Text style={styles.desc}>description ınformation</Text>
//                   <Text>ıd</Text>
//               </View>
//           </View>
//     </TouchableOpacity>

//     <TouchableOpacity key={placeId} onPress={() => navigation.navigate('Place Detail', { placeId: placeId })}>
//           <View style={styles.container}>
//               <Image style={styles.imageStyle} />
//               <View style={styles.textContainer}>
//                   <Text style={styles.title}>title</Text>
//                   <Text style={styles.desc}>description ınformation</Text>
//                   <Text>ıd</Text>
//               </View>
//           </View>
//     </TouchableOpacity>
//     </ScrollView>
//           }
//         </View>
//         {!isExpanded &&
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity
//             mode="contained"
//             onPress={() => navigation.navigate('Places')} // Buradaki sayfa adını PlaceScreen olarak değiştirdim
//             style={styles.detailButton}
//           ><Text>Detail</Text>
//           </TouchableOpacity>
//         </View>}
//       </View>
      
//     </TouchableOpacity>
//   )
// }

// const styles = StyleSheet.create({
//     container: {
//       flexDirection: 'row', // İçeriği yatay olarak düzenlemek için
//       alignItems: 'center', // İçeriği dikey olarak ortalamak için
//       backgroundColor: 'white',
//       borderWidth: 2,
//       borderRadius: 10,
//       marginHorizontal: 10,
//       marginVertical: 5,
//     },
//     imageStyle: {
//       width: 70, // Fotoğrafın genişliği
//       height: 70, // Fotoğrafın yüksekliği
//       borderRadius: 7,
//     },
//     textContainer: {
//       flex: 1, // Metinlerin mevcut alanın tamamını kaplamasını sağlar
//       marginLeft: 10, // Metinler ile fotoğraf arasındaki boşluk
//       padding: 5,
//       backgroundColor : 'white',
//     },
//     title: {
//       fontSize: 16,
//       fontWeight: 'bold', // Başlık metni kalın yapar
//     },
//     desc: {
//       fontSize: 12,
//       color: 'red', // Açıklama metni gri renkte
//     },
//     buttonContainer: {
//       },
//   });
