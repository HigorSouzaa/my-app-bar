import React, {useState} from 'react';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity, Alert, } from 'react-native';
import db from '../../../services/firebaseConfig'
import {  collection, query, where, getDocs, writeBatch} from 'firebase/firestore';


export default function Body() {
    const [numMesa, setNumMesa] = useState('')
    const onPreesFecharMesar = async () => {
        if (!numMesa) {
          Alert.alert('Preencha todos os campos!!');
          return;
        }
      
        Alert.alert(
          'Confirmação',
          `Tem certeza que deseja fechar a mesa nao tera como voltar atras?`,
          [
            {
              text: 'Cancelar',
              style: 'cancel',
            },
            {
              text: 'Sim',
              onPress: async () => {
                try {
                    const q = query(collection(db, 'Pedidos'), where('Mesa', '==', numMesa));
                    const querySnapshot = await getDocs(q);
        
                        if (!querySnapshot.empty) {
                            const batch = writeBatch(db);
                            querySnapshot.forEach(doc => {
                                batch.delete(doc.ref);
                            });
                            await batch.commit();
        
                            Alert.alert('Mesa ' + numMesa + ' foi fechada com sucesso!');
                        } else {
                            Alert.alert('Nenhuma mesa encontrada com o número ' + numMesa);
                        }
                } catch(erro) {
                    Alert.alert("Erro ao finalizar mesa: " + erro)
                    console.log(erro)
                }
                clearInputs();
              },
            },
          ],
          { cancelable: false }
        );
    };
    const clearInputs = () => {
        setNumMesa('');
    }
    return (
        <View style={styles.container}>
            <Image
                source={require('../../../../assets/txtFinalizarMesa.png')}
                style={{marginTop: 120}}
                resizeMode="contain"
            ></Image>
            <View style={styles.campoInput}>
                <Text style={styles.txtPedidos}>N. Mesa:</Text>
                    <TextInput
                        placeholder='0'
                        placeholderTextColor={'#D8D8D8'}
                        style={styles.inputPedidos}
                        keyboardType="numeric"
                        value={numMesa}
                        onChangeText={setNumMesa}
                    />
            </View>
            <View style={{top: 80}}>
                <TouchableOpacity style={styles.btFazerPedidos} onPress={onPreesFecharMesar}>
                    <Text style={styles.txtButton}>Fechar Conta</Text>
                </TouchableOpacity>
            </View>
            <Image
                source={require('../../../../assets/img1.1.png')}
                style={{marginTop: 100}}
                resizeMode="contain"
            ></Image>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
    },
    btFazerPedidos: {
        backgroundColor: '#CE7A16',
        borderRadius: 15,
        width: 250,
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        borderWidth: 2,
        borderColor: "#FFFFFF",
        elevation: 5,
    },
    txtButton: {
        color: '#D8D8D8',
        fontSize: 22,
        letterSpacing: 2
    },
    txtPedidos: {
        fontSize: 22,
        color: 'white',
    },
    inputPedidos: {
        fontSize: 22,
        marginHorizontal: 10,
        color: '#D8D8D8',
        width: 200
    },
    campoInput: {
        top: 20,
        width: 350,
        height: 60,
        backgroundColor: '#CE7A16',
        elevation: 10,
        borderRadius: 15,
        padding: 10,
        paddingLeft: 20,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row'
    }
});
