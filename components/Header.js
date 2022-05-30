import { View, Text, StyleSheet, TextInput, Image} from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native';

import { Colors, Sizes, Font, Fonts } from '../styles/theme'
import SearchIcon from '../assets/search.png'
import Button from '../components/Button'
import BackArrow from '../assets/back-arrow.png'
import liftIcon from "../assets/weight.png"

const Header = ( { onSearch } ) => {
  
  const navigation = useNavigation();

  const goToPrevScreen = () => {
    navigation.goBack();
  }

  const workoutsScreen = () => {
    navigation.navigate('Workouts')
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
              <Text style={{color: Colors.blue, fontSize: Fonts.small, fontFamily: Font.bold, marginBottom: 0.5}}>
                {route.name}
              </Text>
            </View>
            <View style={{position: 'absolute', right: 20}}>
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
                  color={Colors.blue}
                  placeholderTextColor={Colors.blue}
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
            <Button img={liftIcon} />
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
      backgroundColor: Colors.wood,
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