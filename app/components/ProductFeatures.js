import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function ProductFeatures({ iconName, children }) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        color={colors.primary}
        name={iconName}
        size={20}
        style={styles.icon}
      />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginHorizontal: 5,
  },
  icon: {
    marginRight: 5,
  },
});
