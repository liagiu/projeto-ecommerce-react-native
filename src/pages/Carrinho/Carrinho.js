import React, {useContext, useState, useEffect} from 'react';
import {View, Text, FlatList, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import {CarrinhoContext} from '../../context/CarrinhoContext';
import ItemCarrinho from '../../components/ItemCarrinho/ItemCarrinho';

export default function Carrinho() {
  const [carrinho, setCarrinho] = useContext(CarrinhoContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let valorTotal = 0;
    carrinho.forEach(item => {
      valorTotal += item.valor * item.quantidade;
    });
    setTotal(valorTotal);
  }, [carrinho]);

  return (
    <View style={styles.container}>
      <Text style={styles.titleList}>Seu Carrinho</Text>
      <FlatList
        data={carrinho}
        renderItem={item => <ItemCarrinho item={item} />}
        keyExtractor={item => item.id}
      />
      <View style={styles.carrinhoTotal}>
        <View style={styles.linhaTexto}>
          <Text>({carrinho.length}) Produto(s)</Text>
          <Text>R$ {total}</Text>
        </View>
        <View style={styles.linhaTexto}>
          <Text>Frete</Text>
          <Text>R$ 0,00</Text>
        </View>
        <View style={styles.linhaTexto}>
          <Text style={styles.totalTexto}>Valor Total</Text>
          <Text style={styles.totalValor}>R$ {total}</Text>
        </View>
      </View>
      <Button
        title="Finalizar Pedido"
        color="#152536"
        accessibilityLabel="Finalizar Pedido"
      />
    </View>
  );
}
