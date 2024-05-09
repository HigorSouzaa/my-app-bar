import React from 'react';
import { Image,View } from 'react-native';

export default function Logo() {
  return (
    <View  style={{display: 'flex', alignItems: 'center'}}>
        <Image
            source={require('../../../../assets/logo.png')}
            style={{ width: 305, marginTop: 70 }}
            resizeMode="contain"
            
        ></Image>
    </View>
  );
}