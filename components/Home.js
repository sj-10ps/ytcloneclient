import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View ,Text,FlatList,Image, Pressable} from 'react-native';

import IP from '../IP';
import { useNavigation } from 'expo-router';

const Home = () => {
    const [data,setdata]=useState([])
    const navigation=useNavigation()
    useEffect(()=>{
       async function fetchdata(){
            const response=await axios.get(`${IP}/getdata`)
            setdata(response.data.data)
    
        }
        fetchdata()  
   
    },[])
     
    const renderItem=({item})=>{

        return(
        <Pressable style={styles.videocontainer} onPress={()=>navigation.navigate('playvideo',{videoId:item.videoId,data:data})}>
          
         <Image source={{uri:item.thumbnail}} style={styles.image} resizeMode='contain'></Image>
         <Text style={styles.title}>{item.title}</Text>
         <Text style={styles.channel}>{item.channel}</Text>
        </Pressable>
        )
    }

       
    return (
        <View style={styles.container}>
         
            <Text style={styles.header}>VIDEOMATE</Text>
      
         <FlatList data={data} renderItem={renderItem} keyExtractor={item=>item.videoId} contentContainerStyle={{paddingBottom:10}} />
        </View>
    );
}

const styles = StyleSheet.create({
     container: {
    flex: 1,
    padding: 10,
    backgroundColor:'black'
  },
  header:{
    color:'white',
    textAlign:'center',
    marginTop:20,
    fontWeight:900,
    fontSize:30
  },

    videocontainer:{
        flexDirection:'column',
        backgroundColor:'#090909ff',
        padding:5,
        marginBottom: 10, 
    },
    title:{
        color:'white',
        fontWeight:500

    },
    channel:{
        color:'grey',
      },
    image:{
        height:250,
        
      },
      
    
})

export default Home;
