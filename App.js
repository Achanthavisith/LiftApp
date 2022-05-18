import "react-native-gesture-handler";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { Appearance, Button, View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import UselessTextInput from "./TextInput.js"; //seamus text input test
import Home from "./screens/Home";
import ExerciseCategory from "./screens/ExerciseCategory";
import Exercise from "./screens/Exercise";
import Screen1 from "./screens/drawer/screen1";
import Screen2 from "./screens/drawer/screen2";
import { styles } from "./styles/styles.js";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const colorScheme = Appearance.getColorScheme();

function HomeScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={ExerciseCategories} />
      <Tab.Screen name="Exercise Category" component={Home} />
      <Tab.Screen name="Text Input" component={UselessTextInput}></Tab.Screen>
      <Tab.Screen name="test" component={ExerciseCategories} />
    </Tab.Navigator>
  );
}

function ExerciseCategories({ navigation: { navigate } }) {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <View>
      <Button
        title="redirect to exercise category"
        onPress={() => navigate("Abs", { names: ["Brent", "Satya", "Michaś"] })}
      />
      <Button />
    </View>
  );
}
function ExerciseCategoryButton({ navigation: { route } }) {
  return <Text></Text>;
}

function AbsCategory({ navigation: { navigate } }) {
  return (
    <View>
      <Text>ABS EXERCISES HERE</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <Stack.Navigator>
        <Stack.Screen
          name="fuck"
          component={UselessTextInput}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Abs" component={AbsCategory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
