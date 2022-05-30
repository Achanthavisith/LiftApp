import { View, SafeAreaView, FlatList, ActivityIndicator, Text } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../components/Header';
import CategoryCard from '../components/CategoryCard';
import { Colors } from "../styles/theme"
import AsyncStorage from '@react-native-async-storage/async-storage'

import {API_KEY} from '@env'

const Home = () => {
    const [exerciseCategory, setExerciseCategory] = useState([]);
    const [loading, isLoading] = useState(true);

    useEffect(() => {
      const getExerciseCategory = () => {
        AsyncStorage.getItem('categories').then((value) =>{
          setExerciseCategory(JSON.parse(value));
          isLoading(false);
        })
        
        if(exerciseCategory.length===0) {
          axios.get('https://wger.de/api/v2/exercisecategory/',
            {headers: {
              'Content-Type': 'application/json',
              'Authorization': API_KEY,
            }}).then((response) => {
              AsyncStorage.setItem('categories',JSON.stringify(response.data.results));
                setExerciseCategory(response.data.results);
              isLoading(false);
            }).catch((err) => {
              console.log(err + " home");
            });
          }
        }  
    getExerciseCategory();
    }, []);

  return (
    <SafeAreaView style={{backgroundColor: Colors.wood}}>
          <View style={{
            backgroundColor: Colors.wood,
            height: "100%"
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
                  <Text>Still Loading?</Text>
                  </View> 
                </>
                : 
                  <FlatList
                    data={exerciseCategory}
                    renderItem={({item}) => <CategoryCard data={item} />}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={<Header />}
                    stickyHeaderIndices={[0]}
                  />
              }
          </View>
    </SafeAreaView>
  )
}


export default Home