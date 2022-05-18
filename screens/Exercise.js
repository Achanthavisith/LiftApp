import { View, Text, FlatList, SafeAreaView, Appearance } from 'react-native'
import { useState, useEffect } from 'react';
import axios from 'axios';

import {API_KEY} from '@env'

import { Colors, Sizes } from "../styles/theme"

const Exercise = ( {route, navigation} ) => {

  const [exercises, setExercises] = useState([]);
  const colorScheme = Appearance.getColorScheme();

  console.log(route.params.categoryId)
    
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

    console.log(exercises)


  return (
    <SafeAreaView>
      <View>
      <FlatList
              data={exercises}
              renderItem={({item}) => <Text style={colorScheme === 'dark' ? 
              {color: Colors.white} : {color: Colors.black}}
              >
                {item.name}
            </Text>}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
      />
      </View>
    </SafeAreaView>
  )
}

export default Exercise