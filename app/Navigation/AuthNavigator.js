import react from "react";
import { createStackNavigator } from "@react-navigation/stack";

import welcomeScreen from "../screens/welcomeScreen";
import loginScreen from "../screens/loginScreen";
import registerScreen from "../screens/registerScreen";

const stack = createStackNavigator();

const AuthNavigator = () => (
  <stack.Navigator>
    <stack.Screen name="Welcome" component={welcomeScreen} />
    <stack.Screen name="Login" component={loginScreen} />
    <stack.Screen name="Register" component={registerScreen} />
  </stack.Navigator>
);

export default AuthNavigator;
