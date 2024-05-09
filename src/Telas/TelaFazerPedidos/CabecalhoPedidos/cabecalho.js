import React from 'react';
import { StyleSheet,View, Text, Image, TouchableOpacity} from 'react-native';



export default function CabecalhoPedidos() {
  return (
    <View style={styles.container_header}>
        <View style={styles.nav}>
            <TouchableOpacity>
                <Image
                    source={require('../../../../assets/Pedidos.png')}
                    resizeMode="contain"> 
                </Image>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={require('../../../../assets/mesas.png')}
                    resizeMode="contain"> 
                </Image>
            </TouchableOpacity>
        </View>
            <Image
                source={require('../../../../assets/miniLogo.png')}
                style={{ width: 100}}
                resizeMode="contain"> 
            </Image>
    </View>
  );
}

const styles = StyleSheet.create({
    container_header: {
         flexDirection: "row",
         alignItems: "center",
         justifyContent: 'space-evenly',
         width: '100%',         
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
});