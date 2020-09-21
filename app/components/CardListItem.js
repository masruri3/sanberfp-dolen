import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function CardListItem({ description, icon, title }) {
  return (
    <TouchableOpacity style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          color={colors.medium}
          name={icon}
          size={35}
          style={styles.icon}
        />
      )}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <MaterialCommunityIcons
        color={colors.medium}
        name="chevron-right"
        size={40}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  description: {
    fontSize: 14,
    textAlign: "left",
    color: colors.medium,
  },
  icon: {
    paddingRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    textAlign: "left",
    color: colors.dark,
  },
});
