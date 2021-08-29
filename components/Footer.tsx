import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text>Footer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    width: "100vw",
    paddingVertical: 30,
    backgroundColor: "#1a2026",
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 0 },
    shadowRadius: 4,
  },
});
