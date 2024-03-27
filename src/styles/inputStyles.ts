import {StyleSheet} from 'react-native';

const inputStyles = StyleSheet.create({
  inputContainerStyle: {
    width: '90%',
    height: 65,
    marginVertical: 10,
  },
  inputBoxStyle: {
    width: '100%',
    height: 60,
    borderRadius: 10,
  },
  onFocusStyle: {
    backgroundColor: '#FFF3E0',
    borderColor: '#EF6C00',
    borderWidth: 2,
  },
  offFocusStyle: {
    backgroundColor: '#EEEEEE',
    elevation: 1,
  },
  inputStyle: {
    paddingLeft: 10,
    color: '#000000',
    fontSize: 20,
  },
});
export default inputStyles;
