import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  titleList: {
    fontSize: 25,
    color: '#1295A7',
    margin: 3,
    padding: 10,
    width: '100%',
    fontFamily: 'Roboto-Light',
  },
  carrinhoTotal: {
    marginTop: 20,
    marginBottom: 20,
    borderColor: '#EBF0FF',
    borderWidth: 1,
    borderRadius: 5,
    padding: 20,
  },
  linhaTexto: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalTexto: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  totalValor: {
    color: '#1295A7',
  },
});

export default styles;
