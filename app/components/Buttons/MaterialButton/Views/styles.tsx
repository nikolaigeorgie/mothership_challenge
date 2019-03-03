import { StyleSheet } from 'react-native';
import { Colors, Scaled } from '../../../../themes';

export default StyleSheet.create({
  button: {
    height: Scaled.screen.width * 0.13,
    maxHeight: 60,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    color: Colors.black,
    fontSize: Scaled.fontSizes.h6,
    fontWeight: '500',
  },
});
