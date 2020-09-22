import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "react-native-expo-image-cache";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ProductDetailsTags from "../components/ProductDetailsTags";
import colors from "../config/colors";
import ProductFeatures from "../components/ProductFeatures";
import ListItemSeparator from "../components/ListItemSeparator";
import AppButton from "../components/AppButton";

const ProductDetailsScreen = ({ route }) => {
  // const product = route.params;
  return (
    <>
      <Image style={styles.image} uri={product.image} />
      <View style={styles.summaryContainer}>
        <View style={styles.headerContainer}>
          <View style={{ flex: 1 }}>
            <Text ellipsizeMode="middle" numberOfLines={2} style={styles.title}>
              {product.title}
            </Text>
            <View style={styles.tagsContainer}>
              <Text style={styles.price} numberOfLines={1}>
                $ {product.price}
              </Text>
              <ProductDetailsTags
                tagsData={["Free Antiseptic", "100% Original"]}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.favIcon}>
            <MaterialCommunityIcons name="heart-outline" size={30} />
          </TouchableOpacity>
        </View>
        <ListItemSeparator />
        <View style={styles.featuresContainer}>
          <ProductFeatures iconName="star-circle-outline">
            <Text style={styles.featureDesc}>4.5</Text>
            <Text style={styles.featureDescSM}>/5</Text>
            <Text style={styles.featureDesc}> | 50 Sold</Text>
            <Text style={styles.featureDescSM}>/day</Text>
          </ProductFeatures>
          <ProductFeatures iconName="truck-delivery">
            <Text>Free delivery</Text>
          </ProductFeatures>
        </View>
      </View>
      <View style={styles.actionContainer}>
        <AppButton
          style={styles.btMessage}
          iconName="message-text-outline"
          color={colors.secondary}
          onPress={() => {}}
        />
        <AppButton
          style={{ ...btProp }}
          textStyle={{ fontSize: 15 }}
          title="Beli Sekarang"
          onPress={() => {}}
        />
        <AppButton
          style={{ ...btProp }}
          textStyle={{ fontSize: 15 }}
          title="+ Keranjang"
          iconName="cart-plus"
          onPress={() => {}}
          primary
        />
      </View>
    </>
  );
};

const btProp = {
  borderRadius: 10,
  flex: 1,
  height: 45,
  marginHorizontal: 5,
};

const styles = StyleSheet.create({
  actionContainer: {
    borderRadius: 10,
    bottom: 0,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 15,
    position: "absolute",
    flexDirection: "row",
  },
  btText: {},
  btMessage: {
    ...btProp,
    flex: 0,
    width: btProp.height,
    paddingHorizontal: 0,
  },
  featuresContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  featureDesc: {
    color: colors.dark,
    fontSize: 14,
  },
  favIcon: {
    paddingHorizontal: 10,
    alignSelf: "flex-start",
  },
  featureDescSM: {
    color: colors.dark,
    fontSize: 10,
  },
  headerContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  image: {
    height: "60%",
    resizeMode: "contain",
    width: "100%",
  },
  summaryContainer: {
    backgroundColor: colors.white,
    elevation: 1,
    paddingVertical: 10,
  },
  price: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: "700",
  },
  tagsContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  title: {
    color: colors.black,
    fontSize: 16,
    fontWeight: "600",
  },
});

const product = {
  category: "electronics",
  description:
    "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
  id: 13,
  image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
  price: 599,
  title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
};

export default ProductDetailsScreen;
