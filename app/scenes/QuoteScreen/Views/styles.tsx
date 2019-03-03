import { StyleSheet } from 'react-native';
import { Scaled } from '../../../themes';

export default StyleSheet.create({
  sections: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    height: Scaled.screen.width * 0.25,
  },
  downImage: {
    height: Scaled.screen.width * 0.04,
    width: Scaled.screen.width * 0.04,
    marginLeft: Scaled.screen.width * 0.15,
    alignSelf: 'center',
    position: 'absolute',
    right: Scaled.screen.width * 0.03,
  },
  rightText: {
    left: Scaled.screen.width * 0.02,
    fontSize: Scaled.fontSizes.h8,
  },
});
