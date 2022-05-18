import { View, Text, Appearance, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'

import { Colors, Sizes } from "../styles/theme"

const colorScheme = Appearance.getColorScheme();

const CategoryCard = ( {data} ) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={{
            margin: Sizes.medium,
            borderRadius: Sizes.small,  
        }} 
            onPress={()=> navigation.navigate("Exercise", {categoryId: data.id}, console.log(data.id))}
        >
            <Text style={colorScheme === 'dark' ? 
                {color: Colors.white} : {color: Colors.black}}
            >
                {data.name}</Text>
        </TouchableOpacity>
    )
}

export default CategoryCard