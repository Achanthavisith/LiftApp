import {
  View,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  StatusBar,
} from "react-native";
import axios from "axios";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Colors } from "../styles/theme";
import VideoCard from "../components/VideoCard";
import Header from "../components/Header";

const ExercisePage = ({ route }) => {
  const [videoList, setVideoList] = useState([]);
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    const getVideoList = async () => {
      let videos = await AsyncStorage.getItem(route.params.exerciseData.name);

      if (videos === null) {
        console.log("videos are empty... fetching");
        axios
          .get(
            "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=" +
              route.params.exerciseData.name +
              "%workout%training&key=" +
              process.env.YT_KEY,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            console.log("fetching videos");
            AsyncStorage.setItem(
              route.params.exerciseData.name,
              JSON.stringify(response.data.items)
            );
            setVideoList(response.data.items);
            isLoading(false);
          })
          .catch((err) => {
            console.log(err + " videoList");
          });
      } else {
        setVideoList(JSON.parse(videos));
        isLoading(false);
        console.log("set videos from storage");
      }
    };
    getVideoList();
  }, []);

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
                  color={Colors.almond}
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
                data={videoList}
                renderItem={({ item }) => <VideoCard data={item} />}
                keyExtractor={(item) => item.id.videoId}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={<Header />}
                stickyHeaderIndices={[0]}
              />
            </>
          )}
        </View>
      </SafeAreaView>
    </>
  );
};

export default ExercisePage;
