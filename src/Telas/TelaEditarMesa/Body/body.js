import React, {useState} from 'react';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity, Alert, } from 'react-native';
import db from '../../../services/firebaseConfig'
import {  collection, query, where, getDocs, writeBatch} from 'firebase/firestore';


export default function Body() {
    const [numMesa, setNumMesa] = useState('')
    return (
        <View style={styles.container}>
            <Image
                source={require('../../../../assets/txtEditarMesa.png')}
                style={{marginTop: 20}}
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
            <View style={{top: 25}}>
                <TouchableOpacity style={styles.btEditarPedidos} >
                    <Text style={styles.txtButton}>Mostrar Pedidos</Text>
                </TouchableOpacity>
            </View>
            
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
    },
    btEditarPedidos: {
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
        top: 10,
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
