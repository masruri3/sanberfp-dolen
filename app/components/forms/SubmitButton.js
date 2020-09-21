import React from "react";
import { useFormikContext } from "formik";
import { StyleSheet } from "react-native";

import Button from "../AppButton";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return (
    <Button
      onPress={handleSubmit}
      style={styles.button}
      title={title}
      primary
    />
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
  },
});

export default SubmitButton;
