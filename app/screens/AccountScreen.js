import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import CardList from "../components/CardList";
import Screen from "../components/Screen";
import colors from "../config/colors";

export default function AccountScreen() {
  return (
    <Screen style={styles.container}>
      <FlatList
        data={menuItem}
        keyExtractor={(item) => item.subHeader}
        renderItem={({ item }) => <CardList menuItem={item} />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
  },
});

const menuItem = [
  {
    subHeader: "Transaksi",
    actionDescription: "Lihat Riwayat Transaksi",
    listItem: [
      {
        title: "Menunggu Pembayaran",
        description: "Semua transaksi yang belum dibayar",
      },
      {
        title: "Komplain sebagai Pembeli",
        description: "Lihat status komplain",
      },
    ],
  },
  {
    subHeader: "Favorit Saya",
    listItem: [
      {
        title: "Terakhir dilihat",
        description: "Cek produk terakhir yang dilihat",
      },
      {
        title: "Wishlish",
        description: "Lihat produk yang anda wishlist",
      },
      {
        title: "Toko Favorit",
        description: "Lihat toko yang anda ikuti",
      },
      {
        title: "Langganan",
        description: "Atur dan jadwalkan tagihan",
      },
    ],
  },
];
