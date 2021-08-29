import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header(props: { title: String }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 30,
    borderBottomWidth: 1,
    width: "100vw",
    paddingVertical: 30,
    backgroundColor: "#1a2026",
    borderBottomEndRadius: 35,
    borderBottomStartRadius: 35,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 0 },
    shadowRadius: 10,
    marginBottom: 20,
  },

  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
});
