import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import ExerciseCategory from './screens/ExerciseCategory';
import Exercise from './screens/Exercise';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={ {headerShown:false } }
        />
        <Stack.Screen 
        name="ExerciseCategory" 
        component={ExerciseCategory} 
        />
        <Stack.Screen 
        name="Exercise" 
        component={Exercise} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;