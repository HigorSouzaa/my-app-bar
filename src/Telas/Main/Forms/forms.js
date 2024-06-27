import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faUser,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import db from "../../../services/firebaseConfig";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";

function Forms() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const logarAdmFuncionario = async () => {
    try {
      const queryUser = query(
        collection(db, "Users"),
        where("Email", `==`, email)
      );
      const querySnapshot = await getDocs(queryUser);
      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const userData = userDoc.data();

        if (userData.Senha === password) {
          if (userData.Adm === true) {
            Alert.alert(`Login feito com sucesso para ADM`);
            navigation.navigate("MenuFun");
          } else {
            Alert.alert(`Login feito com sucesso`);
          }
        } else {
          Alert.alert(`Erro ao efetuar login revise seus dados`);
        }
      } else {
        Alert.alert(`Usuario nao encontrado`);
      }
    } catch (error) {
      Alert.alert(`Erro ao buscar usuario`);
    }
  };

  // const onPressEntrar = () => {
  //     createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       const user = userCredential.user;
  //         Alert.alert('Usuario criado com sucesso!!!');
  //         setEmail('');
  //         setPassword('');
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       Alert.alert('Erro ao criar usuario!!!');
  //       console.log('Erro ao criar usuario!!!');
  //     });
  // }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, color: "#fff" }}>Funcionário ou Adm</Text>
      <View>
        <Text style={{ fontSize: 28, color: "white" }}>Login</Text>
        <View style={styles.campoInput}>
          <FontAwesomeIcon icon={faUser} size={35} color="white" />
          <TextInput
            style={styles.input}
            placeholder="seu@email.com"
            placeholderTextColor={"white"}
            value={email}
            onChangeText={setEmail}
          ></TextInput>
        </View>
      </View>
      <View>
        <Text style={{ fontSize: 28, color: "white" }}>Senha</Text>
        <View style={styles.campoInput}>
          <FontAwesomeIcon icon={faLock} size={35} color="white" />
          <TextInput
            style={styles.input}
            placeholder="***********"
            placeholderTextColor={"white"}
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          ></TextInput>
          <TouchableOpacity
            onPress={toggleShowPassword}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              size={25}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={logarAdmFuncionario}>
        <Image
          source={require("../../../../assets/btEntrar.png")}
          style={{ width: 305, marginTop: 15 }}
          resizeMode="contain"
        ></Image>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#BA690B",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
  },

  input: {
    // backgroundColor: 'black',
    marginLeft: 10,
    color: "white",
    fontSize: 20,
    maxWidth: 270,
    width: 270,
  },

  campoInput: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "flex-start",
    padding: 10,
    borderRadius: 10,
    width: 360,
    backgroundColor: "#CE7A16",
    height: 60,
    elevation: 5,
  },
});

export default Forms;
