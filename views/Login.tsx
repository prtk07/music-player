import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  ActivityIndicator,
  TouchableHighlight,
} from "react-native";
import { useDispatch } from "react-redux";
import { authenticated } from "../redux/actions/auth-actions";
import ErrorMessage from "../components/ErrorMessage";

export default function Login({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [authAttempt, setAuthAttempt] = useState(false);

  function handleErrMessage(message: string) {
    setErr(message);
    setTimeout(() => {
      setErr("");
    }, 3000);
  }

  const dispatch = useDispatch();

  function checkData(): boolean {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email) {
      handleErrMessage("Enter Email");
      return true;
    }

    if (!password) {
      handleErrMessage("Enter Password");
      return true;
    }

    const validEmail = re.test(email.toLowerCase());
    if (!validEmail) {
      handleErrMessage("Invalid Email");
      return true;
    }
    return false;
  }

  function handleLogin() {
    let invalidData = checkData();
    if (invalidData) return;
    setAuthAttempt(true);
    fetch("https://musicplayer-api12.herokuapp.com/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        setAuthAttempt(false);

        if (data.message) handleErrMessage(data.message);
        if (data.token) dispatch(authenticated(data.token));
      })
      .catch((e) => {
        setAuthAttempt(false);
        handleErrMessage("something went wrong");
      });
  }
  return (
    <View style={styles.container}>
      {!!err && <ErrorMessage message={err} />}
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
      {authAttempt ? (
        <ActivityIndicator />
      ) : (
        <Button title="Login" onPress={handleLogin} />
      )}
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
