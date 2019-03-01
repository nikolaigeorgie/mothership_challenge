import { StyleSheet } from 'react-native';
import { Scaled } from '../../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  mapboxContainer: { height: '100%' },
  nextButtonContainer: {
    position: 'absolute',
    bottom: Scaled.screen.height * 0.06,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
