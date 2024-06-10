import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, ScrollView, Text, Image, TouchableOpacity, TextInput } from 'react-native';

const pedidosIniciais = [
  { id: 1, nome: 'P. Kibe G', numero: 1, quantidade: 1, precoUnitario: 240 },
  { id: 2, nome: 'P. Esfiha', numero: 2, quantidade: 2, precoUnitario: 150 },
  { id: 3, nome: 'P. Pastel', numero: 3, quantidade: 3, precoUnitario: 200 },
  { id: 4, nome: 'P. Coxinha', numero: 4, quantidade: 1, precoUnitario: 180 },
  { id: 5, nome: 'P. Bolinha', numero: 5, quantidade: 2, precoUnitario: 170 },
  { id: 6, nome: 'P. Quibe', numero: 6, quantidade: 3, precoUnitario: 160 },
  { id: 7, nome: 'P. Brigadeiro', numero: 7, quantidade: 1, precoUnitario: 150 },
  { id: 8, nome: 'P. Beijinho', numero: 8, quantidade: 2, precoUnitario: 140 },
  { id: 9, nome: 'P. Cajuzinho', numero: 9, quantidade: 3, precoUnitario: 130 },
  { id: 10, nome: 'P. Bomba', numero: 10, quantidade: 1, precoUnitario: 120 },
];

export default function ScrollViewPedidos() {
  const [pedidos, setPedidos] = useState(pedidosIniciais);

  const editarQuantidade = (id, novaQuantidade) => {
    const pedidosAtualizados = pedidos.map(pedido => {
      if (pedido.id === id) {
        return { ...pedido, quantidade: novaQuantidade };
      }
      return pedido;
    });
    setPedidos(pedidosAtualizados);
  };

  const deletarPedido = (id) => {
    const pedidosAtualizados = pedidos.filter(pedido => pedido.id !== id);
    setPedidos(pedidosAtualizados);
  };

  return (
    <SafeAreaView style={estilos.safeArea}>
      <View style={estilos.containerExterno}>
        <ScrollView contentContainerStyle={estilos.conteudoScrollView}>
          {pedidos.map(pedido => (
            <View key={pedido.id} style={estilos.containerPedido}>
              <View style={estilos.nomePedido}>
                <Text style={estilos.textoNomePedido}>{pedido.nome}</Text>
              </View>
              <View style={estilos.numeroPedido}>
                <Text style={estilos.textoPedido}>{pedido.numero}</Text>
              </View>
              <View style={estilos.quantidadePedido}>
                <TextInput
                  style={estilos.textoPedido}
                  value={String(pedido.quantidade)}
                  onChangeText={texto => editarQuantidade(pedido.id, parseInt(texto))}
                  keyboardType="numeric"
                />
              </View>
              <View style={estilos.valorTotal}>
                <Text style={estilos.textoNomePedido}>R${pedido.precoUnitario * pedido.quantidade}</Text>
                <TouchableOpacity onPress={() => editarQuantidade(pedido.id, pedido.quantidade)}>
                  <Image
                    source={require('../../../../../assets/editar.png')}
                    style={estilos.icone}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deletarPedido(pedido.id)}>
                  <Image
                    source={require('../../../../../assets/lixo.png')}
                    style={estilos.icone}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#BA690B',
    alignItems: 'center',
  },
  containerExterno: {
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
  conteudoScrollView: {
    alignItems: 'center',
  },
  containerPedido: {
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
  numeroPedido: {
    width: 50,
    height: 60,
    borderRightWidth: 4,
    borderStyle: 'dotted',
    borderColor: '#CE7A16',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  quantidadePedido: {
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
  textoPedido: {
    color: '#6C2121',
    fontSize: 20
  },
  textoNomePedido: {
    color: '#6C2121',
    fontSize: 20
  },
  icone: {
    width: 25,
    marginLeft: 15
  },
});
