import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  FlatList,
  Button,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { styles } from "../styles/styles.js";

import ExerciseCategory from "./ExerciseCategory";
import Header from "./Header";

import { API_KEY } from "@env";

const Home = () => {
  const [exerciseCategory, setExerciseCategory] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    const getExerciseCategory = async () => {
      await axios
        .get("https://wger.de/api/v2/exercisecategory/", {
          headers: {
            "Content-Type": "application/json",
            Authorization: API_KEY,
          },
        })
        .then((response) => {
          console.log(response.data.results[0]);
          setExerciseCategory(response.data.results);
        });
    };
    getExerciseCategory();
  }, []);

  useEffect(() => {
    const getExercises = async () => {
      await axios
        .get("https://wger.de/api/v2/exerciseinfo/?limit=5", {
          headers: {
            "Content-Type": "application/json",
            Authorization: API_KEY,
          },
        })
        .then((response) => {
          console.log(response.data.results);
          setExercises(response.data.results);
        });
    };
    getExercises();
  }, []);

  return (
    <SafeAreaView>
      <View>
        <FlatList
          contentContainerStyle={styles.center}
          data={exerciseCategory}
          renderItem={({ item }) => <ExerciseCategory data={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<Header />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
