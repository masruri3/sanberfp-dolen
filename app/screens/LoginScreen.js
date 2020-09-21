import React, { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import * as Yup from "yup";

import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../components/forms";
import BackgroundAuth from "../components/BackgroundAuth";
import colors from "../config/colors";
import { StatusBar } from "expo-status-bar";
import routes from "../navigation/routes";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen({ navigation }) {
  const [error, setError] = useState();

  const handleSubmit = ({ email, password }) => {
    console.log(email, password);
    navigation.navigate(routes.HOME);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar style="light" />
      <View>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcome}>Welcome</Text>
          <Text style={styles.welcome}>Back</Text>
        </View>
        <BackgroundAuth height={600} />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Sign in</Text>
        <Form
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={error} />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Login" />
        </Form>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: colors.white,
    bottom: 0,
    height: 400,
    justifyContent: "space-around",
    padding: 30,
    position: "absolute",
    width: "100%",
    zIndex: 2,
  },
  button: {
    marginVertical: 8,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    color: colors.dark,
    fontSize: 36,
    fontWeight: "700",
  },
  welcome: {
    color: "white",
    fontSize: 48,
  },
  welcomeContainer: {
    elevation: 1,
    left: 34,
    position: "absolute",
    top: 120,
    zIndex: 1,
  },
});
