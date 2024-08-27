import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListCatrgories = ({ name, index, icon, selectedcategory, setselectedcategory }) => {
  return (
    <View style={styles.catrgoriesContainer}>
      <TouchableOpacity
        activeOpacity={0.8}
        key={index}
        onPress={() => {
          setselectedcategory(index);
        }}
      >
        <View
          style={[
            styles.catrgoriesItemBtn,
            {
              backgroundColor:
              selectedcategory === index ? colors.primary : colors.light,
            },
          ]}
        >
          <MaterialCommunityIcons
            name={icon}
            size={24}
            color={selectedcategory === index ? colors.white : colors.primary}
          />
          <Text
            style={[
              styles.catrgoryText,
              {
                color:
                selectedcategory === index ? colors.white : colors.primary,
              },
            ]}
          >
            {name}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  catrgoriesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },

  catrgoriesItemBtn: {
    flexDirection: "row",
    backgroundColor: colors.light,
    padding: 10,
    borderRadius: 7,
    alignItems: "center",
  },

  catrgoryText: {
    fontSize: 12,
    fontWeight: "bold",
    color: colors.primary,
    marginLeft: 5,
  },
});

export default ListCatrgories;
