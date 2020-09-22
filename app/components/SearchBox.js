import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function SearchBox({ width }) {
  return (
    <View style={[styles.container]}>
      <MaterialCommunityIcons style={styles.icon} name="magnify" size={25} />
      <TextInput style={styles.title} placeholder="Search Product" />
      <MaterialCommunityIcons
        style={styles.icon}
        name="camera-outline"
        size={25}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flex: 1,
    flexDirection: "row",
    height: 45,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  icon: {
    color: colors.medium,
    margin: 5,
  },
  title: {
    flex: 1,
    fontSize: 15,
    color: colors.dark,
    textAlign: "left",
    margin: 5,
  },
});
