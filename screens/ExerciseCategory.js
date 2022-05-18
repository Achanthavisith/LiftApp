import { View, Text, Appearance, StyleSheet } from "react-native";
import React from "react";

import { Colors } from "../styles/theme";
import CategoryCard from "../components/CategoryCard";

const colorScheme = Appearance.getColorScheme();

const ExerciseCategory = ({ data }) => {
  return (
    <View>
      <View>
        <CategoryCard category={data} />
      </View>
    </View>
  );
};

export default ExerciseCategory;
