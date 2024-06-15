import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, ScrollView, Text, Image, TouchableOpacity, TextInput, Modal, Button } from 'react-native';

const initialPedidos = [
  { id: 1, nome: 'P. Kibe G', numero: 1, quantidade: 1, precoUnitario: 240 },
  { id: 2, nome: 'P. Esfiha', numero: 2, quantidade: 2, precoUnitario: 150 },
  { id: 3, nome: 'P. Pizza', numero: 3, quantidade: 1, precoUnitario: 150 },
  { id: 4, nome: 'P. Pastel', numero: 4, quantidade: 3, precoUnitario: 60 },
  { id: 5, nome: 'P. Coxinha', numero: 5, quantidade: 2, precoUnitario: 50 },
  { id: 6, nome: 'P. Bolinho de Bacalhau', numero: 6, quantidade: 1, precoUnitario: 120 },
  { id: 7, nome: 'P. Empada', numero: 7, quantidade: 1, precoUnitario: 90 },
  { id: 8, nome: 'P. Brigadeiro', numero: 8, quantidade: 10, precoUnitario: 20 },
  { id: 9, nome: 'P. Churros', numero: 9, quantidade: 5, precoUnitario: 15 },
  { id: 10, nome: 'P. Tapioca', numero: 10, quantidade: 4, precoUnitario: 40 },
];

export default function ScrollViewPedidos() {
  const [pedidos, setPedidos] = useState(initialPedidos);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedPedido, setSelectedPedido] = useState(null);
  const [editQuantidade, setEditQuantidade] = useState('');

  const handleEdit = (pedido) => {
    setSelectedPedido(pedido);
    setEditQuantidade(pedido.quantidade.toString());
    setModalVisible(true);
  };

  const handleDelete = (id) => {
    setPedidos(pedidos.filter(pedido => pedido.id !== id));
  };

  const handleSave = () => {
    setPedidos(pedidos.map(pedido => {
      if (pedido.id === selectedPedido.id) {
        const novaQuantidade = parseInt(editQuantidade, 10);
        const novoValorTotal = selectedPedido.precoUnitario * novaQuantidade;
        return { ...pedido, quantidade: novaQuantidade, valorTotal: novoValorTotal };
      }
      return pedido;
    }));
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.outerContainer}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {pedidos.map((pedido) => (
            <View key={pedido.id} style={styles.sefaScrollView}>
              <View style={styles.nomePedido}>
                <Text style={styles.txtColorNomePedidos}>{pedido.nome}</Text>
              </View>
              <View style={styles.numPedido}>
                <Text style={styles.txtColorPedidos}>{pedido.numero}</Text>
              </View>
              <View style={styles.quantidade}>
                <Text style={styles.txtColorPedidos}>{pedido.quantidade}</Text>
              </View>
              <View style={styles.valorTotal}>
                <Text style={styles.txtColorNomePedidos}>R${pedido.precoUnitario * pedido.quantidade}</Text>
                <TouchableOpacity onPress={() => handleEdit(pedido)}>
                  <Image 
                    source={require('../../../../../assets/editar.png')}
                    style={styles.icon}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDelete(pedido.id)}>
                  <Image 
                    source={require('../../../../../assets/lixo.png')}
                    style={styles.icon}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
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
            <Button title="Cancelar" onPress={() => setModalVisible(false)} />
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  txtColorTabela: {
    color: 'white',
    fontSize: 14
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#BA690B',
    alignItems: 'center',
  },
  outerContainer: {
    flex: 1,
    backgroundColor: '#FDD9B8',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 3,
    width: 380,
    maxHeight: 350,
    marginTop: 450,
  },
  scrollViewContent: {
    alignItems: 'center',
  },
  sefaScrollView: {
    width: 370,
    height: 70,
    marginTop: 10,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 5,
    borderStyle: 'dotted',
    borderColor: '#CE7A16'
  },
  nomePedido: {
    width: 100,
    height: 60,
    borderRightWidth: 4,
    borderStyle: 'dotted',
    borderColor: '#CE7A16',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 10
  },
  numPedido: {
    width: 50,
    height: 60,
    borderRightWidth: 4,
    borderStyle: 'dotted',
    borderColor: '#CE7A16',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  quantidade: {
    width: 50,
    height: 60,
    borderRightWidth: 4,
    borderStyle: 'dotted',
    borderColor: '#CE7A16',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  valorTotal: {
    width: 140,
    height: 60,
    marginLeft: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtColorPedidos: {
    color: '#6C2121',
    fontSize: 20
  },
  txtColorNomePedidos: {
    color: '#6C2121',
    fontSize: 20
  },
  icon: {
    width: 25,
    marginLeft: 15
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
