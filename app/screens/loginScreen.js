import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../config/colors";
import Logo from "../components/Logo";
import AppTextInput from "../components/AppTextInput";

const LoginScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: colors.offwhite, flex: 1 }}>
      <Logo />
      <View style={styles.container}>
        <Text style={styles.text_1}>Hello !</Text>
        <Text style={styles.text_2}>WELCOME BACK</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.text}>Email</Text>
        <AppTextInput />

        <Text style={styles.text}>Password</Text>
        <AppTextInput />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginLeft: 30,
  },

  text_1: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.gray,
  },

  text_2: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.dark,
  },

  form: {
    width: 345,
    height: 500,
    paddingLeft: 30,
    marginVertical: 30,
    marginRight: 30,
    backgroundColor: colors.white,
  },

  text: {
    fontSize: 14,
    color: colors.gray,
    marginVertical: 30,
  },
});
