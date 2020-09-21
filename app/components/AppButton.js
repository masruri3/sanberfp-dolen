import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../config/colors";

export default function AppButton({ onPress, style, title, primary }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          borderWidth: primary ? 0 : 1,
          backgroundColor: primary ? colors.primary : "",
        },
        style,
      ]}
    >
      <Text
        style={[
          styles.text,
          {
            color: primary ? colors.white : colors.primary,
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 15,
    borderColor: colors.primary,
    height: 66,
    justifyContent: "center",
    width: "100%",
  },
  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "700",
  },
});
