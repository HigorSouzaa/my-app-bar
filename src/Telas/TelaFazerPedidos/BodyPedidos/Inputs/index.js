import React from 'react';
import { StyleSheet,View, Text, Image, TouchableOpacity, TextInput} from 'react-native';

export default function Inputs() {
    return (
        <View>
            <View style={styles.campoInput}>
                <Text style={styles.txtPedidos}>N. Pedido:</Text>
                <TextInput
                    placeholder='Digite o numero do pedido'
                    placeholderTextColor={'#D8D8D8'}
                    style={styles.inputPedidos}
                    keyboardType="numeric"
                ></TextInput>
            </View>
            <View style={styles.campoInput}>
                <Text style={styles.txtPedidos}>N. Mesa:</Text>
                <TextInput
                    placeholder='Digite o numero da mesa'
                    placeholderTextColor={'#D8D8D8'}
                    style={styles.inputPedidos}
                    keyboardType="numeric"
                ></TextInput>
            </View>
            <View style={styles.campoInput}>
                <Text style={styles.txtPedidos}>Quantidade:</Text>
                <TextInput
                    placeholder='Digite a quantidade do pedido'
                    placeholderTextColor={'#D8D8D8'}
                    style={styles.inputPedidos}
                    keyboardType="numeric"
                ></TextInput>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
   txtPedidos: {
        fontSize: 22,
        color: 'white',
    },
    inputPedidos: {
        fontSize: 22,
        marginHorizontal: 10,
        color: '#D8D8D8'
    },
    campoInput: {
        width: 300,
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