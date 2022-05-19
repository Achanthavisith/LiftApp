import { View, Text, TouchableOpacity, StyleSheet  } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'

import { Colors, Sizes, Fonts } from "../styles/theme"

const CategoryCard = ( {data} ) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={{
            margin: Sizes.medium,
            borderRadius: Sizes.small,  
        }} 
            onPress={()=> 
                navigation.navigate(
                    "Exercises", 
                    {categoryId: data.id})
            }
        >
            <Text style={styles.light}>
                {data.name}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    light: {
        textAlign: 'center',
        color: 'blue',
        fontSize: Fonts.small 
    }, 

    dark: {
        textAlign: 'center',
        color: 'blue',
        fontSize: Fonts.small 
    }
})

export default CategoryCard