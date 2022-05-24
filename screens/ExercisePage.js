import { View, SafeAreaView, ActivityIndicator, FlatList } from 'react-native'
import axios from "axios"
import { useState, useEffect } from 'react'

import { Colors } from "../styles/theme"
import VideoCard from '../components/VideoCard'
import Header from '../components/Header';
import {YT_KEY} from '@env'

const ExercisePage = ( {route} ) => {

  const [videoList, setVideoList] = useState([]);
  const [loading, isLoading] = useState(false);

  useEffect(() => {
    const getVideoList = async () => {
      await axios.get('https://youtube.googleapis.com/youtube/v3/search?part=snippet&q='+route.params.exerciseData.name+'workouts&key='+ YT_KEY,
        {headers: {
          'Content-Type': 'application/json'
          }}).then((response) => {
            setVideoList(response.data.items)
            isLoading(false);
            }).catch((err) => {
              console.log(err)
            });   
  }

  getVideoList();
  }, []);

  console.log(videoList);

  return (
    <SafeAreaView style={{backgroundColor: Colors.wood}}>
      <View style={{
        backgroundColor: Colors.wood,
        height: '100%'
      }}>
        {loading ? 
          <View style={{
              flex: 1, 
              alignItems: 'center',
              justifyContent: 'center', }}
          >
            <ActivityIndicator size="large" color={Colors.blue}/>
          </View> 
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