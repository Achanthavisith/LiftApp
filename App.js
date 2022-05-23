import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Exercise from './screens/Exercise';

const Stack = createNativeStackNavigator();

const MyStack = () => {
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
          </Stack.Navigator>
      </NavigationContainer>
  );
};

export default MyStack;