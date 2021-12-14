import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import Home from '../home/Home';
import TelaDeLogin from '../TelaDeLogin/TelaDeLogin';
import api from '../../service/api';

const TelaDeCadastro = () => {
  const [nome, setNome] = useState('');
  const [usuario, setUsuario] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [email, setEmail] = useState('');
  const [bairro, setBairro] = useState('');
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [complemento, setComplemento] = useState('');
  const [estado, setEstado] = useState('');
  const [numero, setNumero] = useState('');
  const [rua, setRua] = useState('');
  console.log(handleAdicionarLista);
  async function handleAdicionarLista() {
    try {
      await api.post('/cliente/', {
        nome: nome,
        usuario: usuario,
        cpf: cpf,
        dataNascimento: dataNascimento,
        email: email,
        endereco: {
          bairro: bairro,
          cep: cep,
          cidade: cidade,
          complemento: complemento,
          estado: estado,
          numero: numero,
          rua: rua,
        },
      });
      navigation.goBack(TelaDeLogin);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Crie uma conta</Text>
        <CustomInput placeholder="Cpf" value={cpf} setValue={setCpf} />
        <CustomInput
          placeholder="Data de Nascimento"
          value={dataNascimento}
          setValue={setDataNascimento}
          formtat
        />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput placeholder="Bairro" value={bairro} setValue={setBairro} />

        <CustomInput placeholder="Cep" value={cep} setValue={setCep} />
        <CustomInput placeholder="Cidade" value={cidade} setValue={setCidade} />
        <CustomInput
          placeholder="Complemento"
          value={complemento}
          setValue={setComplemento}
        />
        <CustomInput placeholder="Estado" value={estado} setValue={setEstado} />
        <CustomInput placeholder="Numero" value={numero} setValue={setNumero} />
        <CustomInput placeholder="Rua" value={rua} setValue={setRua} />
        <CustomInput placeholder="Nome" value={nome} setValue={setNome} />
        <CustomInput
          placeholder="Usuario"
          value={usuario}
          setValue={setUsuario}
        />

        <TouchableOpacity
          style={{
            borderColor: '#232333',
            borderRadius: 5,
            borderWidth: 1.5,
            margin: 10,
            backgroundColor: '#152536',
          }}
          onPress={handleAdicionarLista}>
          <Text style={{fontSize: 20, padding: 3, color: '#ffffff'}}>
            CRIAR CONTA
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051c60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#fdb075',
  },
});

export default TelaDeCadastro;
