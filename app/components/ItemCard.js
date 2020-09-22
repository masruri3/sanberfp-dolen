import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";

export default function ItemCard({
  image,
  onPress,
  price,
  size = { width, height },
  title,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { width: size.width, height: size.height }]}
    >
      <Image
        uri={image}
        style={[styles.image, { width: size.width }]}
        resizeMode="cover"
      />
      <View style={styles.details}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.price}>${price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: "hidden",
    borderColor: colors.light,
    borderWidth: 1,
  },
  details: {
    padding: 7,
  },
  image: {
    height: "70%",
    borderRadius: 10,
  },
  price: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.primary,
  },
  title: {
    fontSize: 12,
    fontWeight: "400",
    color: colors.black,
  },
});
