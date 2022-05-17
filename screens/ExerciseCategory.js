import { View, Text, Appearance, StyleSheet } from 'react-native'
import React from 'react'

import { Colors } from '../styles/theme'
import CategoryCard from '../components/CategoryCard';

const colorScheme = Appearance.getColorScheme();

const ExerciseCategory = ( {data} ) => {
  return (
    <View>
      <View >
        <CategoryCard category={data} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },

  white: {
    color: 'white',
  },

  black: {
    color: 'black'
  }
});

export default ExerciseCategory