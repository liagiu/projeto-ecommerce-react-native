import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../pages/home/Home';
import TelaDeCadastro from '../pages/TelaDeCadastro/TelaDeCadastro';
import TelaDeLogin from '../pages/TelaDeLogin/TelaDeLogin';
import Carrinho from '../pages/Carrinho/Carrinho';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="TelaDeLogin"
      screenOptions={{
        headerTitleStyle: {
          fontSize: 25,
          color: '#ffffff',
        },
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#152536',
        },
      }}>
      <Drawer.Screen name="LOGIN" component={TelaDeLogin} />
      <Drawer.Screen name="CADASTRO" component={TelaDeCadastro} />
      <Drawer.Screen name="HOME" component={Home} />
      <Drawer.Screen name="CARRINHO" component={Carrinho} />
    </Drawer.Navigator>
  );
}
export default MyDrawer;
