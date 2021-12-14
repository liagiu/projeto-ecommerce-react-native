import React, {useContext, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {AuthContext} from '../../context/authContext';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TelaDeCadastro from '../TelaDeCadastro/TelaDeCadastro';

const TelaDeLogin = ({navigation}) => {
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');

  async function handleLogin() {
    //API
    const user = {
      email,
      senha,
    };
    setUsuario(user);
    await AsyncStorage.setItem('USER', JSON.stringify(user));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>
      <TextInput
        value={usuario}
        onChangeText={setUsuario}
        placeholder="Usuario"
        style={styles.inputContainer}
      />
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        style={styles.inputContainer}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CADASTRO')}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TelaDeLogin;
