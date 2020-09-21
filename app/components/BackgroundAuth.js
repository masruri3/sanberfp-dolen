import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";

export default function BackgroundAuth() {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/authScreenBg-Top.png")}
        style={[styles.image, { height: 140 }]}
      />
      <Image
        source={require("../assets/authScreenBg-Bottom.png")}
        style={[styles.image, { height: 410 }]}
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
    flex: 1,
    justifyContent: "space-between",
  },
});
