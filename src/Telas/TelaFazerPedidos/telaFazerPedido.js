import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import CabecalhoPedido from './CabecalhoPedidos/cabecalho';
import BodyPedidos from './BodyPedidos/bodyPedidos';

export default function TelaFazerPedidos() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <CabecalhoPedido />
        <BodyPedidos></BodyPedidos>
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
