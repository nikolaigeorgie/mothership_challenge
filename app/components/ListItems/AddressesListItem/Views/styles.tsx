import { StyleSheet } from 'react-native';
import Scaled from '../../../../themes/Scaled';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: Scaled.screen.width * 0.12,
    margin: 5,
    paddingHorizontal: Scaled.screen.width * 0.02,
    justifyContent: 'center',
  },
  text: {
    fontSize: Scaled.fontSizes.h10,
  },
});
