import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppNavigator from "./app/Navigation/AppNavigator";
import AppTextInput from "./app/components/AppTextInput";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    // <NavigationContainer>
    //   <AppNavigator />
    // </NavigationContainer>
    // <LoginScreen />
    <RegisterScreen />
  );
};

export default App;
