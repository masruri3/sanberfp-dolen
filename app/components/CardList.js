import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import CardListItem from "./CardListItem";
import CardListSubheader from "./CardListSubheader";
import ListItemSeparator from "./ListItemSeparator";

export default function CardList({ subHeader, menuItem }) {
  return (
    <View style={styles.container}>
      <CardListSubheader
        subHeader={menuItem.subHeader}
        actionDescription={menuItem.actionDescription}
      />
      <View style={styles.cardContainer}>
        <FlatList
          data={menuItem.listItem}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <CardListItem description={item.description} title={item.title} />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.white,
    borderRadius: 15,
    marginTop: 8,
    marginBottom: 20,
    paddingVertical: 10,
  },
});
