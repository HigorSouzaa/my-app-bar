import React from 'react';
import {StyleSheet, View } from 'react-native';
import Logo from '../Main/Logo/logo';
import Forms from '../Main/Forms/forms';
import Footer from '../Main/Footer/footer';

export default function Main() {
  return (
    <View style={styles.conteiner}>
      <Logo></Logo>
      <Forms></Forms>
      <Footer></Footer>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    backgroundColor: '#BA690B',
  }
})
