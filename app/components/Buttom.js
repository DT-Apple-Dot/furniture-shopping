import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../config/colors";

const Buttom = ({ title }) => {
  return (
    <TouchableOpacity style={styles.buttom}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Buttom;

const styles = StyleSheet.create({
  buttom: {
    width: 258,
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#242424",
    marginVertical: 10,
  },

  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "600",
    textTransform: "uppercase",
  },
});
