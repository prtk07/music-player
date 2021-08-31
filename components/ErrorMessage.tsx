import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ErrorMessage(props: { message: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{props.message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 5,
    borderLeftWidth: 10,
    borderColor: "#cdc7c7",
    borderLeftColor: "red",
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  message: {
    color: "red",
  },
});
