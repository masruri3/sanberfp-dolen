import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "../config/colors";

export default function Category({
  title,
  icon,
  colorBackground = colors.light,
  iconColor = colors.dark,
}) {
  return (
    <TouchableOpacity style={styles.container}>
      <View
        style={[styles.iconBackground, { backgroundColor: colorBackground }]}
      >
        <FontAwesome5
          color={iconColor}
          style={styles.icon}
          name={icon}
          size={30}
        />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignContent: "center",
    width: 70,
  },
  iconBackground: {
    width: 55,
    height: 55,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  title: {
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    color: colors.white,
  },
});
