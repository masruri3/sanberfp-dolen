import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ItemCardSeparator({ width, height }) {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    width: 15,
  },
});
