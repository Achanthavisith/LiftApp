import { View, Text, SafeAreaView, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CategoryCard from '../components/CategoryCard';
import Header from './Header'

import {API_KEY} from '@env'

const Home = () => {
    const [exerciseCategory, setExerciseCategory] = useState([]);
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
      const getExerciseCategory = async () => {
        await axios.get('https://wger.de/api/v2/exercisecategory/',
        {headers: {
            'Content-Type': 'application/json',
            'Authorization': API_KEY
        }}).then((response) => {
            setExerciseCategory(response.data.results);
          });   
    }
    getExerciseCategory();
    }, []);

    console.log(exerciseCategory);

    /*
    useEffect(() => {
      const getExercises = async () => {
        await axios.get('https://wger.de/api/v2/exercise/?category=12&language=2&limit=100',
          {headers: {
            'Content-Type': 'application/json',
            'Authorization': API_KEY
            }}).then((response) => {
              setExercises(response.data.results);
              });   
    }
    getExercises();
    }, []);

    console.log(exercises)
    */

  
    
  return (
    <SafeAreaView>
          <View>
            <FlatList
              data={exerciseCategory}
              renderItem={({item}) => <CategoryCard data={item} />}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={<Header />}
            />
          </View>
    </SafeAreaView>
  )
}


export default Home