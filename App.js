import { StyleSheet, View } from 'react-native';
import Main from './src/Telas/Main/main';
import MenuFun from './src/Telas/MenuFun/menuFun'
import TelaFazerPedidos from './src/Telas/TelaFazerPedidos/index'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function MyStack() {
  return (
      <Stack.Navigator initialRouteName="Main" screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="MenuFun" component={MenuFun} />
        <Stack.Screen name="TelaFazerPedidos" component={TelaFazerPedidos} />
      </Stack.Navigator>
  );
}



export default function App() {
  return (
      <NavigationContainer>
        <MyStack></MyStack>
      </NavigationContainer>
  );
}
// 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BA690B',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// 