import React, { useState } from "react";
import { TouchableHighlight } from "react-native";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";

export default function Login({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        textContentType="emailAddress"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        autoCompleteType="password"
        textContentType="password"
      />
      <Button
        title="Login"
        onPress={() => {
          console.log(`${email}, ${password}`);
        }}
      />
      <Text>
        not a user?
        <TouchableHighlight
          underlayColor="none"
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <Text style={styles.registerText}>Register</Text>
        </TouchableHighlight>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "800",
  },
  input: {
    width: "80vw",
    height: "40px",
    backgroundColor: "white",
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    borderStyle: "solid",
  },
  registerText: {
    color: "blue",
    textDecorationLine: "underline",
    textDecorationColor: "blue",
  },
});
