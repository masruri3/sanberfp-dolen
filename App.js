import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

// import AppNavigator from "./app/navigation/AppNavigator";
import AuthContext from "./app/auth/context";
import AuthNavigator from "./app/navigation/AuthNavigator";
// import AccountScreen from "./app/screens/AccountScreen";
// import HomeScreen from "./app/screens/HomeScreen";
// import LoginScreen from "./app/screens/LoginScreen";
// import RegisterScreen from "./app/screens/RegisterScreen";
// import WelcomeScreen from "./app/screens/WelcomeScreen";
import { navigationRef } from "./app/navigation/RootNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ProductDetailsScreen from "./app/screens/ProductDetailsScreen";
import HomeNavigator from "./app/navigation/HomeNavigator";
import AccountScreen from "./app/screens/AccountScreen";
import HomeScreen from "./app/screens/HomeScreen";
import RootStackNavigator from "./app/navigation/RootStackNavigator";

export default function App() {
  const [user, setUser] = useState();

  return (
    <>
      <StatusBar style="light" translucent />
      <AuthContext.Provider value={{ user, setUser }}>
        <NavigationContainer ref={navigationRef}>
          {user ? <AppNavigator /> : <AuthNavigator />}
          {/* <AccountScreen /> */}
        </NavigationContainer>
      </AuthContext.Provider>
    </>
  );
}
