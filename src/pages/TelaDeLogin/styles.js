import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 50,
    fontWeight: '500',
    marginBottom: 80,
  },
  inputContainer: {
    borderBottomWidth: 1,
    width: '100%',
    borderBottomColor: '#130dbd',
    marginVertical: 15,
  },
  esqueciContaButton: {
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
  esqueciContaButtonText: {
    textAlign: 'right',
    fontSize: 14,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#3834bf60',
    borderRadius: 10,
    marginVertical: 15,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
  },
});

export default styles;
