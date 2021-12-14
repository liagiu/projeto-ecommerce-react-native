import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TelaDeLogin from '../pages/TelaDeLogin/TelaDeLogin';
import TelaDeCadastro from '../pages/TelaDeCadastro/TelaDeCadastro';

const AuthStack = createNativeStackNavigator();

const AuthRoute = () => {
  <AuthStack.Navigator>
    <AuthStack.Screen name="LOGIN" component={TelaDeLogin} />
    <AuthStack.Screen name="CADASTRO" component={TelaDeCadastro} />
  </AuthStack.Navigator>;
};

export default AuthRoute;
