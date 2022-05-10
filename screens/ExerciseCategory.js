import { View, Text, Appearance } from 'react-native'
import React from 'react'

import { Colors } from '../styles/theme'

const colorScheme = Appearance.getColorScheme();

const ExerciseCategory = ( {data} ) => {
  return (
    <View>
      <Text style={colorScheme === 'dark' ? 
        {color: Colors.white} : {color: Colors.black}}
      >
        {data.name}
      </Text>
    </View>
  )
}

export default ExerciseCategory