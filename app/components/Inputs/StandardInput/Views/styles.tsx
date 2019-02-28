import { StyleSheet } from 'react-native';
import { Colors } from '../../../../themes';
import Scaled from '../../../../themes/Scaled';

export default StyleSheet.create({
  input: {
    backgroundColor: Colors.lightGrey,
    borderRadius: 3,
    height: Scaled.screen.width * 0.13,
    paddingLeft: Scaled.screen.width * 0.02,
  },
});
