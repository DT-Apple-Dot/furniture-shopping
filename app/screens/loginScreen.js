import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../config/colors";
import Logo from "../components/Logo";
import AppTextInput from "../components/AppTextInput";
import Buttom from "../components/Buttom";

const LoginScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: colors.white, flex: 1 }}>
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

        <Text style={styles.forgot}>Forgot Password</Text>

        <View style={styles.btncontainer}>
          <Buttom title="Login" />
          <Buttom title="Sing Up" />
        </View>
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
    fontWeight: "700",
    color: colors.gray,
  },

  text_2: {
    fontSize: 30,
    fontWeight: "700",
    color: colors.dark,
  },

  form: {
    width: 360,
    height: 500,
    paddingLeft: 30,
    marginVertical: 30,
    borderTopRightRadius:25,
    backgroundColor: colors.offwhite,
  },

  text: {
    fontSize: 14,
    color: colors.gray,
    marginVertical: 30,
  },

  forgot: {
    color: colors.dark,
    fontSize: 18,
    fontWeight: "600",
    marginTop: 30,
    textAlign: "center",
  },

  btncontainer: {
    marginTop: 35,
    alignItems: "center",
  },
});
