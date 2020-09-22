import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import CardList from "../components/CardList";
import CardListSubheader from "../components/CardListSubheader";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ListItemSeparator from "../components/ListItemSeparator";
import { TouchableOpacity } from "react-native-gesture-handler";
import useAuth from "../hooks/useAuth";

export default function AccountScreen() {
  const { user, logOut } = useAuth();

  return (
    <View style={styles.container}>
      <CardListSubheader
        subHeader={user.name || user.email}
        actionDescription="Silver Member"
      />
      <View style={styles.cardContainer}>
        <View style={styles.accountDesc}>
          <View style={styles.profilePic}>
            <MaterialCommunityIcons
              name="account-circle"
              color={colors.medium}
              size={45}
            />
            <Text style={styles.followText}>
              {"Following : 30\nFollower : 50"}
            </Text>
          </View>
          <View style={styles.saldoContainer}>
            <Text style={styles.title}>Saldo</Text>
            <Text style={styles.info}>Rp. 1.055.000</Text>
          </View>
          <TouchableOpacity style={styles.logoutContainer} onPress={logOut}>
            <MaterialCommunityIcons
              name="logout"
              color={colors.primary}
              size={20}
            />
            <Text style={styles.followText}>Logout</Text>
          </TouchableOpacity>
        </View>
        <ListItemSeparator />
        <View style={styles.accountTabContainer}>
          <Text style={styles.accountTab}>Akun Pembeli</Text>
          <Text style={[styles.accountTab, { borderBottomWidth: 0 }]}>
            Akun Toko
          </Text>
        </View>
      </View>
      <FlatList
        data={menuItem}
        keyExtractor={(item) => item.subHeader}
        renderItem={({ item }) => <CardList menuItem={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  accountDesc: {
    alignItems: "center",
    alignContent: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  accountTab: {
    borderBottomWidth: 5,
    borderColor: colors.primary,
    color: colors.darker,
    flex: 1,
    fontSize: 16,
    textAlign: "center",
  },
  accountTabContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  container: {
    paddingTop: 20,
    backgroundColor: colors.light,
  },
  cardContainer: {
    backgroundColor: colors.white,
    borderRadius: 15,
    marginTop: 8,
    marginBottom: 20,
    paddingTop: 10,
  },
  couponContainer: {
    justifyContent: "center",
  },
  followText: {
    color: colors.medium,
    fontSize: 12,
    margin: 5,
  },
  info: {
    color: colors.darker,
    fontSize: 14,
  },
  logoutContainer: {
    alignItems: "center",
  },
  profilePic: {
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: "bold",
  },
  saldoContainer: {
    justifyContent: "center",
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
