import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import React from "react";
import { useload } from "./context/load";

export default function Load() {
  const load = useload();

  return (
    <>
      {load ? (
        <View
          style={{
            ...styles.container,
          }}
        >
          <View
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundColor: "#000",
              opacity: 0.4,
            }}
          ></View>
          <ActivityIndicator size="large" color={"#1234"} />
        </View>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
