import { View, FlatList, SafeAreaView, ActivityIndicator, TouchableOpacity, Text } from 'react-native'
import { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {API_KEY} from '@env'

import ExerciseCard from '../components/ExerciseCard';
import Header from '../components/Header';
import { Colors, Font } from "../styles/theme"

const Exercise = ( {route} ) => {
  const [exercises, setExercises] = useState([]);
  const [loading, isLoading] = useState(true);
  const [filter, setFilter] = useState('');
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const getExercises = async() => {

      let values = await AsyncStorage.getItem('exercises');

      if(values === null){
        try{
          const exercise = await axios.get('https://wger.de/api/v2/exercise/?language=2&limit=300',
          {headers: {
            'Content-Type': 'application/json',
            'Authorization': API_KEY,
          }})
          console.log("fetched exercises");
          AsyncStorage.setItem('exercises',JSON.stringify(exercise.data.results));
          setExercises(exercise.data.results);
          isLoading(false);
        } catch (error) {
          console.log(err + "exercises");
        }
      } else {
          setExercises(JSON.parse(values));
          isLoading(false);
          console.log("set exercises from storage");

      }
    }  
  getExercises();
  }, [refresh]);

  const handleSearch = (value) => {
    if(value.length) {
      setFilter(value.toLowerCase())
    }else {
      setFilter('');
    }
  }

  return (
    <SafeAreaView style={{backgroundColor: Colors.blue}}>
      <View style={{
            backgroundColor: Colors.white,
            height: "100%"
            }}>
              {loading ? 
                <>
                  <View style={{ 
                    flex:1,
                    alignItems: 'center',
                    justifyContent: 'center', 
                  }}>
                    <ActivityIndicator size="large" color={Colors.almond} />
                    <TouchableOpacity onPress={() => setRefresh(refresh + 1)}>
                      <Text style={{color:Colors.almond, fontFamily: Font.bold, marginTop: 50}}>Still Loading?</Text>
                    </TouchableOpacity>
                  </View> 
                </> 
          :
          <>
          {route.params.muscleScreen == true ? 
            <FlatList
                data={exercises.filter(exercises => {
                  return (
                    exercises.name.toLowerCase().includes(filter))
                  })
                  .filter(exercises => {
                    return (exercises.muscles.includes(route.params.categoryId))
                  })
              }
                renderItem={({item}) => <ExerciseCard data ={item} catName={route.params.categoryName} />}
                keyExtractor={(item) => item.id} 
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={<Header onSearch={handleSearch} />}
                stickyHeaderIndices={[0]}
            />
            :
            <>
              <FlatList
                data={exercises.filter(exercises => {
                  return (
                    exercises.name.toLowerCase().includes(filter))
                  })
                  .filter(exercises => {
                    return (exercises.category === route.params.categoryId)
                  })
              }
                renderItem={({item}) => <ExerciseCard data ={item} catName={route.params.categoryName} />}
                keyExtractor={(item) => item.id} 
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={<Header onSearch={handleSearch} />}
                stickyHeaderIndices={[0]}
              />
            </>
          }
          </>
        }
      </View>
    </SafeAreaView>
  )
}

export default Exercise