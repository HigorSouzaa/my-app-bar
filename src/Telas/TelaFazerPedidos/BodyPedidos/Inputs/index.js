import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import db from '../../../../services/firebaseConfig';
import { addDoc, collection, query, where, getDocs } from 'firebase/firestore';

export default function Inputs() {
    const [numeroPedido, setNumeroPedido] = useState('');
    const [numeroMesa, setNumeroMesa] = useState('');
    const [quantidade, setQuantidade] = useState('');

    const onPressFazerPedido = async () => {
        if(!numeroPedido == '' && !numeroMesa == '' && !quantidade == '') {
            try {
                const numPedido = parseInt(numeroPedido); // Converte para número
                const q = query(collection(db, "Cardapio"), where("NumPedido", "==", numPedido));
                const querySnapshot = await getDocs(q);
    
                if (!querySnapshot.empty) {
                    let tempNomePedido = '';
                    let tempValorPedido = '';
    
                    querySnapshot.forEach((doc) => {
                        const data = doc.data();
                        tempNomePedido = data.NomePedido;
                        tempValorPedido = data.Valor;
                    });
                    const valorTotal = tempValorPedido * quantidade
                    const docData = {
                        NumPedido: numPedido,
                        Mesa: numeroMesa,
                        Quantidade: quantidade,
                        NomePedido: tempNomePedido,
                        ValorTotal: valorTotal
                    };
    
                    await addDoc(collection(db, "Mesas"), docData);
                    alert("Pedido feito com sucesso!");
                    clearInputs();
                } else {
                    alert("Pedido não encontrado no banco de dados.");
                }
            } catch (error) {
                alert("Erro ao fazer pedido: " + error);
            }
        } else {
            Alert.alert('Preencha todos os campos!!')
        }
    };

    const clearInputs = () => {
        setNumeroPedido('');
        setNumeroMesa('');
        setQuantidade('');
    };

    return (
        <View style={{ display: 'flex', alignItems: 'center', top: 60 }}>
            <View style={styles.campoInput}>
                <Text style={styles.txtPedidos}>N. Pedido:</Text>
                <TextInput
                    placeholder='0'
                    placeholderTextColor={'#D8D8D8'}
                    style={styles.inputPedidos}
                    keyboardType="numeric"
                    value={numeroPedido}
                    onChangeText={setNumeroPedido}
                />
            </View>
            <View style={styles.campoInput}>
                <Text style={styles.txtPedidos}>N. Mesa:</Text>
                <TextInput
                    placeholder='0'
                    placeholderTextColor={'#D8D8D8'}
                    style={styles.inputPedidos}
                    keyboardType="numeric"
                    value={numeroMesa}
                    onChangeText={setNumeroMesa}
                />
            </View>
            <View style={styles.campoInput}>
                <Text style={styles.txtPedidos}>Quantidade:</Text>
                <TextInput
                    placeholder='0'
                    placeholderTextColor={'#D8D8D8'}
                    style={styles.inputPedidos}
                    keyboardType="numeric"
                    value={quantidade}
                    onChangeText={setQuantidade}
                />
            </View>
            <View>
                <TouchableOpacity style={styles.btFazerPedidos} onPress={onPressFazerPedido}>
                    <Text style={styles.txtButton}>Fazer Pedido</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    btFazerPedidos: {
        backgroundColor: '#CE7A16',
        borderRadius: 15,
        width: 250,
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: 80,
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
