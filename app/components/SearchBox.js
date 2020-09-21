import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../config/colors";

export default function SearchBox({ width }) {
  return (
    <View style={[styles.container]}>
      <AntDesign style={styles.icon} name="search1" size={20} />
      <TextInput style={styles.title} placeholder="Search Product" />
      <AntDesign style={styles.icon} name="camerao" size={20} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: 45,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    borderWidth: 1,
    borderColor: colors.medium,
  },
  icon: {
    paddingRight: 5,
    color: colors.medium,
    marginHorizontal: 5,
  },
  title: {
    flex: 1,
    fontSize: 15,
    fontWeight: "600",
    color: colors.light,
    textAlign: "left",
  },
});
