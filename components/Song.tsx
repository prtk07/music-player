import React from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
} from "react-native";

export default function Song(props: {
  songTitle: string;
  duration: number;
  artist: string;
}) {
  return (
    <View style={styles.container}>
      {/* <Image
        style={styles.songImage}
        source={require("../assets/splash.png")}
      /> */}
      <View style={styles.song}>
        <Text
          style={{
            color: "white",
            fontSize: 20,
          }}
        >
          {props.songTitle}
        </Text>
        <Text
          style={{
            color: "white",
          }}
        >
          {props.artist}
        </Text>
      </View>
      <Text>{props.duration}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "white",
    // borderRadius: 7,
    marginVertical: 3,
    height: 70,
    paddingHorizontal: 15,
  },

  song: {
    display: "flex",
    justifyContent: "space-around",
    height: "100%",
    width: "fit-content",
  },

  songImage: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "black",
  },
});
