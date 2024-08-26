import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListCatrgories = () => {
  const catrgoriesItems = [
    { name: "Popular", iconName: "star-outline" },
    { name: "Chair", iconName: "seat-outline" },
    { name: "Table", iconName: "table-furniture" },
    { name: "Armchair", iconName: "sofa-single-outline" },
    { name: "Bed", iconName: "bed-king-outline" },
  ];

  const [selectedcatrgory, setselectedcatrgory] = React.useState(0);

  return (
    <View style={styles.catrgoriesContainer}>
      {catrgoriesItems.map((item, index) => (
        <TouchableOpacity
          activeOpacity={0.8}
          key={index}
          onPress={() => setselectedcatrgory(index)}
        >
          <View
            style={[
              styles.catrgoriesItemBtn,
              {
                backgroundColor:
                  selectedcatrgory == index ? colors.primary : colors.light,
              },
            ]}
          >
            <MaterialCommunityIcons
              name={item.iconName}
              size={24}
              color={selectedcatrgory == index ? colors.white : colors.primary}
            />
            <Text
              style={[
                styles.catrgoryText,
                {
                  color:
                    selectedcatrgory == index ? colors.white : colors.primary,
                },
              ]}
            >
              {item.name}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  catrgoriesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
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
