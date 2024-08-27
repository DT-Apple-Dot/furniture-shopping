import React from "react";
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList
} from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const { width } = Dimensions.get("screen");

import ListCatrgories from "../components/ListCatrgories";
import catrgoriesItems from "../config/CatrgoriesItems";

const HomeScreen = ({ navigation }) => {
  const [selectedcategory, setselectedcategory] = React.useState(null);
  return (
    <SafeAreaView style={{ backgroundColor: colors.white, flex: 1 }}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <MaterialCommunityIcons
          name="magnify"
          size={24}
          color={colors.primary}
          style={styles.icon}
        />

        <Text style={styles.headerTitle}>
          Make home <Text style={styles.title}>BEAUTIFUL</Text>
        </Text>

        <MaterialCommunityIcons
          name="cart-outline"
          size={24}
          color={colors.primary}
          style={styles.icon}
        />
      </View>
      <FlatList
        data={catrgoriesItems}
        horizontal
        renderItem={({ item }) => (
          <ListCatrgories
            icon={item.iconName}
            name={item.name}
            index={item.id}
            selectedcategory={selectedcategory}
            setselectedcategory={setselectedcategory}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </ScrollView>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  icon: {
    paddingVertical: 10,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    width: "55%",
    paddingHorizontal: 20,
    lineHeight: 25,
    color: colors.gray,
    textAlign: "center",
  },

  title: {
    color: colors.dark,
  },
});

export default HomeScreen;
