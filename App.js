import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Home from './src/pages/home/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MyDrawer from './src/routes/app.routes';
import CarrinhoContext from './src/context/CarrinhoContext';

function App() {
  return (
    <CarrinhoContext>
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </CarrinhoContext>
  );
}

export default App;
