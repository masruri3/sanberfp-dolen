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
import useAuth from "../hooks/useAuth";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
  phone: Yup.number().required().label("Phone Number"),
});

export default function RegisterScreen({ navigation }) {
  const [error, setError] = useState();
  const authUser = useAuth();

  const handleSubmit = (userDetails) => {
    authUser.logIn(userDetails);
    console.log(authUser.user);
  };

  return (
    <>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcome}>Lets Start</Text>
      </View>
      <BackgroundAuth height={200} />
      <View style={styles.formContainer}>
        <Text style={styles.title}>Sign Up</Text>
        <Form
          initialValues={{ name: "", email: "", password: "", phone: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={error} />
          <FormField
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="Name"
          />
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
            icon="phone"
            keyboardType="numeric"
            name="phone"
            placeholder="Phone Number"
            textContentType="telephoneNumber"
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
          <SubmitButton title="Register" />
        </Form>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: colors.white,
    bottom: 0,
    elevation: 1,
    minHeight: 500,
    justifyContent: "space-evenly",
    paddingVertical: 20,
    paddingHorizontal: 30,
    position: "absolute",
    width: "100%",
    zIndex: 1,
  },
  button: {
    marginVertical: 8,
  },
  container: {
    flex: 1,
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
    top: 90,
    zIndex: 1,
  },
});
