import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Appearance } from 'react-native';


import Home from './screens/Home';
import ExerciseCategory from './screens/ExerciseCategory';
import Exercise from './screens/Exercise';

const Stack = createNativeStackNavigator();
const colorScheme = Appearance.getColorScheme();

const MyStack = () => {
  return (
      <NavigationContainer theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={ {headerShown:false } }
          />
          <Stack.Screen 
          name="ExerciseCategory" 
          component={ExerciseCategory} 
          options={ {headerShown:false } }
          />
          <Stack.Screen 
          name="Exercise" 
          component={Exercise} 
          options={ {headerShown:false } }
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default MyStack;