import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Appearance } from 'react-native';


import Home from './screens/Home';
import ExerciseCategory from './screens/ExerciseCategory'; 
import Exercise from './screens/Exercise';

const Stack = createNativeStackNavigator();
const colorScheme = Appearance.getColorScheme();

const MyStack = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={ {headerShown:false} }
          />
          <Stack.Screen 
            name="Exercises" 
            component={Exercise} 
            options={ {headerShown:false} }
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default MyStack;