import React, { useState } from 'react';
import { 
  View,
  Image, 
  TouchableOpacity,
  Modal, 
  SafeAreaView, 
  StyleSheet, 
  Alert, 
  Text
} from 'react-native';

  const PopUp = () => {
    const [visible, setVisible] = useState(false);
    const abrirMesa = () => {
      return Alert.alert('mesa aberta')
  }

  const fecharModal = () => {
    return setVisible(false)
  }
  return (
    <>
      <TouchableOpacity onPress={() => setVisible(true)}>
        <Image
          source={require('../../../../../assets/mesas.png')}
          resizeMode="contain">
        </Image>
      </TouchableOpacity>
      <Modal transparent visible={visible}>
        <View style={styles.popUpContainer}>
          <View style={styles.container_bt}>
            <View style={styles.view_bt}> 
              <TouchableOpacity >
                <Text style={styles.btAbrir}>Abrir Mesa</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.view_bt}> 
              <TouchableOpacity >
                <Text style={styles.btAbrir}>Fechar Mesa</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.container_bt2}>
            <View style={styles.view_bt}> 
              <TouchableOpacity >
                <Text style={styles.btAbrir}>Editar Mesa</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.view_bt_fechar}> 
              <TouchableOpacity onPress={fecharModal}>
                <View style={styles.btFechar}>
                  <Image
                    source={require('../../../../../assets/x.png')}
                    resizeMode="contain"
                    style={{width:25}}>
                  </Image>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  popUpContainer: {
    position: 'absolute',
    borderColor: '#A95C01',
    backgroundColor: '#fff',
    borderWidth: 5,
    width: 325,
    height: 120,
    paddingVertical: 10,
    paddingHorizontal: 10,
    top: 90,
    left: 40,
    borderRadius: 30,
    justifyContent: 'space-around'
  },
  container_bt: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  container_bt2: {
    display: 'flex',
    flexDirection: 'row',
    left: 5
  },
  view_bt:  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
    padding: 2,
    borderWidth: 3 ,
    borderColor: '#A95C01',
    borderRadius: 15,
    backgroundColor: '#CE7A16'
    
  },
  view_bt_fechar: {
    width: 30,
    height: 30,
    display: 'flex',
    left: 115,
    top: 10

  },
  btAbrir: {
    color: 'white',
    fontSize: 19,
    fontWeight: 'bold'
  },
  btFechar: {
    display: 'flex',
    alignItems: 'flex-end',
  }
});

export default PopUp;