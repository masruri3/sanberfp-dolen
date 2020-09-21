import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

// import AppNavigator from "./app/navigation/AppNavigator";
// import AuthContext from "./app/auth/context";
import AuthNavigator from "./app/navigation/AuthNavigator";
// import AccountScreen from "./app/screens/AccountScreen";
// import HomeScreen from "./app/screens/HomeScreen";
// import LoginScreen from "./app/screens/LoginScreen";
// import RegisterScreen from "./app/screens/RegisterScreen";
// import WelcomeScreen from "./app/screens/WelcomeScreen";
// import { navigationRef } from "./app/navigation/RootNavigator";

export default function App() {
  // const [user, setUser] = useState();

  return (
    <>
      <StatusBar />
      {/* <AuthContext.Provider value={{ user, setUser }}> */}
      <NavigationContainer>
        {/* {user ? <AppNavigator /> : <AuthNavigator />} */}
        <AuthNavigator />
      </NavigationContainer>
      {/* </AuthContext.Provider> */}
    </>
  );
}
