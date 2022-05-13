import "react-native-gesture-handler";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { Button, View } from "react-native";
import { Appearance } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import UselessTextInput from "./TextInput.js"; //seamus text input test

import Home from "./screens/Home";
import ExerciseCategory from "./screens/ExerciseCategory";
import Exercise from "./screens/Exercise";
import Screen1 from "./screens/drawer/screen1";
import Screen2 from "./screens/drawer/screen2";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const colorScheme = Appearance.getColorScheme();

function HomeScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Exercise} />
      <Tab.Screen name="Exercise Category" component={ExerciseCategory} />
      <Tab.Screen name="Text Input" component={UselessTextInput}></Tab.Screen>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ExerciseCategory" component={ExerciseCategory} />
        <Stack.Screen name="Exercise" component={Exercise} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
