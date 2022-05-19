import { View, Text, Appearance, StyleSheet } from 'react-native'
import React from 'react'

import { Colors, Sizes, Fonts } from "../styles/theme"

const ExerciseCard = ( {data} ) => {

    return (
        <View>
            <View style={{
                    backgroundColor: Colors.almond,
                    padding: Sizes.large, 
                    margin : Sizes.medium,
                    height: 70,
                    justifyContent: 'center',
                    borderRadius: Sizes.large, 
                }}>
                <Text style={styles.light}
                >
                    {data.name}
                </Text>
            </View>
        </View>
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

export default ExerciseCard
