import { View, Text, SafeAreaView, StyleSheet, ActivityIndicator, FlatList, TextInput } from 'react-native';
import { useState, useEffect } from 'react';

import { Colors, Font, Sizes } from "../styles/theme";
import ExerciseCard from '../components/ExerciseCard';
import Header from '../components/Header';

const Workouts = () => {
    const [loading, isLoading] = useState(false);
    const [workouts, setWorkouts] = useState([]);

    return (
        <SafeAreaView style={{backgroundColor: Colors.wood}}>
            <View style={{
            backgroundColor: Colors.wood,
            height: "100%"
            }}>
                {loading ? 
                    <>
                        <View style={{ 
                            flex:1,
                            alignItems: 'center',
                            justifyContent: 'center', 
                        }}>
                        <ActivityIndicator size="large" color={Colors.blue} style={{ 
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '80%'
                        }}/>
                        </View> 
                    </>
                :   
                    <>
                        <FlatList
                            data={workouts}
                            renderItem={({item}) => <ExerciseCard data={item} />}
                            keyExtractor={(item) => item.id}
                            showsVerticalScrollIndicator={false}
                            ListHeaderComponent={<Header />}
                            stickyHeaderIndices={[0]}
                        />
                    </>
                }
            </View>
        </SafeAreaView>
    )
}

export default Workouts