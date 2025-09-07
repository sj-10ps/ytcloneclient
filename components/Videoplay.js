import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View ,FlatList,Pressable,Text,Image} from 'react-native';

import YoutubeIframe from 'react-native-youtube-iframe';
  import { useNavigation } from 'expo-router';

const Videoplay = () => {
    const route=useRoute()
    const {videoId,data}=route.params
      const navigation=useNavigation()
 
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
        <View style={{backgroundColor:'black',flex:1}}>
        <YoutubeIframe
        height={230}
        play={true}
        videoId={videoId}
        />
      <FlatList data={data.filter(i=>i.videoId!==videoId)} renderItem={renderItem} keyExtractor={item=>item.videoId} contentContainerStyle={{paddingBottom:10}} />
        </View>
    );
}

const styles = StyleSheet.create({
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

export default Videoplay;
