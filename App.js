import { StyleSheet, View } from "react-native";
import Main from "./src/Telas/Main/main";
import MenuFun from "./src/Telas/MenuFun/menuFun";
import TelaFazerPedidos from "./src/Telas/TelaFazerPedidos/telaFazerPedido";
import TelaFinalizarMesa from "./src/Telas/TelaFinalizaMesa/finalizarMesa";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import TelaEditarMesa from "./src/Telas/TelaEditarMesa/telaEditarMesa";
import MenuAdm from "./src/Telas/MenuAdm/menuAdm";
import TelaAdmFuncoes from "./src/Telas/TelaAdmFuncoes/TelaAdmFuncoes";
import TelaCardastrarPedidos from "./src/Telas/TelaCardastrarPedidos/TelaCardastrarPedidos";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="TelaCardastrarPedidos"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="MenuFun" component={MenuFun} />
      <Stack.Screen name="MenuAdm" component={MenuAdm} />
      <Stack.Screen name="TelaFazerPedidos" component={TelaFazerPedidos} />
      <Stack.Screen name="TelaFinalizarMesa" component={TelaFinalizarMesa} />
      <Stack.Screen name="TelaEditarMesa" component={TelaEditarMesa} />
      <Stack.Screen name="TelaAdmFuncoes" component={TelaAdmFuncoes} />
      <Stack.Screen name="TelaCardastrarPedidos" component={TelaCardastrarPedidos} />

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
    backgroundColor: "#BA690B",
    alignItems: "center",
    justifyContent: "center",
  },
});
//
