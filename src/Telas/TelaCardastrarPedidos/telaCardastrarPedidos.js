import React from "react";
import { View, StyleSheet } from "react-native";
import CabecalhoAdm from "../CabecalhoAdm/cabecalho";
import Body from "./Body/body";

export default function TelaCardastrarPedidos() {
  return (
    <View style={styles.container}>
      <CabecalhoAdm></CabecalhoAdm>
      <Body></Body>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BA690B",
    alignItems: "center",
  },
});
