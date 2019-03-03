import { StyleSheet } from 'react-native';
import { Colors } from '../../../../themes';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: Colors.blue,
    borderRadius: 10,
    height: '70%',
    width: '90%',
    shadowOpacity: 0.4,
    shadowRadius: 8,
    shadowOffset: {
      width: -3,
      height: 3,
    },
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  serviceType: {
    color: Colors.white,
    fontSize: 17,
    fontWeight: 'bold',
  },
  deliveryDate: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: '500',
  },
  price: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: '500',
  },
  descriptionContainer: {
    justifyContent: 'space-around',
    height: '100%',
  },
});
