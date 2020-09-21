import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";
import BackgroundAuth from "../components/BackgroundAuth";
import colors from "../config/colors";
import routes from "../navigation/routes";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcome}>Welcome</Text>
      </View>
      <BackgroundAuth height={750} />
      <View style={styles.actionBtContainer}>
        <AppButton
          style={styles.button}
          title="Register"
          onPress={() => navigation.navigate(routes.REGISTER)}
          primary
        />
        <AppButton
          style={styles.button}
          title="Login"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  actionBtContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: colors.white,
    height: 200,
    top: -20,
    paddingTop: 32,
    paddingHorizontal: 20,
    width: "100%",
  },
  button: {
    marginVertical: 8,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  welcome: {
    color: "white",
    fontSize: 48,
  },
  welcomeContainer: {
    elevation: 1,
    left: 34,
    position: "absolute",
    top: 180,
    zIndex: 1,
  },
});
