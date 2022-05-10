import { View, Text, SafeAreaView, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ExerciseCategory from './ExerciseCategory'
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

    useEffect(() => {
      const getExercises = async () => {
        await axios.get('https://wger.de/api/v2/exerciseinfo/?limit=30',
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
    
  return (
    <SafeAreaView>
          <View>
            <FlatList
              data={exerciseCategory}
              renderItem={({item}) => <ExerciseCategory data={item} />}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={<Header />}
            />
          </View>
    </SafeAreaView>
  )
}


export default Home