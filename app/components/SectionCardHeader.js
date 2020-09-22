import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "../config/colors";

export default function SectionCardHeader({ title, countDown }) {
  return (
    <TouchableOpacity style={styles.sectionHeader}>
      <Text style={styles.subTitle}>{title}</Text>
      <Text style={styles.countDown}>{countDown}</Text>
      <Text style={styles.more}>All</Text>
      <FontAwesome5 name="chevron-right" size={15} color={colors.primary} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  countDown: {
    flex: 1,
    marginLeft: 10,
    color: colors.secondary,
    fontSize: 12,
    fontWeight: "400",
  },
  more: {
    marginHorizontal: 5,
    fontSize: 15,
    fontWeight: "400",
    color: colors.medium,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary,
  },
});
