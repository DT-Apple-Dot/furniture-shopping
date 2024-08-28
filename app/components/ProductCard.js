import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ProductCard = ({ name, image, price }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.coverImage} />
      <View style={styles.content}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="shopping" size={20} color={"#FFFFFF"} />
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    position: "relative",
    marginVertical: 10,
  },

  coverImage: {
    height: 236,
    width: 157,
    borderRadius: 20,
  },

  content: {
    marginVertical: 10,
  },

  title: {
    fontSize: 14,
    color: "#606060",
    fontWeight: "600",
  },

  price: {
    fontSize: 14,
    color: "#303030",
    fontWeight: "600",
  },

  iconContainer: {
    width: 30,
    height: 30,
    bottom: 75,
    right: 35,
    borderRadius: 10,
    backgroundColor: "#606060",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
});
