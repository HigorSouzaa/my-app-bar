import React from 'react';
import { StyleSheet,View, Text, Image, TouchableOpacity} from 'react-native';



export default function Body() {
  return (
    <View style={styles.container_body}>
        <Image
            source={require('../../../../assets/bodyFun.png')}
            resizeMode="contain"> 
        </Image>
    </View>
  );
}

const styles = StyleSheet.create({
    container_body: {
        alignItems: 'center',
        marginTop: 120
    },
});