import {StyleSheet} from 'react-native';

const formStyles = StyleSheet.create({
  srollcontainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    height: '100%',
    padding: 5,
  },
  title: {
    width: '90%',
    fontSize: 55,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 10,
  },
  registerTitle: {
    width: '90%',
    fontSize: 45,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginVertical: 10,
  },
  profile: {
    borderColor: '#FFA726',
    borderWidth: 2,
    elevation: 1,
  },
  profilebadge: {
    backgroundColor: '#FFA726',
  },
});
export default formStyles;
