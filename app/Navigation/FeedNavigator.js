import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/homeScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import NotificationScreen from "../screens/NotificationScreen";
import AccountScreen from "../screens/AccountScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false, presentation: "modal" }}
  >
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Favorites" component={FavoritesScreen} />
    <Stack.Screen name="Notification" component={NotificationScreen} />
    <Stack.Screen name="Account" component={AccountScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
