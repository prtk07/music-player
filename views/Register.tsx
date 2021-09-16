import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
} from "react-native";
import { useDispatch } from "react-redux";
import ErrorMessage from "../components/ErrorMessage";
import { authenticated } from "../redux/actions/auth-actions";

export default function Register({ navigation }: { navigation: any }) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [authAttempt, setAuthAttempt] = useState(false);
  const [err, setErr] = useState("");

  function handleErrMessage(message: string) {
    setErr(message);
    setTimeout(() => {
      setErr("");
    }, 3000);
  }

  function checkFormData(): boolean {
    const emailRE =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const nameRE = /^[a-zA-Z ]{2,30}$/;

    if (!userData.name) {
      handleErrMessage("Enter Name");
      return true;
    }

    if (!userData.email) {
      handleErrMessage("Enter Email");
      return true;
    }

    if (!userData.password) {
      handleErrMessage("Enter Password");
      return true;
    }

    const validEmail = emailRE.test(userData.email.toLowerCase());
    if (!validEmail) {
      handleErrMessage("Invalid Email");
      return true;
    }

    const validName = nameRE.test(userData.name);
    if (!validName) {
      handleErrMessage("enter valid Name");
      return true;
    }

    if (userData.password.length < 8) {
      handleErrMessage("Password to be minimum of 8 characters");
      return true;
    }

    if (confirmPassword !== userData.password) return true;

    return false;
  }

  const dispatch = useDispatch();

  function handleRegister() {
    let invalidData = checkFormData();
    if (invalidData) return;

    setAuthAttempt(true);

    fetch("https://musicplayer-api12.herokuapp.com/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        setAuthAttempt(false);

        if (data.message) handleErrMessage(data.message);
        if (data.token) dispatch(authenticated(data));
      })
      .catch((e) => {
        setAuthAttempt(false);
        handleErrMessage("something went wrong");
      });
  }

  return (
    <View style={styles.container}>
      {!!err && <ErrorMessage message={err} />}
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
      <View>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          textContentType="password"
          onChangeText={setConfirmPassword}
        />
        {userData.password !== confirmPassword && (
          <Text style={styles.passwordNoMatch}>Password Does Not Match</Text>
        )}
      </View>

      {authAttempt ? (
        <ActivityIndicator />
      ) : (
        <Button title="Register" onPress={handleRegister} />
      )}

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
  passwordNoMatch: {
    color: "red",
    position: "absolute",
    top: 39,
  },
});
