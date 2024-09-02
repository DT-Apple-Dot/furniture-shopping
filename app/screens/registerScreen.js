import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Logo from "../components/Logo";
import AppTextInput from "../components/AppTextInput";
import Buttom from "../components/Buttom";
import colors from "../config/colors";

const RegisterScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: colors.white, flex: 1 }}>
      <Logo />
      <View style={styles.container}>
        <Text style={styles.text_1}>WELCOME</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.text}>Name</Text>
        <AppTextInput />

        <Text style={styles.text}>Email</Text>
        <AppTextInput />

        <Text style={styles.text}>Password</Text>
        <AppTextInput />

        <Text style={styles.text}>Confirm Password</Text>
        <AppTextInput />

        <View style={styles.btncontainer}>
          <Buttom title="Sign Up" />
        </View>

        <Text style={styles.forgotcontainer}>
          Already have account? <Text style={styles.forgot}>SIGN IN</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginLeft: 30,
  },

  text_1: {
    fontSize: 30,
    fontWeight: "700",
    color: colors.dark,
  },

  form: {
    width: 360,
    height: 550,
    paddingLeft: 30,
    marginVertical: 30,
    borderTopRightRadius: 25,
    backgroundColor: colors.offwhite,
  },

  text: {
    fontSize: 14,
    color: colors.gray,
    marginVertical: 20,
  },

  forgotcontainer: {
    color: colors.gray,
    fontSize: 14,
    fontWeight: "700",
    marginTop: 20,
    textAlign: "center",
  },

  forgot: {
    color: colors.dark,
  },

  btncontainer: {
    marginTop: 35,
    alignItems: "center",
  },
});
