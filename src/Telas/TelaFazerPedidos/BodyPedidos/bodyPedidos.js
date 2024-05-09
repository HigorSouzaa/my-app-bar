import React from 'react';
import { StyleSheet,View, Image} from 'react-native';
import Inputs from './Inputs/index';

export default function BodyPedidos() {
  return (
    <View style={styles.txtPedidos}>
       <Image
            source={require("../../../../assets/txtPedidos.png")}
            resizeMode="contain"
       ></Image>

    </View>
  );
}

const styles = StyleSheet.create({
   txtPedidos: {
        top: 80,
    }
});