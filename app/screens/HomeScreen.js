import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import SearchBox from "../components/SearchBox";
import Category from "../components/Category";
import data from "../data";
import ItemCard from "../components/ItemCard";
import SectionCardHeader from "../components/SectionCardHeader";
import Screen from "../components/Screen";
import ItemCardSeparator from "../components/ItemCardSeparator";
import colors from "../config/colors";
import routes from "../navigation/routes";
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
    RootNavigator.navigate("ProductDetails", item);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Screen>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <SearchBox />
          <AntDesign style={styles.iconCamera} name="bells" size={20} />
        </View>
        <TouchableOpacity>
          <Image
            style={styles.banner}
            source={require("../assets/Slider.png")}
          />
        </TouchableOpacity>
        <View style={styles.categoryContainer}>
          <FlatList
            data={data.category}
            renderItem={({ item }) => (
              <Category
                title={item.title}
                icon={item.icon}
                colorBackground={item.background}
              />
            )}
            horizontal={true}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
        <View style={styles.flashSellContainer}>
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
        <View style={styles.newProductContainer}>
          <SectionCardHeader title="New Product" />
          <FlatList
            data={products}
            renderItem={({ item }) => (
              <ItemCard
                image={item.image}
                title={item.title}
                onPress={() => handleProductDetails(item)}
                price={item.price}
                size={{ width: 183, height: 212 }}
              />
            )}
            horizontal={true}
            ItemSeparatorComponent={ItemCardSeparator}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  banner: {
    marginVertical: 10,
    borderRadius: 7,
    height: 190,
    width: "100%",
  },
  categoryContainer: {
    marginVertical: 5,
    flexDirection: "row",
  },
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 15,
  },
  flashSellContainer: {
    marginVertical: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  iconCamera: {
    color: colors.medium,
    marginHorizontal: 10,
  },
  newProductContainer: {
    marginVertical: 5,
  },
});
