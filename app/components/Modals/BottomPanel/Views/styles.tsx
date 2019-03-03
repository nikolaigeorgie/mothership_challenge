import { StyleSheet } from 'react-native';
import Scaled from '../../../../themes/Scaled';
import Colors from '../../../../themes/Colors';

export const BottomModalHeight = Scaled.screen.width * 0.8;

export default StyleSheet.create({
  container: {
    height: Scaled.screen.height,
    width: Scaled.screen.width,
    backgroundColor: Colors.black,
  },
  bottomModal: {
    width: Scaled.screen.width,
    height: BottomModalHeight,
    backgroundColor: Colors.white,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});
