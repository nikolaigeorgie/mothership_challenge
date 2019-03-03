import { StyleSheet } from 'react-native';
import { Colors, Scaled } from '../../../../themes';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    height: '90%',
    width: '90%',
    shadowOpacity: 0.4,
    shadowRadius: 8,
    shadowOffset: {
      width: -3,
      height: 3,
    },
  },
});
