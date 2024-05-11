import React from 'react';
import { StyleSheet,View, Text, Image, TouchableOpacity} from 'react-native';
import PopUp from './PopUp/popUp';


export default function CabecalhoPedidos() {
  return (
    <View style={{height: 140, justifyContent: "flex-end"}}>
        <View style={styles.container_header}>
            <View style={styles.nav}>
                <TouchableOpacity>
                    <Image
                        source={require('../../../../assets/Pedidos.png')}
                        resizeMode="contain"> 
                    </Image>
                </TouchableOpacity>
                <PopUp></PopUp>
            </View>
                <Image
                    source={require('../../../../assets/miniLogo.png')}
                    style={{ width: 100}}
                    resizeMode="contain"> 
                </Image>
        </View>
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