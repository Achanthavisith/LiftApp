import { View, SafeAreaView, ActivityIndicator, FlatList } from 'react-native'
import axios from "axios"
import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Colors } from "../styles/theme"
import VideoCard from '../components/VideoCard'
import Header from '../components/Header';
import {YT_KEY} from '@env'

const ExercisePage = ( {route} ) => {

  const [videoList, setVideoList] = useState([]);
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    const getVideoList = async () => {
        await axios.get('https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=How%to%'+route.params.exerciseData.name+'%'+route.params.dataName+'%exercise&key='+ YT_KEY,
        {headers: {
          'Content-Type': 'application/json'
          }}).then((response) => {
            AsyncStorage.setItem('videos',JSON.stringify(response.data.items));
            setVideoList(response.data.items)
            isLoading(false);
            }).catch((err) => {
              AsyncStorage.getItem('videos').then((value) =>{
                setVideoList(value);
              })
              console.log(err + " videoList")
            });
  }
  getVideoList();
  }, []);

  

  return (
    <SafeAreaView style={{backgroundColor: Colors.wood}}>
      <View style={{
        backgroundColor: Colors.wood,
        height: '100%'
      }}>
        {loading ? 
            <>
              <View style={{ 
                    flex:1,
                    alignItems: 'center',
                    justifyContent: 'center', 
                  }}>
                    <ActivityIndicator size="large" color={Colors.blue} style={{ 
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '80%'
                  }}/>
              </View> 
          </>
          :
          <>
            <FlatList
                data={videoList}
                renderItem={({item}) => <VideoCard data ={item}/>}
                keyExtractor={(item) => item.id.videoId}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={<Header />}
                stickyHeaderIndices={[0]}
            />
          </>
        }
      </View>
    </SafeAreaView>
  )
}

export default ExercisePage