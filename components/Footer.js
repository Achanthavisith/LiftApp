import { View, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Colors, Sizes, Font, Fonts } from "../styles/theme";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";

const footer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={{ padding: "5%" }}
        onPress={() => navigation.navigate("Muscle")}
      >
        <Icon type="feather" name="align-justify" />
        <Text>By Muscle</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ padding: "5%" }}
        onPress={() => navigation.navigate("Categories")}
      >
        <Icon type="feather" name="home" />
        <Text>By Group</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ padding: "5%" }}
        onPress={async () => {
          await AsyncStorage.getAllKeys()
            .then((keys) => AsyncStorage.multiRemove(keys))
            .then(() => alert("success"));
        }}
      >
        <Icon type="feather" name="trash-2" />
        <Text>Clear data</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    borderTopWidth: 1,
    borderColor: Colors.grey,
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default footer;
