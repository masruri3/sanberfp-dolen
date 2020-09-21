import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function AppButton({
  borderRadius = 15,
  iconName,
  color = colors.primary,
  onPress,
  style,
  title,
  primary,
  width = "100%",
  height = 55,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          borderWidth: primary ? 0 : 2,
          backgroundColor: primary ? color : "",
          borderRadius,
          borderColor: color,
          height,
          width,
        },
        style,
      ]}
    >
      {iconName && (
        <MaterialCommunityIcons
          color={primary ? colors.white : color}
          name={iconName}
          size={height * 0.5}
        />
      )}
      {title && (
        <Text
          style={[
            styles.text,
            {
              color: primary ? colors.white : color,
            },
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  text: {
    color: colors.white,
    flex: 1,
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
});
