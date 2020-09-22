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
  textStyle = [],
  title,
  primary,
  width = iconName ? height : "100%",
  height = 55,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          borderWidth: primary ? 0 : 1,
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
            { ...textStyle },
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
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  text: {
    flex: 1,
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
});
