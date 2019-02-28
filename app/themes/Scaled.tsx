import { Dimensions } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const Scaled = {
  navBarOffset: SCREEN_HEIGHT * 0.01,
  screen: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
};

export default Scaled;
