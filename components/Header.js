import { View, Text, StyleSheet, TextInput, Image, Alert , Dev,} from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Colors, Sizes, Font, Fonts } from '../styles/theme'
import SearchIcon from '../assets/search.png'
import Button from '../components/Button'
import BackArrow from '../assets/back-arrow.png'
import liftIcon from "../assets/weight.png"

const Header = ( { onSearch, onRefresh } ) => {
  
  const navigation = useNavigation();

  const goToPrevScreen = () => {
    navigation.goBack();
  }

  const alert = () => {
    Alert.alert(
        "Oops..",
        "Already in the workout day",
        [
            { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
    );
  }

  const workoutsScreen = () => {

    if(route.name ==='Workouts') {
      console.log(route.params.dayName);
      Alert.prompt(
        "Add an unlisted workout",
        "e.g.  Lateral Lunge ",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          {
            text: "OK",
            onPress: (async(e) => {
            console.log(e);
            let values = await AsyncStorage.getItem(route.params.dayName);
            
            //the exercise page uses these parameter/values to get the objects
            //randomize ids for the objects
            const min = 1;
            const max = 100;
            const rand = min + Math.random() * (max - min);
            //create json object with the fields, it needs to be exact to how data is passed 
            //through and called in components and queries
            let JsonObject = {
              id: rand,
              name: e
            } 
        
            if(values===null) {
              let JsonArray = [];

              console.log (JsonObject);

              JsonArray.push(JsonObject);

              AsyncStorage.setItem(route.params.dayName, JSON.stringify(JsonArray));

              console.log('adding unlisted workout to ' + route.params.dayName);

              } else {
                console.log('adding unlisted workout to ' + route.params.dayName);

                let array = JSON.parse(values);

                array.push(JsonObject);

                AsyncStorage.setItem(route.params.dayName, JSON.stringify(array));
              }
              onRefresh();
            })
          }
        ],
      );
    } else {
      navigation.navigate('WorkoutWeek')
    }
  }

  const route = useRoute();
  
  return (
    <View style={styles.Header}>
      {route.name === "Categories" ? 
        <>
          <View style={{
            flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent: 'center', 
            marginBottom: 15 
            }}
          >  
            <View>
              <Text style={{color: Colors.almond, fontSize: Fonts.small, fontFamily: Font.bold, marginBottom: 0.5}}>
                {route.name}
              </Text>
            </View>
            <View style={{position: 'absolute', right: 20, bottom: -15}}>
              <Button img={liftIcon} onPress={workoutsScreen}/>
            </View> 
          </View>
        </>
        :
        <View>
        {route.name === 'Exercises' ? 
          <>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <View style={{marginLeft: 10}}>
                <Button img={BackArrow} onPress={goToPrevScreen} /> 
              </View>

              <View style={styles.searchBar}>
                <Image 
                  source={SearchIcon}
                  style={{ width:20, height: 20, marginRight: Sizes.small, marginLeft: 40 }}
                />
                <TextInput
                  placeholder="Search for Exercise(s)"
                  color={Colors.almond}
                  placeholderTextColor={Colors.almond}
                  style={{flex:1, fontFamily: Font.regular, marginLeft: Sizes.small}}
                  onChangeText={onSearch}
                />

              </View>

              <View style={{position: 'absolute', right: 20}}>
                <Button img={liftIcon} onPress={workoutsScreen}/>
              </View> 
            </View>
          </>
        :
        <>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{marginLeft: 10}}>
            <Button img={BackArrow} onPress={goToPrevScreen}/>
          </View>
        
          <View style={{position: 'absolute', right: 20}}>
            <Button img={liftIcon} onPress={workoutsScreen}/>
          </View> 
        </View>
        </>
        }
        </View>
      }  
    </View>
  )
}

const styles = StyleSheet.create ({
  Header: {
      backgroundColor: Colors.darkgrey,
      shadowColor: Colors.black,
      shadowOffset: {width: 0, height: 5},
      shadowOpacity: 0.2,
      borderBottomWidth: 1,
      borderColor: Colors.grey,
  }, 

  searchBar: {
    flexDirection: 'row',
    flex:1, 
    marginLeft: 15
  },

})

export default Header