import { View, Text, StyleSheet, TextInput, Image} from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native';

import { Colors, Fonts, Sizes, Font } from '../styles/theme'
import SearchIcon from '../assets/search.png'
import Button from '../components/Button'
import BackArrow from '../assets/back-arrow.png'

const Header = ( { onSearch } ) => {
  
  const navigation = useNavigation();

  const goToPrevScreen = () => {
    navigation.goBack();
  }

  const route = useRoute();
  return (
    <View style={styles.Header}>
      {route.name === "Categories" ? 
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.catHeader}>
              {route.name}
          </Text>
        </View> 
        :
        <View>
        {route.name === 'Exercises' ? 
          <>
            <View style={{flexDirection: 'row', flex: 1}}>
              <Button img={BackArrow} onPress={goToPrevScreen} /> 

              <View style={styles.searchBar}>
                <Image 
                  source={SearchIcon}
                  style={{ width:20, height: 20, marginRight: Sizes.small}}
                />
                <TextInput
                  placeholder="Search for Exercise(s)"
                  color={Colors.blue}
                  placeholderTextColor={Colors.blue}
                  style={{flex:1, fontFamily: Font.regular}}
                  onChangeText={onSearch}
                />

              </View>
            </View>
          </>
        :
        <View>
        <Button img={BackArrow} onPress={goToPrevScreen}/>
        </View>
        }
        </View>
      }  
    </View>
  )
}

const styles = StyleSheet.create ({
  Header: {
      marginBottom: Sizes.small,
      backgroundColor: Colors.wood,
      shadowColor: Colors.black,
      shadowOffset: {width: 0, height: 5},
      shadowOpacity: 0.2,
      borderBottomWidth: 1,
      borderColor: Colors.grey,
  }, 

  searchBar: {
    borderRadius: Sizes.small,
    flexDirection: 'row',
    padding: Sizes.large,
    marginHorizontal: 8,
    paddingRight: Sizes.extraLarge,
    flex:1
  },

  catHeader: {
    color: Colors.blue,
    fontSize: Fonts.small,
    marginBottom: 16,
    textAlign: 'center',
    width: '100%',
    fontFamily: Font.bold
  },
})

export default Header