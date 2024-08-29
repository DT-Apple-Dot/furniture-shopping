import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from "../screens/homeScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import NotificationScreen from "../screens/NotificationScreen";
import AccountScreen from "../screens/AccountScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons name="home-outline" size={24} />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Favorites"
      component={FavoritesScreen}
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons name="bookmark-outline" size={24} />
        ),
      }}
    />
    <Tab.Screen
      name="Notification"
      component={NotificationScreen}
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons name="bell-outline" size={24} />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={AccountScreen}
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons name="account-outline" size={24} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
