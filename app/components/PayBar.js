import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "../config/colors";

export default function PayBar() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.qr}>
        <MaterialCommunityIcons
          style={styles.icon}
          color={colors.darker}
          name="qrcode-scan"
          size={30}
        />
      </TouchableOpacity>
      <View style={styles.infos}>
        <TouchableOpacity style={styles.info}>
          <MaterialCommunityIcons
            style={styles.icon}
            color={colors.darker}
            name="coin"
            size={30}
          />
          <View>
            <Text style={styles.heading}>Rp. 1.055.000</Text>
            <Text style={styles.subHeading}>Top Up</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity style={styles.info}>
          <MaterialCommunityIcons
            style={styles.icon}
            color={colors.darker}
            name="ticket-percent"
            size={30}
          />
          <View>
            <Text style={styles.heading}>9 Kupon Baru</Text>
            <Text style={styles.subHeading}>Kupon Saya</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignContent: "center",
    borderRadius: 10,
    backgroundColor: colors.light,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  qr: {
    backgroundColor: colors.lightDark,
    borderRadius: 10,
    padding: 5,
  },
  heading: {
    fontSize: 15,
    color: colors.dark,
  },
  icon: {
    margin: 5,
  },
  infos: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  info: {
    flexDirection: "row",
  },
  subHeading: {
    color: colors.primary,
    fontSize: 10,
    fontWeight: "bold",
  },
  separator: {
    height: "80%",
    backgroundColor: colors.medium,
    width: 1,
  },
});
