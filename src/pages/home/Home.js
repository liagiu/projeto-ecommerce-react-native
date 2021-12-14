import React, {useContext, useLayoutEffect, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import ItemSeparator from '../../components/itemSeparator/itemSeparator';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import api from '../../service/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CarrinhoContext} from '../../context/CarrinhoContext';

const Home = () => {
  const [listaCompras, setListaCompras] = useState([]);
  const [carrinho, setCarrinho] = useContext(CarrinhoContext);

  const handleCarrinho = item => {
    if (carrinho.length == 0) {
      item['quantidade'] = 1;
      setCarrinho([item]);
    } else {
      carrinho.forEach(el => {
        if (item.id == el.id) {
          el['quantidade']++;
          setCarrinho([...carrinho]);
        } else {
          item['quantidade'] = 1;
          setCarrinho([...carrinho, item]);
        }
      });
    }
  };

  useLayoutEffect(() => {
    api
      .get('./produto/')
      .then(response => setListaCompras(response.data))
      .catch(error => {
        console.error('ops! ocorreu um erro' + err);
      });
  }, []);

  return (
    <>
      <FlatList
        ListHeaderComponent={() => (
          <View style={{backgroundColor: '#ffffffff'}}>
            <Text style={styles.titleList}>PRODUTOS</Text>
          </View>
        )}
        data={listaCompras}
        renderItem={({item}) => (
          <View style={styles.container}>
            <Image style={styles.image} source={{uri: item.fotoLink}} />
            <ItemSeparator />
            <View style={styles.textContainer}>
              <Text
                style={{
                  color: '#1295A7',
                  fontSize: 25,
                  fontFamily: 'Roboto-Light',
                }}>
                {item.nome}{' '}
              </Text>
              <Text
                style={{
                  color: '#1295A7',
                  fontSize: 20,
                  fontFamily: 'Roboto-Light',
                }}>
                {item.descricao}{' '}
              </Text>
              <ItemSeparator />

              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: 5,
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: '50%',
                    flexDirection: 'row',
                    fontSize: 20,
                  }}>
                  <Text style={{color: '#1295A7', fontSize: 25}}>R$</Text>
                  <Text style={{color: '#1295A7', fontSize: 25, marginLeft: 2}}>
                    {item.valor}
                    <Text style={{color: '#1295A7', fontSize: 25}}>,00</Text>
                  </Text>
                </View>

                <View>
                  <TouchableOpacity
                    style={styles.containerAddKart}
                    onPress={() => handleCarrinho(item)}>
                    <FontAwesome name="cart-plus" size={25} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </>
  );
};

export default Home;
