import { View, SafeAreaView, FlatList, ActivityIndicator, Text, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";

import Header from "../components/Header";
import CategoryCard from "../components/CategoryCard";
import { Colors, Font } from "../styles/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { API_KEY } from "@env";

const Muscle = () => {
  const [muscle, setMuscle] = useState([]);
  const [loading, isLoading] = useState(true);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const getMuscles = async () => {
      let values = await AsyncStorage.getItem("muscles");

      if (values === null) {
        try {
          const muscle = await axios.get("https://wger.de/api/v2/muscle/", {
            headers: {
              "Content-Type": "application/json",
              Authorization: process.env.API_KEY,
            },
          });
          console.log("fetched muscles");
          AsyncStorage.setItem("muscles", JSON.stringify(muscle.data.results));
          setMuscle(muscle.data.results);
          isLoading(false);
        } catch (error) {
          console.log(error + " home");
        }
      } else {
        setMuscle(JSON.parse(values));
        isLoading(false);
        console.log("set muscles from storage");
      }
    };
    getMuscles();
  }, [refresh]);

  return (
    <SafeAreaView style={{ backgroundColor: Colors.blue }}>
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
                }}
              />
              <TouchableOpacity onPress={() => setRefresh(refresh + 1)}>
                <Text style={{ color: Colors.blue, fontFamily: Font.bold, marginTop: 50 }}>Still Loading?</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <FlatList data={muscle} renderItem={({ item }) => <CategoryCard data={item} muscleScreen={true} />} keyExtractor={(item) => item.id} showsVerticalScrollIndicator={false} ListHeaderComponent={<Header />} stickyHeaderIndices={[0]} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Muscle;
