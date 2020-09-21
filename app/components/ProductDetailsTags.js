import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

export default function ProductDetailsTags({ tagsData }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={tagsData}
        horizontal
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.tagContainer}>
            <Text style={styles.tagTitle}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginHorizontal: 10,
  },
  tagContainer: {
    borderColor: colors.primary,
    borderRadius: 7,
    borderWidth: 1,
    marginHorizontal: 3,
    paddingVertical: 2,
    paddingHorizontal: 5,
  },
  tagTitle: {
    color: colors.primary,
    fontSize: 12,
  },
});
