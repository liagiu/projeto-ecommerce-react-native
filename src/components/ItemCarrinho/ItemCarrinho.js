import React, {useContext} from 'react';
import styles from './styles';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {CarrinhoContext} from '../../context/CarrinhoContext';

export default ItemCarrinho = ({item}) => {
  const [carrinho, setCarrinho] = useContext(CarrinhoContext);

  const aumentarQtd = id => {
    const novoCarrinho = carrinho.map(item => {
      if (item.id == id) {
        if (item.qtdEstoque < item.quantidade + 1) {
          alert('Quantidade máxima desse produto atingida!');
        } else {
          item.quantidade++;
        }
      }
      return item;
    });
    setCarrinho(novoCarrinho);
  };

  const diminuirQtd = (id, qtd) => {
    let novoCarrinho;

    if (qtd <= 1) {
      novoCarrinho = carrinho.filter(item => item.id !== id);
    } else {
      novoCarrinho = carrinho.map(item => {
        if (item.id == id) {
          item.quantidade--;
        }
        return item;
      });
    }
    setCarrinho(novoCarrinho);
  };

  const deletarItem = id => {
    const novoCarrinho = carrinho.filter(item => item.id !== id);

    setCarrinho(novoCarrinho);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: item.item.fotoLink}} />
      <View style={styles.textContainer}>
        <Text style={styles.itemNome}>{item.item.nome}</Text>
        <Text style={styles.itemValor}>
          R$ {item.item.quantidade * item.item.valor}
        </Text>
      </View>
      <View style={styles.containerDireita}>
        <TouchableOpacity>
          <FontAwesome
            name="times"
            size={15}
            onPress={() => deletarItem(item.item.id)}
          />
        </TouchableOpacity>
        <View style={styles.itemQtd}>
          <TouchableOpacity
            style={styles.qtdDisplay}
            onPress={() => diminuirQtd(item.item.id, item.item.quantidade)}>
            <FontAwesome name="minus" size={15} />
          </TouchableOpacity>
          <Text style={styles.qtdDisplay}>{item.item.quantidade}</Text>
          <TouchableOpacity
            style={styles.qtdDisplay}
            onPress={() => aumentarQtd(item.item.id)}>
            <FontAwesome name="plus" size={15} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
