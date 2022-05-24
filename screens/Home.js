import { View, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../components/Header';
import CategoryCard from '../components/CategoryCard';
import { Colors, Sizes } from "../styles/theme"

import {API_KEY} from '@env'

const Home = () => {
    const [exerciseCategory, setExerciseCategory] = useState([]);
    const [loading, isLoading] = useState(true);

    useEffect(() => {
      const getExerciseCategory = async () => {
        await axios.get('https://wger.de/api/v2/exercisecategory/',
        {headers: {
            'Content-Type': 'application/json',
            'Authorization': API_KEY
        }}).then((response) => {
            setExerciseCategory(response.data.results);
            isLoading(false);
          }).catch((err) => {
            console.log(err)
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
              {loading ? 
                  <View style={{ 
                    flex: 1, 
                    alignItems: 'center',
                    justifyContent: 'center', 
                  }}>
                    <ActivityIndicator size="large" color={Colors.blue}/>
                  </View> 
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