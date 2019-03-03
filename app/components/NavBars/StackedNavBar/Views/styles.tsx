import { StyleSheet } from 'react-native';
import { Colors, Scaled } from '../../../../themes';

export default StyleSheet.create({
  container: {
    marginHorizontal: Scaled.screen.width * 0.05,
    justifyContent: 'space-between',
    marginTop: Scaled.navBarOffset,
    flexDirection: 'row',
    height: Scaled.screen.height * 0.1,
    maxHeight: 70,
  },
  leftImage: {
    height: Scaled.screen.width * 0.07,
    width: Scaled.screen.width * 0.07,
  },
  title: {
    fontWeight: '700',
    fontSize: Scaled.fontSizes.h5,
  },
  separator: {
    height: 2,
    backgroundColor: Colors.black,
  },
});
