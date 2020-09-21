import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";

export default function BackgroundAuth({ heightScale, height }) {
  return (
    <View style={[styles.imageContainer, { height }]}>
      <Image
        source={require("../assets/authScreenBg-Top.png")}
        style={[
          styles.image,
          { maxHeight: heightScale ? 140 * heightScale : 140 },
        ]}
      />
      <Image
        source={require("../assets/authScreenBg-Bottom.png")}
        style={[
          styles.image,
          { maxHeight: heightScale ? 410 * heightScale : 410 },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    resizeMode: "stretch",
    width: "100%",
  },
  imageContainer: {
    backgroundColor: colors.primary,
    justifyContent: "space-between",
  },
});
