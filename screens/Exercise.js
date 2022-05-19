import { View, Text, FlatList, SafeAreaView } from 'react-native'
import { useState, useEffect } from 'react';
import axios from 'axios';

import {API_KEY} from '@env'

import ExerciseCard from '../components/ExerciseCard';
import Header from '../components/Header';
import { Colors, Sizes } from "../styles/theme"

const Exercise = ( {route, navigation} ) => {

  const [exercises, setExercises] = useState([]);

    useEffect(() => {
      const getExercises = async () => {
        await axios.get('https://wger.de/api/v2/exercise/?category='+route.params.categoryId+'&language=2&limit=100',
          {headers: {
            'Content-Type': 'application/json',
            'Authorization': API_KEY
            }}).then((response) => {
              setExercises(response.data.results);
              });   
    }
    getExercises();
    }, []);

  return (
    <SafeAreaView style={{backgroundColor: Colors.wood}}>
      <View style={{
        backgroundColor: Colors.wood,
        height: '100%'
      }}>
      <FlatList
              data={exercises}
              renderItem={({item}) => <ExerciseCard data ={item} />}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={<Header />}
              stickyHeaderIndices={[0]}
      />
      </View>
    </SafeAreaView>
  )
}

export default Exercise