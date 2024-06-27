import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Inputs from "./Inputs/index";

export default function BodyPedidos() {
  return (
    <View style={styles.txtPedidos}>
      <Image
        source={require("../../../../assets/txtPedidos.png")}
        resizeMode="contain"
      ></Image>
      <Inputs></Inputs>
    </View>
  );
}

const styles = StyleSheet.create({
  txtPedidos: {
    top: 60,
    display: "flex",
    alignItems: "center",
  },
});
