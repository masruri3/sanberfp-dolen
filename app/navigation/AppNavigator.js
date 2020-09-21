// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { MaterialCommunityIcons } from "@expo/vector-icons";

// // import AccountNavigator from "./AccountNavigator";
// // import HomeNavigator from "./HomeNavigator";
// // import ListingEditScreen from "../screens/ListingEditScreen";
// // import NewListingButton from "./NewListingButton";
// import routes from "./routes";
// import useNotifications from "../hooks/useNotifications";
// import navigation from "./RootNavigator";
// import HomeScreen from "../screens/HomeScreen";
// import AccountScreen from "../screens/AccountScreen";

// const Tab = createBottomTabNavigator();

// const AppNavigator = () => {
//   useNotifications((notification) => {});

//   return (
//     <Tab.Navigator tabBarOptions={{ style: { height: 60 } }}>
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="home" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Account"
//         component={AccountScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="account" color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default AppNavigator;
