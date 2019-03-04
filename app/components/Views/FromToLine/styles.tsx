import { StyleSheet } from 'react-native';
import { Colors, Scaled } from '../../../themes';

const FROM_DOT_HEIGHT = Scaled.screen.width * 0.03;
const FROM_DOT_WIDTH = Scaled.screen.width * 0.03;

export default StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '50%',
  },
  fromDot: {
    backgroundColor: Colors.green,
    borderRadius: FROM_DOT_WIDTH / 2,
    height: FROM_DOT_HEIGHT,
    width: FROM_DOT_WIDTH,
  },
  fromToSeparator: {
    width: Scaled.screen.width * 0.005,
    height: '53%',
    backgroundColor: Colors.darkGrey,
  },
  downArrow: {
    height: FROM_DOT_HEIGHT,
    width: Scaled.screen.width * 0.04,
  },
});
