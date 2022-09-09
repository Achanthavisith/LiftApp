import { View, Text, SafeAreaView, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { useState, useEffect } from 'react';

import { Colors, Font, Fonts } from "../styles/theme";
import CategoryCard from '../components/CategoryCard'
import Header from '../components/Header';

const WorkoutWeek = () => {

    const day= [{
        id:0,
        name: 'Sunday',
    },  {
        id:1,
        name: 'Monday',
    },  {
        id:2,
        name: 'Tuesday',
    },  {
        id:3,
        name: 'Wednesday',
    },  {
        id:4,
        name: 'Thursday',
    },  {
        id:5,
        name: 'Friday',
    },  {
        id:6,
        name: 'Saturday',
    },
    ];

    return (
        <SafeAreaView style={{backgroundColor: Colors.blue}}>
            <View style={{
            backgroundColor: Colors.white,
            height: "100%"
            }}>
                <FlatList
                        data={day}
                        renderItem={({item}) => <CategoryCard data={item} />}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<Header />}
                        stickyHeaderIndices={[0]}
                />
                
            </View>
        </SafeAreaView>
    )
}



export default WorkoutWeek