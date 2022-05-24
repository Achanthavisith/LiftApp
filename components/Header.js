import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import { useRoute } from "@react-navigation/native";

import { Colors, Fonts, Sizes } from "../styles/theme";
import SearchIcon from "../assets/search.png";

const Header = ({ onSearch }) => {
  const route = useRoute();
  return (
    <View style={styles.Header}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.catHeader}>{route.name}</Text>
      </View>

      {route.name === "Exercises" || "Exercise Videos" ? (
        <View style={styles.searchBar}>
          <Image
            source={SearchIcon}
            style={{ width: 20, height: 20, marginRight: Sizes.small }}
          />
          <TextInput
            placeholder="Search Exercise"
            color={Colors.blue}
            placeholderTextColor={Colors.blue}
            style={{ flex: 1 }}
            onChangeText={onSearch}
          />
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  Header: {
<<<<<<< Updated upstream
      marginBottom: Sizes.extraLarge,
      backgroundColor: Colors.wood,
      shadowColor: Colors.black,
      shadowOffset: {width: 0, height: 5},
      shadowOpacity: 0.2,
      borderBottomWidth: 1,
      borderColor: Colors.grey,
     
  }, 
=======
    marginBottom: Sizes.extraLarge,
    backgroundColor: Colors.wood,
  },
>>>>>>> Stashed changes

  searchBar: {
    backgroundColor: Colors.almond,
    borderRadius: Sizes.small,
    flexDirection: "row",
    padding: Sizes.large,
    marginHorizontal: 8,
    marginBottom: Sizes.extraLarge,
  },

  catHeader: {
    color: Colors.blue,
<<<<<<< Updated upstream
    fontWeight: 'bold',
    fontSize: Fonts.small,
=======
    fontWeight: "bold",
    fontSize: Fonts.large,
>>>>>>> Stashed changes
    marginBottom: Sizes.extraLarge,
    textAlign: "center",
    width: "100%",
  },

  backButton: {},
});

export default Header;
