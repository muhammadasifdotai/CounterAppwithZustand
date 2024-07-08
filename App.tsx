import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Counter from "./src/zustand/Counter";

export default function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Counter/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})