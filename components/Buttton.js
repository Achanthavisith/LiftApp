import { View, Image, Text, TouchableOpacity } from "react-native";
import React from "react";

const Buttton = ({ data }) => {
  return (
    <TouchableOpacity>
      <Text style={styles.light}>{data.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  light: {
    textAlign: "center",
    color: "green",
    fontSize: Fonts.small,
  },
});

export default Buttton;
