import {
  View,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";

import Header from "../components/Header";
import CategoryCard from "../components/CategoryCard";
import { Colors, Font } from "../styles/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { API_KEY } from "@env";

const Home = () => {
  const [exerciseCategory, setExerciseCategory] = useState([]);
  const [loading, isLoading] = useState(true);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const getExerciseCategory = async () => {
      let values = await AsyncStorage.getItem("categories");

      if (values === null) {
        try {
          const categories = await axios.get(
            "https://wger.de/api/v2/exercisecategory/",
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: process.env.API_KEY,
              },
            }
          );
          setExerciseCategory(categories.data.results);
          AsyncStorage.setItem(
            "categories",
            JSON.stringify(categories.data.results)
          );
          isLoading(false);
        } catch (error) {
          console.log(error + " home");
        }
      } else {
        setExerciseCategory(JSON.parse(values));
        isLoading(false);
        console.log("set categories from storage");
      }
    };
    getExerciseCategory();
  }, [refresh]);

  //AsyncStorage.clear();

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
                  }}
                />
                <TouchableOpacity onPress={() => setRefresh(refresh + 1)}>
                  <Text
                    style={{
                      color: Colors.blue,
                      fontFamily: Font.bold,
                      marginTop: 50,
                    }}
                  >
                    Still Loading?
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <FlatList
              data={exerciseCategory}
              renderItem={({ item }) => (
                <CategoryCard data={item} muscleScreen={false} />
              )}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={<Header />}
              stickyHeaderIndices={[0]}
            />
          )}
        </View>
      </SafeAreaView>
    </>
  );
};

export default Home;
