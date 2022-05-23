import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

import { Colors, Sizes, Fonts } from "../styles/theme"

const Button = ( {name, img} ) => {
    return (
        <TouchableOpacity>
            <View style={styles.buttonStyle}>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    light: {
        color: Colors.blue,
        fontSize: Fonts.small,
    },
    
    buttonStyle: {
        backgroundColor: 'white',
        borderRadius: 100,
        height: 50,
        width: 50,
    }
    
})

export default Button