import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  Button,
} from "react-native";

const UselessTextInput = () => {
  const [text, setText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);

  const nums = [1, 2, 3];

  const users = nums.map((data, id) => {
    return <li key={id}>{data}</li>;
  });

  const getButtonsUsingMap = () => {
    return nums.map((number) => {
      return <Button>{number}</Button>;
    });
  };
  return (
    <SafeAreaView>
      <Button></Button>
      <Text>text: {text}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(val) => setText(val)}
        placeholder="Your text here"
        keyboardType="default"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default UselessTextInput;
