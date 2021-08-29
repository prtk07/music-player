import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from "react-native";

export default function Register({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register </Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        textContentType="emailAddress"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        textContentType="emailAddress"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        textContentType="emailAddress"
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        textContentType="emailAddress"
      />
      <Button
        title="Register"
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
      <Text>
        Already a user?
        <TouchableHighlight
          underlayColor="none"
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.registerText}>Login</Text>
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
