import { View, Text } from 'react-native'
import React from 'react'
import { Appearance } from 'react-native';

import { Colors } from '../styles/theme'

const colorScheme = Appearance.getColorScheme();

const Header = () => {
  return (
    <View>
      <Text style={colorScheme === 'dark' ? 
        {color: Colors.white} : {color: Colors.black}}
      >
        Header
      </Text>
    </View>
  )
}

export default Header