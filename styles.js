import { StyleSheet } from 'react-native';




export  const styles = StyleSheet.create({
  innerContainer: {
    flex: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    width: 350,
    top:120,
    shadowColor:'black',
    shadowRadius: 8,
   shadowOpacity: 0.4,
   shadowOffset: {
    

   }
    
  },
    containerLiked: {
      flex: 1,
      backgroundColor: 'pink',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      
      
    },
  
    container: {
      flex: 1,
      backgroundColor: 'pink',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      
    },
    button: {
      backgroundColor: 'red',
      borderRadius: 5,
     width: 75,
     height: 35,
     alignItems: 'center',
     justifyContent: 'center',
    marginHorizontal:10
       
      },
    buttonText: {
      fontSize: 20,
      color: '#fff',
      fontWeight: 'bold',
    }, 
    kartinka: {
      flex:0.5,
  width:300,
  height: 250,
  
    },
    buttons: {
      flex:1,
  flexDirection: 'row',
  top: 150
  
    },
    LikedPhotos:{
  fontSize: 30,
  top: 60
  
    },
    buttonShow: {
      backgroundColor: 'blue',
      borderRadius: 5,
     width: 150,
     height: 35,
     alignItems: 'center',
     justifyContent: 'center',
       
    }, 
  });
  