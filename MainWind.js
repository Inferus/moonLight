
import {Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import React, {useState, useLayoutEffect} from 'react';
import * as MediaLibrary from 'expo-media-library';
import axios from 'axios'
import {styles} from './styles'

export const MainWind = () => {
    const [Pic, setPic] = useState()
    const [LikedPhotos, setLikedPhotos] = useState(0)
    const [num, setNum] = useState(0)
    const [LikedArr, setLikedArr] = useState([])
    const [main, setMain] = useState('flex')
    const [ArrStat, setArrStat] = useState('none')
    const [I, setI] = useState(0)
    const [status, requestPermission] = MediaLibrary.usePermissions();
  // some consts for styles and elements
  //const asset = await MediaLibrary.createAssetAsync(LikedArr[I]);
  
  const savePhoto = () =>{
    requestPermission()
    MediaLibrary.getAlbumAsync("moonLight").then(res => {res != null ? MediaLibrary.addAssetsToAlbumAsync(LikedArr[I], "moonLight"):
    
      MediaLibrary.createAlbumAsync("moonLight")}
      )
    
    }
        
  const displayLiked = {
    display: ArrStat
};
  const colorStyles = {
    display: main
};
    const hideMain = () =>{
      if (LikedArr[0] == null) return 0
      
        setMain('none')
        setArrStat('flex')
      }
      
      const checkEx = (Pic) =>{
          LikedArr.push(Pic)
        setLikedArr(LikedArr)
      }
      
      const showPhoto = () =>{
        
      axios.get('https://picsum.photos/200/300').then(response =>{
        response.request.responseURL == Pic ? () => showPhoto() :
            setPic(response.request.responseURL)
            }
    ); 
      }
      const likePhoto = () =>{
        showPhoto()
        
        setLikedPhotos(LikedPhotos + 1)
        checkEx(Pic)
        setNum(num + 1)
      }
     const nextPhoto = () =>{
      if (LikedArr[I+1] == null) return 0
       setI(I+1)
     }
     const prevPhoto = () =>{
       if (LikedArr[I-1] == null) return 0
      setI(I - 1)
    }
    const goBackToMain = () =>{
      setMain('flex')
        setArrStat('none')
    }

  
     useLayoutEffect(showPhoto, []);
    return (<>
    <SafeAreaView style={[styles.containerLiked, displayLiked ]}>
    <SafeAreaView style={[styles.innerContainer, colorStyles, displayLiked]} > 
      <Image key={I} source={{uri : LikedArr[I]}} style={styles.kartinka}/>
      
     </SafeAreaView>
     <SafeAreaView style={styles.buttons}> 
     <TouchableOpacity style={styles.button}
      
        onPress={() => savePhoto()}
        >
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
      
        onPress={() => goBackToMain()}
        >
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
      
        onPress={() => prevPhoto()}
        >
        <Text style={styles.buttonText}>Prev</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
      
        onPress={() => nextPhoto()}
        >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      </SafeAreaView>
      </SafeAreaView>
        <SafeAreaView style={[styles.container, colorStyles]} > 
        <SafeAreaView style={[styles.innerContainer, colorStyles]} > 
    <Image source={{uri : Pic}} style={styles.kartinka} /> 
   
    
      
    </SafeAreaView>
    <SafeAreaView style={styles.buttons}> 
      <TouchableOpacity style={styles.button}
      
        onPress={() => showPhoto()}
        >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={() => likePhoto()}
        style={styles.button}>
        <Text style={styles.buttonText}>♥</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={() => hideMain()}
        style={styles.buttonShow}>
        <Text style={styles.buttonText}>Show</Text>
      </TouchableOpacity>
      </SafeAreaView> 
      </SafeAreaView>
      </>
    )
}
