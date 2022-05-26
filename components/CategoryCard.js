import { View,Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

import { Colors, Sizes, Fonts, Font } from "../styles/theme";

const CategoryCard = ({ data }) => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Exercises", { 
        categoryId: data.id, 
        categoryName: data.name,
      })}
    >
      <View style={styles.exerciseProp}>
        <View>
        </View>

        <Text style={styles.light}>{data.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  light: {
    textAlign: "center",
    color: Colors.blue,
    fontSize: Fonts.small,
    fontFamily: Font.semiBold
  },

  exerciseProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: Colors.almond,
    padding: Sizes.large,
    margin: Sizes.large,
    height: 120,
    justifyContent: "center",
    borderRadius: Sizes.large,
  },
  image: {
    justifyContent: "center",
    height: 100,
    width: 70,
    borderRadius: 2,
    padding: 1,
    alignSelf: "baseline",
    position: "absolute",
  },
});

export default CategoryCard;
