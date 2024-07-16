import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  Switch,
} from "react-native";
import db from "../../../services/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

export default function Inputs() {
  const [nomeFuncionario, setNomeFuncionario] = useState("");
  const [loginFuncionario, setLoginFuncionario] = useState("");
  const [cpfFuncionario, setCpfFuncionario] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const onPressCadastrarFuncionario = async () => {
    if (nomeFuncionario && loginFuncionario && cpfFuncionario) {
      try {
        const docData = {
          Nome: nomeFuncionario,
          Login: loginFuncionario,
          Cpf: cpfFuncionario,
          Adm: isAdmin,
        };

        await addDoc(collection(db, "Users"), docData);
        alert("Funcionário cadastrado com sucesso!");
        clearInputs();
      } catch (error) {
        alert("Erro ao cadastrar funcionário: " + error);
      }
    } else {
      Alert.alert("Preencha todos os campos!");
    }
  };

  const clearInputs = () => {
    setNomeFuncionario("");
    setLoginFuncionario("");
    setCpfFuncionario("");
    setIsAdmin(false);
  };

  return (
    <View style={{ display: "flex", alignItems: "center", top: 25 }}>
      <View style={styles.campoInput}>
        <Text style={styles.txtLabels}>Nome:</Text>
        <TextInput
          placeholder="Nome"
          placeholderTextColor={"#D8D8D8"}
          style={styles.inputFields}
          value={nomeFuncionario}
          onChangeText={setNomeFuncionario}
        />
      </View>
      <View style={styles.campoInput}>
        <Text style={styles.txtLabels}>Login:</Text>
        <TextInput
          placeholder="Login"
          placeholderTextColor={"#D8D8D8"}
          style={styles.inputFields}
          value={loginFuncionario}
          onChangeText={setLoginFuncionario}
        />
      </View>
      <View style={styles.campoInput}>
        <Text style={styles.txtLabels}>CPF:</Text>
        <TextInput
          placeholder="000.000.000-00"
          placeholderTextColor={"#D8D8D8"}
          style={styles.inputFields}
          keyboardType="numeric"
          value={cpfFuncionario}
          onChangeText={setCpfFuncionario}
        />
      </View>
      <View style={styles.campoInput}>
        <Text style={styles.txtLabels}>Administrador:</Text>
        <Switch
          value={isAdmin}
          onValueChange={setIsAdmin}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isAdmin ? "#f5dd4b" : "#f4f3f4"}
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.btCadastrarFuncionario}
          onPress={onPressCadastrarFuncionario}
        >
          <Text style={styles.txtButton}>Cadastrar Funcionário</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btCadastrarFuncionario: {
    backgroundColor: "#CE7A16",
    borderRadius: 15,
    width: 290,
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: 60,
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