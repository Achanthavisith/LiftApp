import { View, Text, SafeAreaView, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ExerciseCategory from './ExerciseCategory'
import Header from './Header'

const Home = () => {
    const [exerciseCategory, setExerciseCategory] = useState([]);

    const getExerciseCategory = async () => {
        await axios.get('https://wger.de/api/v2/exercisecategory/',
        {headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token a4aee96886c81cd3b733ebea961631c3f1a24506'
        }}).then((response) => {
            setExerciseCategory(response.data.results);
          });   
    }

    useEffect(() => {
      getExerciseCategory();
    }, []);

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