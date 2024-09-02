import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import colors from "../config/colors";

const AppTextInput = () => {
  return (
    <View style={styles.container}>
      <TextInput />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
  },
});
