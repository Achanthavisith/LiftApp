import { View, Text, StyleSheet, TextInput, Image} from 'react-native'
import { useRoute } from '@react-navigation/native'

import { Colors, Fonts, Sizes } from '../styles/theme'
import SearchIcon from '../assets/search.png'


const Header = () => {

  const route = useRoute();

  return (
    <View style={{backgroundColor: Colors.wood}}>
      <Text style={styles.light}>
        {route.name}
      </Text>

      {route.name === 'Exercises' ? 
        <View style={{
          backgroundColor: Colors.grey,
          borderRadius: Sizes.small,
          margin: Sizes.large,
          padding: Sizes.extraLarge,
          flexDirection: 'row',
        }}>
          <Image 
            source={SearchIcon}
            style={{ width:20, height: 20, marginRight: Sizes.small}}
          />
          <TextInput
            placeholder="Search Exercise"
            color="blue"
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
  light: {
      textAlign: 'center',
      color: 'blue',
      fontSize: Fonts.small,
      padding: 10
  }, 

})

export default Header