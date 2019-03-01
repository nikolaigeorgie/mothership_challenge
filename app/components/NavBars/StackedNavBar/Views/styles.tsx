import { StyleSheet } from 'react-native';
import { Colors, Scaled } from '../../../../themes';

export default StyleSheet.create({
  container: {
    height: Scaled.screen.height * 0.15,
    marginLeft: Scaled.screen.width * 0.05,
    justifyContent: 'space-around',
    marginTop: Scaled.navBarOffset,
  },
  leftImage: {
    height: Scaled.screen.width * 0.07,
    width: Scaled.screen.width * 0.07,
  },
  title: {
    fontWeight: '700',
    // TODO: Make fonts scaled
    fontSize: 20,
  },
  separator: {
    height: 2,
    backgroundColor: Colors.black,
  },
});
