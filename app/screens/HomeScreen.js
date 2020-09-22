import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import SearchBox from "../components/SearchBox";
import Category from "../components/Category";
import data from "../data";
import ItemCard from "../components/ItemCard";
import SectionCardHeader from "../components/SectionCardHeader";
import Screen from "../components/Screen";
import ItemCardSeparator from "../components/ItemCardSeparator";
import colors from "../config/colors";
import routes from "../navigation/routes";
import PayBar from "../components/PayBar";
import RootNavigator from "../navigation/RootNavigator";

export default function HomeScreen({ navigation }) {
  const [products, setProducts] = useState();

  const getProducts = async () => {
    await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        // console.log(json);
      });
  };

  const handleProductDetails = (item) => {
    RootNavigator.navigate(routes.PRODUCT_DETAILS, item);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <SearchBox />
          <MaterialCommunityIcons
            style={styles.iconTopBar}
            name="heart"
            size={25}
          />
          <MaterialCommunityIcons
            style={styles.iconTopBar}
            name="message-text"
            size={25}
          />
          <MaterialCommunityIcons
            style={styles.iconTopBar}
            name="cart"
            size={25}
          />
        </View>
        <TouchableOpacity>
          <Image
            style={styles.banner}
            source={require("../assets/banner1.png")}
          />
        </TouchableOpacity>
        <View style={styles.payContainer}>
          <View style={{ paddingVertical: 20, paddingHorizontal: 10 }}>
            <PayBar />
          </View>
          <View style={{ paddingBottom: 20 }}>
            <FlatList
              data={data.category}
              renderItem={({ item }) => (
                <Category
                  title={item.title}
                  icon={item.icon}
                  iconColor={item.iconColor}
                />
              )}
              horizontal={true}
              keyExtractor={(item) => item.id.toString()}
              ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
            />
          </View>
        </View>
        <Image
          style={styles.banner2}
          source={require("../assets/banner2.png")}
        />
        <View style={styles.listingHorizontal}>
          <SectionCardHeader title="Flash Sell" countDown="03. 30. 30" />
          <FlatList
            data={products}
            renderItem={({ item }) => (
              <ItemCard
                image={item.image}
                size={{ width: 120, height: 200 }}
                onPress={() => handleProductDetails(item)}
                price={item.price}
                title={item.title}
              />
            )}
            horizontal={true}
            ItemSeparatorComponent={ItemCardSeparator}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
        <View style={styles.listingHorizontal}>
          <SectionCardHeader title="New Product" />
          <FlatList
            data={products}
            renderItem={({ item }) => (
              <ItemCard
                image={item.image}
                title={item.title}
                onPress={() => handleProductDetails(item)}
                price={item.price}
                size={{ width: 120, height: 200 }}
              />
            )}
            horizontal={true}
            ItemSeparatorComponent={ItemCardSeparator}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 240,
    width: "100%",
  },
  banner2: {
    flex: 1,
    width: "100%",
  },
  categoryContainer: {
    marginVertical: 5,
    flexDirection: "row",
    backgroundColor: "#255BA5",
  },
  container: {
    backgroundColor: colors.light,
  },
  listingHorizontal: {
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
    top: 30,
    elevation: 1,
    position: "absolute",
    zIndex: 1,
  },
  iconTopBar: {
    color: colors.medium,
    margin: 5,
  },
  payContainer: {
    backgroundColor: "#255BA5",
  },
  newProductContainer: {
    marginVertical: 5,
  },
});
