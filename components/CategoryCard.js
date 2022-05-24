import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

import { Colors, Sizes, Fonts } from "../styles/theme";

const CategoryCard = ({ data }) => {
  const navigation = useNavigation();

  console.log(data.name);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Exercises", { categoryId: data.id })}
    >
      <View style={styles.exerciseProp}>
        <View style={styles.image}>
          <Image
            style={styles.image}
            source={require("../assets/muscle-vector-" +
              data.name.toLowerCase() +
              ".png")}
          />
        </View>
        <Text style={styles.light}>{data.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  light: {
    textAlign: "center",
    color: "blue",
    fontSize: Fonts.small,
    justifyContent: "center",
    position: "absolute", //the juice
    alignSelf: "center",
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

  exerciseProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: Colors.almond,
    padding: Sizes.large,
    margin: Sizes.large,
    height: 100,
    justifyContent: "center",
    borderRadius: Sizes.large,
  },
});

export default CategoryCard;
