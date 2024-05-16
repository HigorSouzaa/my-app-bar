import React, {useState} from 'react';
import { StyleSheet,View, Text, Image, TouchableOpacity, TextInput, Button} from 'react-native';
import db from '../../../../services/firebaseConfig';
import {addDoc, collection, query, where, getDocs} from 'firebase/firestore'


export default function Inputs() {
    const [numeroPedido, setNumeroPedido] = useState('');
    const [numeroMesa, setNumeroMesa] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [nomePedido, setNomePedido] = useState('');
    const [valorPedido, setValorPedido] = useState('');

    const onPressFazerPedido = async () => {
        try {
            const q = query(collection(db, "Cardapio"), where("NumPedido", "==", numeroPedido));
            const querySnapshot = await getDocs(q);
            
            querySnapshot.forEach((doc) => {
                const data = doc.data([0]);
                setNomePedido(data.Nome);
                setValorPedido(data.Valor);
            });

            const docData = {
                NumPedido: numeroPedido,
                Mesa: numeroMesa,
                Quantidade: quantidade,
                NomePedido: nomePedido,
                ValorPedido: valorPedido
            };

            await addDoc(collection(db, "Mesas"), docData);
            alert("Pedido feito com sucesso!");
            clearInputs();
        } catch (error) {
            alert("Erro ao fazer pedido: " + error);
        }
    };

    const clearInputs = () => {
        setNumeroPedido('');
        setNumeroMesa('');
        setQuantidade('');
        setNomePedido('');
        setValorPedido('');
    };

    return (
        <View style={{display:'flex',alignItems: 'center',top: 60,}}>
            <View style={styles.campoInput}>
                <Text style={styles.txtPedidos}>N. Pedido:</Text>
                <TextInput
                    placeholder='0'
                    placeholderTextColor={'#D8D8D8'}
                    style={styles.inputPedidos}
                    keyboardType="numeric"
                    value={numeroPedido}
                    onChangeText={setNumeroPedido}
                ></TextInput>
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
                ></TextInput>
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
                ></TextInput>
            </View>
            <View>
                <TouchableOpacity style={styles.btFazerPedidos} onPress={onPressFazerPedido} >
                        <Text style={styles.txtButton}>Fazer Pedido</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    btFazerPedidos: {
        backgroundColor: '#CE7A16',
        borderRadius: 20,
        width: 250,
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: 80,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 100,
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
        width:  200
       
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