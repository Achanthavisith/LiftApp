import { View, Text, TouchableOpacity, StyleSheet  } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'

import { Colors, Sizes, Fonts } from "../styles/theme"

const CategoryCard = ( {data} ) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            onPress={()=> 
                navigation.navigate(
                    "Exercises", 
                    {categoryId: data.id})
            }
        >
            <View style={styles.exerciseProp}>
                <View>

                </View>
        
                <Text style={styles.light}>
                    {data.name}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    light: {
        textAlign: 'center',
        color: 'blue',
        fontSize: Fonts.small 
    }, 

    exerciseProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        backgroundColor: Colors.almond,
        padding: Sizes.large, 
        margin : Sizes.large,
        height: 80,
        justifyContent: 'center',
        borderRadius: Sizes.large, 
    },
})

export default CategoryCard