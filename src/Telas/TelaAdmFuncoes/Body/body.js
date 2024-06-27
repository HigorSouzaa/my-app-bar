import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

export default function Body() {
  return (
    <View style={styles.container_body}>
      <View style={styles.conteiner_txt}>
        <Image
          source={require("../../../../assets/txt1Adm.png")}
          resizeMode="contain"
        ></Image>
      </View>
      <View style={styles.conteiner_bt}>
        <Image
          source={require("../../../../assets/Seta.png")}
          resizeMode="contain"
        ></Image>
        <TouchableOpacity>
          <Image
            source={require("../../../../assets/carrinhoCardapio.png")}
            resizeMode="contain"
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.conteiner_txt}>
        <Image
          source={require("../../../../assets/txt2Adm.png")}
          resizeMode="contain"
        ></Image>
      </View>
      <View style={styles.conteiner_bt}>
        <Image
          source={require("../../../../assets/Seta.png")}
          resizeMode="contain"
        ></Image>
        <TouchableOpacity>
          <Image
            source={require("../../../../assets/Personagem.png")}
            resizeMode="contain"
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container_body: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 80,
    gap: 25,
  },
  conteiner_bt: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
  },
  conteiner_txt: {
    width: "90%",
  },
});
