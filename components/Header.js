import { View, Text, StyleSheet, TextInput, Image} from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import Button from '../components/Button'

import { Colors, Fonts, Sizes } from '../styles/theme'
import SearchIcon from '../assets/search.png'


const Header = () => {

  const route = useRoute();
  const navigation = useNavigation();

  return (
    <View style={styles.Header}>

      <View style={{flexDirection: 'row'}}>
        <Text style={styles.catHeader}>
            {route.name}
        </Text>
      </View>
      
      {route.name === 'Exercises' ? 
        <View style={styles.searchBar}> 
          <Image 
            source={SearchIcon}
            style={{ width:20, height: 20, marginRight: Sizes.small}}
          />
          <TextInput
            placeholder="Search Exercise"
            color={Colors.blue}
            placeholderTextColor={Colors.blue}
            style={{flex:1}}
          />
        </View> 
          : 
        <>

        </>}
      
    </View>
  )
}

const styles = StyleSheet.create ({
  Header: {
      marginBottom: Sizes.extraLarge,
      backgroundColor: Colors.wood,
  }, 

  searchBar: {
    backgroundColor: Colors.grey,
    borderRadius: Sizes.small,
    flexDirection: 'row',
    padding: Sizes.large,
    marginHorizontal: 8,
    marginBottom: Sizes.extraLarge
  },

  catHeader: {
    color: Colors.blue,
    fontWeight: 'bold',
    fontSize: Fonts.large,
    marginBottom: Sizes.extraLarge,
    textAlign: 'center',
    width: '100%',
  },

  backButton: {
  }

})

export default Header