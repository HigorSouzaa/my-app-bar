import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  ScrollView,
  Modal,
  Button,
} from "react-native";
import db from "../../../services/firebaseConfig";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

export default function Body() {
  const [numMesa, setNumMesa] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [pedidos, setPedidos] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedPedido, setSelectedPedido] = useState(null);
  const [editQuantidade, setEditQuantidade] = useState("");

  useEffect(() => {
    const fetchPedidos = async () => {
      if (numMesa !== "") {
        try {
          const q = query(
            collection(db, "Pedidos"),
            where("Mesa", "==", parseInt(numMesa))
          );
          const querySnapshot = await getDocs(q);
          const pedidosArray = [];
          let contId = 0;
          if (querySnapshot.empty) {
            setIsVisible(false);
          }
          querySnapshot.forEach((doc) => {
            pedidosArray.push({
              id: contId++,
              docId: doc.id, // Adicionando o ID do documento Firestore
              nome: doc.data().NomePedido,
              numero: doc.data().NumPedido,
              quantidade: doc.data().Quantidade,
              precoUnitario: doc.data().ValorTotal,
            });
          });

          setPedidos(pedidosArray);
        } catch (error) {
          Alert.alert("Erro ao buscar pedidos");
        }
      }
    };

    fetchPedidos();
  }, [numMesa]);

  const handleEdit = (pedido) => {
    setSelectedPedido(pedido);
    setEditQuantidade(pedido.quantidade.toString());
    setModalVisible(true);
  };

  const handleDelete = async (id, docId) => {
    try {
      await deleteDoc(doc(db, "Pedidos", docId));
      setPedidos(pedidos.filter((pedido) => pedido.id !== id));
      setIsVisible(false);
    } catch (error) {
      Alert.alert("Erro ao deletar pedido");
    }
  };

  const handleSave = async () => {
    try {
      const novaQuantidade = parseInt(editQuantidade, 10);
      const novoValorTotal = (
        selectedPedido.precoUnitario * novaQuantidade
      ).toFixed(2);

      const pedidoRef = doc(db, "Pedidos", selectedPedido.docId);
      await updateDoc(pedidoRef, {
        Quantidade: novaQuantidade,
      });

      setPedidos(
        pedidos.map((pedido) => {
          if (pedido.id === selectedPedido.id) {
            return {
              ...pedido,
              quantidade: novaQuantidade,
              valorTotal: novoValorTotal,
            };
          }
          return pedido;
        })
      );
      setModalVisible(false);
    } catch (error) {
      Alert.alert("Erro ao salvar pedido");
    }
  };

  const abriPedidos = async () => {
    const q = query(
      collection(db, "Pedidos"),
      where("Mesa", "==", parseInt(numMesa))
    );
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      setIsVisible(!isVisible);
    } else {
      Alert.alert("Mesa não encontrada");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/txtEditarMesa.png")}
        style={{ marginTop: 20 }}
        resizeMode="contain"
      />
      <View style={styles.campoInput}>
        <Text style={styles.txtPedidos}>N. Mesa:</Text>
        <TextInput
          placeholder="0"
          placeholderTextColor={"#D8D8D8"}
          style={styles.inputPedidos}
          keyboardType="numeric"
          value={numMesa}
          onChangeText={setNumMesa}
        />
      </View>
      <View style={{ top: 25 }}>
        <TouchableOpacity style={styles.btEditarPedidos} onPress={abriPedidos}>
          <Text style={styles.txtButton}>Mostrar Pedidos</Text>
        </TouchableOpacity>
      </View>

      {isVisible && (
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.outerContainer}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
              {pedidos.map((pedido) => (
                <View key={pedido.id} style={styles.sefaScrollView}>
                  <View style={styles.nomePedido}>
                    <Text style={styles.txtColorNomePedidos}>
                      {pedido.nome}
                    </Text>
                  </View>
                  <View style={styles.numPedido}>
                    <Text style={styles.txtColorPedidos}>{pedido.numero}</Text>
                  </View>
                  <View style={styles.quantidade}>
                    <Text style={styles.txtColorPedidos}>
                      {pedido.quantidade}
                    </Text>
                  </View>
                  <View style={styles.valorTotal}>
                    <View>
                      <Text style={styles.txtColorNomePedidos}>
                        R$
                        {(pedido.precoUnitario * pedido.quantidade).toFixed(2)}
                      </Text>
                    </View>
                    <View style={styles.view_editExcl}>
                      <TouchableOpacity onPress={() => handleEdit(pedido)}>
                        <Image
                          source={require("../../../../assets/editar.png")}
                          style={styles.icon}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => handleDelete(pedido.id, pedido.docId)}
                      >
                        <Image
                          source={require("../../../../assets/lixo.png")}
                          style={styles.icon}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>

          {selectedPedido && (
            <Modal
              visible={isModalVisible}
              animationType="slide"
              onRequestClose={() => setModalVisible(false)}
            >
              <View style={styles.modalContent}>
                <Text>Quantidade:</Text>
                <TextInput
                  style={styles.input}
                  value={editQuantidade}
                  keyboardType="numeric"
                  onChangeText={(text) => setEditQuantidade(text)}
                />
                <Button title="Salvar" onPress={handleSave} />
                <Button
                  title="Cancelar"
                  onPress={() => setModalVisible(false)}
                />
              </View>
            </Modal>
          )}
        </SafeAreaView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
  },
  btEditarPedidos: {
    backgroundColor: "#CE7A16",
    borderRadius: 15,
    width: 250,
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#FFFFFF",
    elevation: 5,
  },
  txtButton: {
    color: "#D8D8D8",
    fontSize: 22,
    letterSpacing: 2,
  },
  txtPedidos: {
    fontSize: 22,
    color: "white",
  },
  inputPedidos: {
    fontSize: 22,
    marginHorizontal: 10,
    color: "#D8D8D8",
    width: 200,
  },
  campoInput: {
    top: 10,
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
  txtColorTabela: {
    color: "white",
    fontSize: 14,
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#BA690B",
    alignItems: "center",
    top: 35,
  },
  outerContainer: {
    flex: 1,
    backgroundColor: "#FDD9B8",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 3,
    width: 395,
    maxHeight: 350,
  },
  scrollViewContent: {
    alignItems: "center",
  },
  sefaScrollView: {
    width: 370,
    height: 70,
    marginTop: 10,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 5,
    borderStyle: "dotted",
    borderColor: "#CE7A16",
  },
  nomePedido: {
    width: 115,
    height: 60,
    borderRightWidth: 4,
    borderStyle: "dotted",
    borderColor: "#CE7A16",
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 0,
  },
  numPedido: {
    width: 40,
    height: 60,
    borderRightWidth: 4,
    borderStyle: "dotted",
    borderColor: "#CE7A16",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  quantidade: {
    width: 40,
    height: 60,
    borderRightWidth: 4,
    borderStyle: "dotted",
    borderColor: "#CE7A16",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  valorTotal: {
    width: 170,
    height: 60,
    marginLeft: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  txtColorPedidos: {
    color: "#6C2121",
    fontSize: 20,
  },
  txtColorNomePedidos: {
    color: "#6C2121",
    fontSize: 18,
  },
  icon: {
    width: 24,
    marginLeft: 15,
  },
  modalContent: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  view_editExcl: {
    display: "flex",
    flexDirection: "row",
  },
});
