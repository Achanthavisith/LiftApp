import {
  View,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  StatusBar,
} from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Colors } from "../styles/theme";
import ExerciseCard from "../components/ExerciseCard";
import Header from "../components/Header";

const Workouts = ({ route }) => {
  const [loading, isLoading] = useState(true);
  const [workouts, setWorkouts] = useState([]);
  const [refresh, setRefresh] = useState(0);

  const refreshWorkouts = () => {
    setRefresh(refresh + 1);
  };

  useEffect(() => {
    const getExercises = async () => {
      let values = await AsyncStorage.getItem(route.params.dayName);
      //logic to get workouts
      if (values === null) {
        console.log("workouts are empty");
        isLoading(false);
      } else {
        //get storage if values not empty
        setWorkouts(JSON.parse(values));
        isLoading(false);
        console.log("set Workouts from storage");
      }
    };
    getExercises();
  }, [refresh]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ backgroundColor: Colors.white }}>
        <View
          style={{
            backgroundColor: Colors.white,
            height: "100%",
          }}
        >
          {loading ? (
            <>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ActivityIndicator
                  size="large"
                  color={Colors.blue}
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: "80%",
                  }}
                />
              </View>
            </>
          ) : (
            <>
              <FlatList
                data={workouts}
                renderItem={({ item }) => (
                  <ExerciseCard
                    data={item}
                    onRefresh={refreshWorkouts}
                    day={route.params.dayName}
                  />
                )}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={<Header onRefresh={refreshWorkouts} />}
                stickyHeaderIndices={[0]}
              />
            </>
          )}
        </View>
      </SafeAreaView>
    </>
  );
};

export default Workouts;
