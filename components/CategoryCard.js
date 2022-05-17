import { View, Text, Appearance, TouchableOpacity } from 'react-native'
import React from 'react'

import { Colors, Sizes } from "../styles/theme"

const colorScheme = Appearance.getColorScheme();

const CategoryCard = ( {category} ) => {
    return (
        <TouchableOpacity style={{
            margin: Sizes.medium,
            borderRadius: Sizes.small,
        }} >

            <Text style={colorScheme === 'dark' ? 
                {color: Colors.white} : {color: Colors.black}}
            >
                {category.name}</Text>
        </TouchableOpacity>
    )
}

export default CategoryCard