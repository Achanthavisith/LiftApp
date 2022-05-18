import { View, Text, FlatList, SafeAreaView, Appearance } from 'react-native'
import { useState, useEffect } from 'react';
import axios from 'axios';

import {API_KEY} from '@env'

import { Colors, Sizes } from "../styles/theme"

const Exercise = ( { categoryId } ) => {
  
  console.log(categoryId);

  const [exercises, setExercises] = useState([]);
  const colorScheme = Appearance.getColorScheme();

    /*
    useEffect(() => {
      const getExercises = async () => {
        await axios.get('https://wger.de/api/v2/exercise/?category='+category+'&language=2&limit=100',
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
            <Text style={colorScheme === 'dark' ? 
              {color: Colors.white} : {color: Colors.black}}
              >
                Exercise
            </Text>
      </View>
    </SafeAreaView>
  )
}

export default Exercise