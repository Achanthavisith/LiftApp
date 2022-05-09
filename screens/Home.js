import { View, Text, SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const [exerciseCategory, setExerciseCategory] = useState([]);

    const getExerciseCategory = async () => {
        await axios.get('https://wger.de/api/v2/exercisecategory/',
        {headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token a4aee96886c81cd3b733ebea961631c3f1a24506'
        }}).then((response) => {
            setExerciseCategory(response.data.results);
            console.log(response.data.results);
          });   
    }

    useEffect(() => {
      getExerciseCategory();
    }, []);

  return (
    <SafeAreaView>
        <View>
            {exerciseCategory.map((exerciseCategory) => {
              return <Text key={exerciseCategory.name}>{exerciseCategory.name}</Text>
              })
            }
        </View> 
    </SafeAreaView>
  )
}


export default Home