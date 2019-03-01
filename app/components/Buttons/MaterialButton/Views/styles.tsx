import { StyleSheet } from 'react-native';
import { Colors, Scaled } from '../../../../themes';

export default StyleSheet.create({
  button: {
    height: Scaled.screen.width * 0.13,
    maxHeight: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.black,
    // TODO: Make fonts scaled
    fontSize: 21,
    fontWeight: '500',
  },
});
