import React from 'react';
import {StyleSheet, View } from 'react-native';
import CabecalhoPedido from "./CabecalhoPedidos/cabecalho"
export default function TelaFazerPedidos() {
  return (
    <View style={styles.conteiner}>
      <CabecalhoPedido></CabecalhoPedido>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    backgroundColor: '#BA690B',
  }
})
