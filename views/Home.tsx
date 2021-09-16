import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";

import Header from "../components/Header";
import Song from "../components/Song";

function Home() {
  const auth = useSelector((state: any) => state.auth);
  function getUser() {
    fetch("https://musicplayer-api12.herokuapp.com/user", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <View style={styles.container}>
      <Header title="Choose a Title" />
      <ScrollView style={styles.list}>
        <Song songTitle="new rules" artist="Dua Lipa" duration={3.9} />
        <Song songTitle="new rules" artist="Dua Lipa" duration={3.9} />
        <Song songTitle="new rules" artist="Dua Lipa" duration={3.9} />
        <Song songTitle="new rules" artist="Dua Lipa" duration={3.9} />
        <Song songTitle="new rules" artist="Dua Lipa" duration={3.9} />
        <Song songTitle="new rules" artist="Dua Lipa" duration={3.9} />
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100vh",
  },

  list: {
    width: "99vw",
  },
});

export default Home;
