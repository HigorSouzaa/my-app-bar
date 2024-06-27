import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import db from "../../../services/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

export default function ProductRegistration() {
  const [numPedido, setNumPedido] = useState("");
  const [nomePedido, setNomePedido] = useState("");
  const [valor, setValor] = useState("");

  const onPressCadastrarProduto = async () => {
    if (numPedido && nomePedido && valor) {
      try {
        const docData = {
          NumPedido: parseInt(numPedido),
          NomePedido: nomePedido,
          Valor: valor,
        };

        await addDoc(collection(db, "Cardapio"), docData);
        alert("Produto cadastrado com sucesso!");
        clearInputs();
      } catch (error) {
        alert("Erro ao cadastrar produto: " + error);
      }
    } else {
      Alert.alert("Preencha todos os campos!");
    }
  };

  const clearInputs = () => {
    setNumPedido("");
    setNomePedido("");
    setValor("");
  };

  return (
    <View style={{ display: "flex", alignItems: "center", top: 10 }}>
      <View style={styles.campoInput}>
        <Text style={styles.txtLabels}>Nome Pedido:</Text>
        <TextInput
          placeholder="Nome do pedido"
          placeholderTextColor={"#D8D8D8"}
          style={styles.inputFields}
          value={nomePedido}
          onChangeText={setNomePedido}
        />
      </View>
      <View style={styles.campoInput}>
        <Text style={styles.txtLabels}>Num Pedido:</Text>
        <TextInput
          placeholder="0"
          placeholderTextColor={"#D8D8D8"}
          style={styles.inputFields}
          keyboardType="numeric"
          value={numPedido}
          onChangeText={setNumPedido}
        />
      </View>
      <View style={styles.campoInput}>
        <Text style={styles.txtLabels}>Valor:</Text>
        <TextInput
          placeholder="0.00"
          placeholderTextColor={"#D8D8D8"}
          style={styles.inputFields}
          keyboardType="numeric"
          value={valor}
          onChangeText={setValor}
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.btCadastrarProduto}
          onPress={onPressCadastrarProduto}
        >
          <Text style={styles.txtButton}>Cadastrar Produto</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={require("../../../../assets/img1.2.png")}
        resizeMode="contain"
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  btCadastrarProduto: {
    backgroundColor: "#CE7A16",
    borderRadius: 15,
    width: 250,
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: 30,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    elevation: 5,
  },
  txtButton: {
    color: "#D8D8D8",
    fontSize: 22,
    letterSpacing: 2,
  },
  txtLabels: {
    fontSize: 22,
    color: "white",
  },
  inputFields: {
    fontSize: 22,
    marginHorizontal: 10,
    color: "#D8D8D8",
    width: 200,
  },
  campoInput: {
    width: 350,
    height: 60,
    backgroundColor: "#CE7A16",
    elevation: 10,
    borderRadius: 15,
    padding: 10,
    paddingLeft: 20,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
});
