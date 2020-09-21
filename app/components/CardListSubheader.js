import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function CardListSubheader({
  subHeader,
  actionDescription,
  onPressAction,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.subHeader}>{subHeader}</Text>
      {actionDescription && (
        <TouchableOpacity
          style={styles.actionContainer}
          onPress={onPressAction}
        >
          <Text style={styles.actionDescription}>{actionDescription}</Text>
          <MaterialCommunityIcons
            color={colors.medium}
            name="chevron-right"
            size={20}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  actionDescription: {
    fontSize: 13,
    color: colors.medium,
  },
  actionContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  subHeader: {
    fontSize: 20,
    color: colors.dark,
    fontWeight: "700",
  },
});
