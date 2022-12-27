import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import LoginForm from "../componets/Login/LoginForm";

const Login = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <LoginForm />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
});
