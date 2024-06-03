import React from 'react';
import { StyleSheet, SafeAreaView, View, ScrollView, Text } from 'react-native';

export default function ScrollViewPedidos() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.nomeTabela}>
        <View>Nome</View>
        <View>NumPedido</View>
        <View>Quantidade</View>
        <View>ValorTotal</View>
      </View>
      <View style={styles.outerContainer}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.sefaScrollView}>
            <View style={styles.nomePedido}>
              <Text style={styles.txtColorNomePedidos}>P. Kibe G</Text>
            </View>
            <View style={styles.numPedido}>
              <Text style={styles.txtColorPedidos}>1</Text>
            </View>
            <View style={styles.quantidade}>
              <Text style={styles.txtColorPedidos}>1</Text>
            </View>
            <View style={styles.valorTotal}>

            </View>
          </View>
          <View style={styles.sefaScrollView}>
            <View style={styles.nomePedido}>
              <Text style={styles.txtColorNomePedidos}>Heineken</Text>
            </View>
            <View style={styles.numPedido}>
              <Text style={styles.txtColorPedidos}>1</Text>
            </View>
            <View style={styles.quantidade}>
              <Text style={styles.txtColorPedidos}>1</Text>
            </View>
            <View style={styles.valorTotal}>

            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#BA690B',
    alignItems: 'center',
  },
  nomeTabela: {
    width: 380,
    backgroundColor: 'black',
    height: 30,
    marginTop: 450,
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
  },
  scrollViewContent: {
    alignItems: 'center',
  },
  sefaScrollView: {
    width: 370,
    height: 70,
    // backgroundColor: 'black',
    marginTop: 10,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 5,
    borderStyle: 'dotted',
    borderColor: '#CE7A16'
  },
  nomePedido: {
    // backgroundColor: 'red',
    width: 120,
    height: 60,
    borderRightWidth: 4,
    borderStyle: 'dotted',
    borderColor: '#CE7A16',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 10
  },
  numPedido: {
    // backgroundColor: 'brown',
    width: 60,
    height: 60,
    borderRightWidth: 4,
    borderStyle: 'dotted',
    borderColor: '#CE7A16',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  quantidade: {
    // backgroundColor: 'yellow',
    width: 60,
    height: 60,
    borderRightWidth: 4,
    borderStyle: 'dotted',
    borderColor: '#CE7A16',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'

  },
  valorTotal: {
    // backgroundColor: 'pink',
    width: 100,
    height: 60,

  },
  txtColorPedidos: {
    color: '#6C2121',
    fontSize: 25
  },
  txtColorNomePedidos: {
    color: '#6C2121',
    fontSize: 20
  }
});
