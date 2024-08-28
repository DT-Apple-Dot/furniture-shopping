import React from "react";
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
} from "react-native";

import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ProductCard from "../components/ProductCard";

import ListCatrgories from "../components/ListCatrgories";
import catrgoriesItems from "../config/CatrgoriesItems";
import furnitures from "../config/furnitures";

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

      <FlatList
        numColumns={2}
        data={furnitures}
        renderItem={({ item }) => (
          <ProductCard image={item.image} name={item.name} price={item.price} />
        )}
        showsVerticalScrollIndicator={false}
        style={styles.product}
      />
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

  product: {
    marginVertical: 20,
  },
});

export default HomeScreen;
