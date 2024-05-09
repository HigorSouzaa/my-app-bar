import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Cabecalho from './Cabecalho/cabecalho';
import Body from './Body/body';

export default function MenuFun() {
  return (
    <View style={styles.container}>  
        <Cabecalho></Cabecalho>
        <Body></Body>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BA690B',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
