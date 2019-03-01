import { StyleSheet } from 'react-native';
import { Scaled } from '../../../themes';

export default StyleSheet.create({
  sections: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    height: Scaled.screen.height * 0.15,
  },
});
