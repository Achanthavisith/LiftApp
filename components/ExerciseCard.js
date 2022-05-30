import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Colors, Sizes, Fonts, Font } from "../styles/theme"
import { useNavigation } from '@react-navigation/native';

import Button from "../components/Button"
import addButton from "../assets/add.png"


const ExerciseCard = ( {data, equipment, catName} ) => {

    //const getListofEquipment = data.equipment.map( (requiredEquipment) => 
            //<Text key={requiredEquipment} style={{padding: Sizes.small, fontFamily: Font.light}}> | {equipment.find(el => el.id === requiredEquipment)?.name} | </Text>) 

    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            onPress={()=> 
                navigation.navigate(
                "Exercise Videos", {
                    exerciseData: data,
                    categoryName: catName
                })
                }>
            <View>
                <View style={styles.exerciseProp}>
                    <View>
                        <Text style={styles.light}>
                            {data.name}
                        </Text>
                    </View>

                    <View style={{position: 'absolute', bottom: 40, right: 8}}>
                        <Button img={addButton} />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    light: {
        textAlign: 'center',
        color: Colors.blue,
        fontSize: Fonts.extra, 
        fontFamily: Font.semiBold,
        flexWrap: 'wrap'
    }, 

    exerciseProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        backgroundColor: Colors.almond,
        padding: Sizes.large, 
        margin : Sizes.large,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Sizes.large, 
        flexDirection: 'row'
    },
})

export default ExerciseCard
