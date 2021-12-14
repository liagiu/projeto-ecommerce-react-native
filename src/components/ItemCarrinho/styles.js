import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    backgroundColor: '#fff',
    borderColor: '#EBF0FF',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 30,
    marginLeft: 30,
  },
  itemNome: {
    fontWeight: 'bold',
    color: '#223263',
    fontSize: 16,
  },
  itemValor: {
    color: '#1295A7',
    fontSize: 16,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  itemQtd: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: '40%',
  },
  qtdDisplay: {
    padding: 10,
    borderColor: '#EBF0FF',
    borderWidth: 1,
    padding: 10,
  },
  containerDireita: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});

export default styles;
