import { StyleSheet } from 'react-native';
import { Colors, Scaled } from '../../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: Scaled.screen.width * 0.1,
  },
  title: {
    color: Colors.grey,
    // TODO: Make fonts scaled
    fontSize: Scaled.fontSizes.h8,
    fontWeight: '700',
  },
  message: {
    color: Colors.grey,
    marginTop: 10,
    fontWeight: '500',
  },
});
