import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import colors from "../config/colors";
import AppNavigator from "./AppNavigator";

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      // initialRouteName="ProductDetails"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={AppNavigator} />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{
          headerShown: true,
          headerTitle: null,
          headerTransparent: true,
          headerTintColor: colors.medium,
          headerStyle: {
            elevation: 2,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
