import { StyleSheet, Text, View } from 'react-native';
import CabecalhoPedidos from '../TelaFazerPedidos/CabecalhoPedidos/cabecalho';
import BodyPedidos from '../TelaFazerPedidos/BodyPedidos/bodyPedidos';



export default function TelaFazerPedidos() {
  return (
    <View style={styles.container}>
        <CabecalhoPedidos></CabecalhoPedidos>
        <BodyPedidos></BodyPedidos>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 80,
    backgroundColor: "#BA690B",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
