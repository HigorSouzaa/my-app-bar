import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Inputs from "../Inputs";

export default function Body() {
  return (
    <View style={styles.container_body}>
      <View style={styles.conteiner_txt}>
        <Image
          source={require("../../../../assets/txtCadastrarPedidos.png")}
          resizeMode="contain"
        ></Image>
      </View>
      <Inputs></Inputs>
    </View>
  );
}

const styles = StyleSheet.create({
  container_body: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 50,
    gap: 25,
  },
});
