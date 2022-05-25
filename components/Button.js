import { View,TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

import { Colors, Sizes, Fonts } from "../styles/theme"

const Button = ( {name, img, onPress} ) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.buttonStyle}>
                <Image
                    source={img}
                    resizeMode='contain'
                    style={{ width: 40, height: 40, marginLeft: Sizes.extraLarge, marginRight: 40}}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    light: {
        color: Colors.blue,
        fontSize: Fonts.small,
    },
})

export default Button