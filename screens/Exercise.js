import { View, FlatList, SafeAreaView, ActivityIndicator } from 'react-native'
import { useState, useEffect } from 'react';
import axios from 'axios';

import {API_KEY} from '@env'

import ExerciseCard from '../components/ExerciseCard';
import Header from '../components/Header';
import { Colors } from "../styles/theme"

const Exercise = ( {route} ) => {

  const [exercises, setExercises] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const [loading, isLoading] = useState(true);

  const [filter, setFilter] = useState('');

  const handleSearch = (value) => {
    if(value.length) {
      setFilter(value.toLowerCase())
    }else {
      setFilter('');
    }
  }

    useEffect(() => {
      const getExercises = async () => {

        while(loading) {
          await axios.get('https://wger.de/api/v2/exercise/?category='+route.params.categoryId+'&language=2&limit=60/',
          {headers: {
            'Content-Type': 'application/json',
            'Authorization': API_KEY,
            }}).then((response) => {
              setExercises(response.data.results);
              isLoading(false);
            }).catch((err) => {
              console.log(err + " exercises");
              isLoading(true);
            })
        }   
      }

    const getEquipment = async () => {

      while(loading) {
        await axios.get('https://wger.de/api/v2/equipment/',
        {headers: {
          'Content-Type': 'application/json',
          'Authorization': API_KEY,
          }}).then((response) => {
            setEquipment(response.data.results);
            isLoading(false);
          }).catch((err) => {
            console.log(err);
            isLoading(true);
          });  
      }
  }

    getEquipment();
    getExercises();
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
                    style={{width: '100%'}}
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
                data={exercises.filter(exercises => {
                  return (
                    exercises.name.toLowerCase().includes(filter))
                  })}
                renderItem={({item}) => <ExerciseCard data ={item} equipment={equipment} catName={route.params.categoryName}/>}
                keyExtractor={(item) => item.id} 
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={<Header onSearch={handleSearch} />}
                stickyHeaderIndices={[0]}
          />
        }
      </View>
    </SafeAreaView>
  )
}

export default Exercise