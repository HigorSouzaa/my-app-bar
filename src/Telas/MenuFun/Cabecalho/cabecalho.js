import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import PopUp from '../PopUp/popUp';
import { useNavigation } from '@react-navigation/native';

export default function Cabecalho() {

    const navigation = useNavigation();
    const onPressNavFazerPedidos = () => {
        navigation.navigate('TelaFazerPedidos')
    } 

    return (
        <View style={styles.container_header}>
            <View style={styles.nav}>
                <TouchableOpacity onPress={onPressNavFazerPedidos}>
                    <Image
                        source={require('../../../../assets/Pedidos.png')}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <PopUp></PopUp>
            </View>
            <Image
                source={require('../../../../assets/miniLogo.png')}
                style={{ width: 100 }}
                resizeMode="contain"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container_header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-evenly',
        width: '100%',
        marginTop: -140
    },

    nav: {
        display: 'flex',
        flexDirection: "row",
        backgroundColor: 'white',
        width: 195,
        height: 64,
        borderRadius: 20,
        borderColor: "#A95C01",
        borderWidth: 5,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    popUpContainer: {
        position: 'absolute',
        top: 55,
        left: 20,
        right: 120,
        bottom: 100,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
