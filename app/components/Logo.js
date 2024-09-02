import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import colors from "../config/colors";

const Logo = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.line} />
        <Image style={styles.logo} source={require("../assets/logo.jpg")} />
        <View style={styles.line} />
      </View>
    </SafeAreaView>
  );
};

export default Logo;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 65.87,
  },

  logo: {
    width: 63.96,
    height: 63.96,
    marginHorizontal: 30,
  },

  line: {
    height: 1,
    width: 105,
    backgroundColor: colors.dark,
  },
});
