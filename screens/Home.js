import { View, SafeAreaView, FlatList, ActivityIndicator, TouchableOpacity,Text } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../components/Header';
import CategoryCard from '../components/CategoryCard';
import { Colors, Font, Fonts } from "../styles/theme"

import {API_KEY} from '@env'

const Home = () => {
    const [exerciseCategory, setExerciseCategory] = useState([]);
    const [loading, isLoading] = useState(true);

    useEffect(() => {
      const getExerciseCategory = async () => {

        while(loading){
          await axios.get('https://wger.de/api/v2/exercisecategory/',
            {headers: {
              'Content-Type': 'application/json',
              'Authorization': API_KEY,
            }}).then((response) => {
              setExerciseCategory(response.data.results);
              isLoading(false);
            }).catch((err) => {
              console.log(err + " exerciseCategory");
              isLoading(true);
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
                    alignItems: 'center',
                    justifyContent: 'center', 
                  }}>
                    <FlatList
                    ListHeaderComponent={<Header />}
                    stickyHeaderIndices={[0]}
                  />
                    <ActivityIndicator size="large" color={Colors.blue} style={{ 
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '80%'
                  }}/>
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