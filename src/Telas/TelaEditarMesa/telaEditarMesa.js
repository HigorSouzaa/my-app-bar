import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import Cabecalho from "../Cabecalho/cabecalho";
import Body from "./Body/body";

export default function TelaEditarMesa() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Cabecalho />
        <Body></Body>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#BA690B",
  },
  container: {
    flex: 1,
  },
});
