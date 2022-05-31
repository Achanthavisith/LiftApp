import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

import Home from './screens/Home';
import Exercise from './screens/Exercise';
import ExercisePage from './screens/ExercisePage';
import WorkoutWeek from './screens/WorkoutWeek';
import Workouts from './screens/Workouts';

const Stack = createNativeStackNavigator();

const MyStack = () => {

  const [loaded] = useFonts({
    InterBold: require('./assets/fonts/Inter-Bold.ttf'),
    InterSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
    InterMedium: require('./assets/fonts/Inter-Medium.ttf'),
    InterRegular: require('./assets/fonts/Inter-Regular.ttf'),
    InterLight: require('./assets/fonts/Inter-Light.ttf'),
  });

  if (!loaded) return null;

  return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
              name="Categories"
              component={Home}
              options={ {headerShown:false} }
            />
            <Stack.Screen 
              name="Exercises" 
              component={Exercise} 
              options={ {headerShown:false} }
            />
            <Stack.Screen 
              name="Exercise Videos" 
              component={ExercisePage} 
              options={ {headerShown:false} }
            />
            <Stack.Screen 
              name="WorkoutWeek" 
              component={WorkoutWeek} 
              options={ {headerShown:false} }
            />
            <Stack.Screen 
              name="Workouts" 
              component={Workouts} 
              options={ {headerShown:false} }
            />
          </Stack.Navigator>
      </NavigationContainer>
  );
};

export default MyStack;