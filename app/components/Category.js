import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../config/colors";

export default function Category({ title, icon, colorBackground }) {
  return (
    <TouchableOpacity style={styles.container}>
      <LinearGradient style={styles.iconBackground} colors={colorBackground}>
        <FontAwesome5 style={styles.icon} name={icon} size={27} />
      </LinearGradient>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginRight: 27,
  },
  iconBackground: {
    width: 55,
    height: 55,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  icon: {
    color: colors.white,
    opacity: 0.8,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    color: colors.medium,
  },
});
