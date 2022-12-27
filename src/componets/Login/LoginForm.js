import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";

const LoginForm = () => {
  const [email, setEmail] = useState(null);
  const [password, setPasspassword] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login To Your Account</Text>
      <TextInput
        style={styles.textField}
        label="Email"
        mode="outlined"
        placeholder="example@domain.com"
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.textField}
        label="Password"
        mode="outlined"
        placeholder="******"
        keyboardType="default"
        secureTextEntry
        onChangeText={(text) => setPasspassword(text)}
      />
      <Text style={styles.txt}>Or continue with</Text>
      <View style={styles.loginOptionsContainer}>
        <TouchableOpacity activeOpacity={0.7} style={styles.socialAccContainer}>
          <Image
            source={{
              uri: "https://img.icons8.com/fluency/500/null/facebook-new.png",
            }}
            style={styles.socialLogo}
          />
          <Text>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.socialAccContainer}>
          <Image
            source={{
              uri: "https://img.icons8.com/color/500/null/google-logo.png",
            }}
            style={styles.socialLogo}
          />
          <Text>Google</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.forgotPwdTxt}>Forgot Your Password?</Text>
      <Button
        onPress={() => console.log(`Email: ${email} \n Pass: ${password}`)}
        buttonColor="#13ad02"
        mode="contained"
        collapsable={true}
        uppercase
        style={styles.button}
      >
        Login
      </Button>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    width: "90%",
  },
  textField: {
    marginBottom: 10,
  },
  button: {
    width: 130,
    height: 60,
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  title: {
    marginBottom: 40,
    fontSize: 22,
    fontWeight: "bold",
    alignSelf: "center",
  },
  txt: {
    fontSize: 16,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
    fontWeight: "500",
  },
  loginOptionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    alignSelf: "center",
  },
  socialLogo: {
    height: 40,
    width: 40,
  },
  socialAccContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderWidth: 0.3,
    width: 130,
    paddingVertical: 4,
  },
  forgotPwdTxt: {
    color: "#13ad02",
    alignSelf: "center",
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#13ad02",
  },
});
