import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Colors, Sizes, Fonts, Font } from "../styles/theme"
import { useNavigation } from '@react-navigation/native';


const ExerciseCard = ( {data, equipment} ) => {

    const getListofEquipment = data.equipment.map( (requiredEquipment) => 
            <Text key={requiredEquipment} style={{padding: Sizes.small, fontFamily: Font.light}}> | {equipment.find(el => el.id === requiredEquipment)?.name} | </Text>) 

    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            onPress={()=> 
                navigation.navigate(
                "Exercise Videos", 
                {exerciseData: data})
                }>
            <View>
                <View style={styles.exerciseProp}>
                    <Text style={styles.light}>
                        {data.name}
                    </Text>
                    <View style = {{flexDirection:'row', justifyContent: 'center', flexWrap: 'wrap'} }>{getListofEquipment}</View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    light: {
        textAlign: 'center',
        color: Colors.blue,
        fontSize: Fonts.small, 
        fontFamily: Font.semiBold
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
        borderRadius: Sizes.large, 
    },
})

export default ExerciseCard
