import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { useDispatch } from "react-redux";
import { authenticated } from "../redux/actions/auth-actions";
import { isLoading, isReady } from "../redux/actions/loading-actions";

export default function Register({ navigation }: { navigation: any }) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  function handleRegister() {
    dispatch(isLoading());
    fetch("http://localhost:5000/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(authenticated(data));
        dispatch(isReady());
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register </Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        textContentType="name"
        onChangeText={(e) => {
          setUserData({ ...userData, name: e });
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        textContentType="emailAddress"
        onChangeText={(e) => {
          setUserData({ ...userData, email: e });
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        textContentType="password"
        onChangeText={(e) => {
          setUserData({ ...userData, password: e });
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        textContentType="password"
      />
      <Button
        title="Register"
        onPress={() => {
          handleRegister();
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
