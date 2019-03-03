import { StyleSheet } from 'react-native';
import { Scaled } from '../../../../themes';

export default StyleSheet.create({
  header: {
    fontWeight: '700',
    fontSize: Scaled.fontSizes.h8,
    marginVertical: Scaled.screen.height * 0.05,
    marginLeft: Scaled.screen.width * 0.1,
  },
});
