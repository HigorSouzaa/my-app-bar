import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import CabecalhoPedido from './CabecalhoPedidos/cabecalho';
import Body from './Body/body';

export default function TelaEditarMesa() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <CabecalhoPedido />
        <Body></Body>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#BA690B',
  },
  container: {
    flex: 1,
  },
});
