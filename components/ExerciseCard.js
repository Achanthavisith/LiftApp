import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { Colors, Sizes, Fonts, Font } from "../styles/theme"
import { useNavigation } from '@react-navigation/native';
import OptionsMenu from "react-native-option-menu";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native'
import { useState } from 'react'

import addButton from "../assets/add.png"
import MinusButton from "../assets/minus.png"


const ExerciseCard = ( { data, catName, onRefresh, day } ) => {

    const navigation = useNavigation();

    const route = useRoute();

    const [weight, setWeight] = useState('');
    const [set, setSet] = useState('');

    const alert = () => {
        Alert.alert(
            "Oops..",
            "Already in the workout day",
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
    }
    
    const addSunday = async() => {
        let values = await AsyncStorage.getItem('Sunday')
    
        if(values===null) {
            //init array 
            let JsonArray = [];
            let JsonObject = data;
            //push the data
            JsonArray.push(JsonObject);
            //set the storage
            AsyncStorage.setItem('Sunday', JSON.stringify(JsonArray));
        } else {
            //get the existing storage array
            //parse it
            let array = JSON.parse(values);
            //check if workout is in day
            let result = array.map(e => e.id).includes(data.id); 
            if(result) {
                alert();
                console.log('already in workouts')
            } else {
               //push the new workout
            array.push(data)
            //set the new storage
            AsyncStorage.setItem('Sunday', JSON.stringify(array));
            }
        }
    }

    const addMonday = async() => {
        let values = await AsyncStorage.getItem('Monday')
        
        if(values===null) {
            let JsonArray = [];
            let JsonObject = data;
            
            JsonArray.push(JsonObject);
            
            AsyncStorage.setItem('Monday', JSON.stringify(JsonArray));
        } else {
            let array = JSON.parse(values);
            let result = array.map(e => e.id).includes(data.id); 

            if(result) {
                alert();
                console.log('already in workouts')
            } else {
                array.push(data)
                AsyncStorage.setItem('Monday', JSON.stringify(array));
            }
        }
    }

    const addTuesday = async() =>{
        let values = await AsyncStorage.getItem('Tuesday')
        
        if(values===null) {
            let JsonArray = [];
            let JsonObject = data;
            
            JsonArray.push(JsonObject);
            
            AsyncStorage.setItem('Tuesday', JSON.stringify(JsonArray));
        } else {
            let array = JSON.parse(values);
            let result = array.map(e => e.id).includes(data.id); 

                if(result) {
                    alert();
                    console.log('already in workouts')
                } else {
                    array.push(data)
                    AsyncStorage.setItem('Tuesday', JSON.stringify(array));
                }
        }
    }

    const addWednesday = async() =>{
        let values = await AsyncStorage.getItem('Tuesday')
        
        if(values===null) {
            let JsonArray = [];
            let JsonObject = data;

            JsonArray.push(JsonObject);

            AsyncStorage.setItem('Wednesday', JSON.stringify(JsonArray));
        } else {
            let array = JSON.parse(values);
            let result = array.map(e => e.id).includes(data.id); 

                if(result) {
                    alert();
                    console.log('already in workouts')
                } else {
                    array.push(data)
                    AsyncStorage.setItem('Wednesday', JSON.stringify(array));
                }
        }
    }

    const addThursday = async() => {
        let values = await AsyncStorage.getItem('Thursday')
        
        if(values===null) {
            let JsonArray = [];
            let JsonObject = data;

            JsonArray.push(JsonObject);

            AsyncStorage.setItem('Thursday', JSON.stringify(JsonArray));
        } else {
            let array = JSON.parse(values);
            let result = array.map(e => e.id).includes(data.id); 

                if(result) {
                    alert();
                    console.log('already in workouts')
                } else {
                    array.push(data)
                    AsyncStorage.setItem('Thursday', JSON.stringify(array));
                }
    }
    }

    const addFriday = async() => {
        let values = await AsyncStorage.getItem('Friday')
        
        if(values===null) {
            let JsonArray = [];
            let JsonObject = data;
            
            JsonArray.push(JsonObject);
            
            AsyncStorage.setItem('Friday', JSON.stringify(JsonArray));
        } else {
            let array = JSON.parse(values);
            let result = array.map(e => e.id).includes(data.id); 

                if(result) {
                    alert();
                    console.log('already in workouts')
                } else {
                    array.push(data)
                    AsyncStorage.setItem('Friday', JSON.stringify(array));
                }
        }
    }

    const addSaturday = async() => {
        let values = await AsyncStorage.getItem('Saturday')
        
        if(values===null) {
            let JsonArray = [];
            let JsonObject = data;
            
            JsonArray.push(JsonObject);

            AsyncStorage.setItem('Saturday', JSON.stringify(JsonArray));
        } else {
            let array = JSON.parse(values);
            let result = array.map(e => e.id).includes(data.id); 
            
                if(result) {
                    alert();
                    console.log('already in workouts')
                } else {
                    array.push(data)
                    AsyncStorage.setItem('Saturday', JSON.stringify(array));
                }
        }
    }

    const deleteWorkout = async() => {
        let values = await AsyncStorage.getItem(day);
        let array = JSON.parse(values);
        let remove = array.filter((values) => values.id !== data.id)

        AsyncStorage.setItem(day, JSON.stringify(remove));
        onRefresh();
    }

    const addWeight = () => {
        Alert.prompt(
            "Enter Weight",
            "Lbs?, Kg?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: (e => setWeight(e))
                }
            ],
            );
    }; 

    const addSet = () => {
        Alert.prompt(
            "Enter Set",
            "4x10, 5x5",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: (e => setSet(e))
                }
            ],
            );
    }

    
    return (
        <View>
            {route.name ==='Workouts' ? 
                    <>
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
                                        <Text style={{textAlign: 'center', flexWrap: 'wrap', margin: 5}}>
                                            Weight: {weight}    
                                        </Text>
                                        <Text style={{textAlign: 'center', flexWrap: 'wrap'}}>
                                            Set: {set}
                                        </Text>
                                    </View>

                                    <View style={{position: 'absolute', bottom: 45, right: 10,}}>
                                    <OptionsMenu
                                        button={MinusButton}
                                        buttonStyle={{ width: 35, height: 30, marginRight: 7.5, resizeMode: "contain" }}
                                        destructiveIndex={2}
                                        options={['Weight','Sets', 'Delete', "Cancel"]}
                                        actions={[addWeight,addSet,deleteWorkout]}
                                    />
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </> 
                : 
                    <>
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

                                    <View style={{position: 'absolute', bottom: 45, right: 10,}}>
                                    <OptionsMenu
                                        button={addButton}
                                        buttonStyle={{ width: 35, height: 30, marginRight: 7.5, resizeMode: "contain" }}
                                        destructiveIndex={7}
                                        options={["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Cancel"]}
                                        actions={[addSunday, addMonday, addTuesday, addWednesday, addThursday, addFriday, addSaturday]}
                                    />
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </>
                }
        </View>
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
