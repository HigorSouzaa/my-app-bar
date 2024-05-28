import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';


export default function ScrollViewPedidos() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container_scrollView}>
       
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#BA690B',
        alignItems: 'center'
    },
    container_scrollView: {
        top: 480,
        width: 380,
        height: 350,
        backgroundColor: '#FDD9B8',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        elevation: 3

    },
});
