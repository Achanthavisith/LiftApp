import { View, Text, SafeAreaView, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../components/Header';
import CategoryCard from '../components/CategoryCard';
import { Colors, Sizes } from "../styles/theme"

import {API_KEY} from '@env'

const Home = () => {
    const [exerciseCategory, setExerciseCategory] = useState([]);

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

  return (
    <SafeAreaView style={{backgroundColor: Colors.wood}}>
          <View style={{
            backgroundColor: Colors.wood,
            height: "100%"
            }}>
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