import { View, Text, SafeAreaView, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { useState, useEffect } from 'react';

import { Colors, Font, Fonts } from "../styles/theme";
import ExerciseCard from '../components/ExerciseCard';
import Header from '../components/Header';

const Workouts = () => {
    const [exerciseCategory, setExerciseCategory] = useState([]);
    const [loading, isLoading] = useState(false);

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
                    <FlatList
                        data={exerciseCategory}
                        renderItem={({item}) => <ExerciseCard data={item} />}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<Header />}
                        stickyHeaderIndices={[0]}
                    />
                }
            </View>
        </SafeAreaView>
    )
}



export default Workouts