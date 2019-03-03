import { Dimensions } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// The multiplied value isn't unique
const NORMALIZED_FONTS = SCREEN_WIDTH * 0.024;

const Scaled = {
  navBarOffset: SCREEN_HEIGHT * 0.03,
  screen: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  halfScreenInputWidth: SCREEN_WIDTH * 0.4,
  fontSizes: {
    h1: NORMALIZED_FONTS * 7.6, // Size 68 on Iphone X
    h2: NORMALIZED_FONTS * 5.1, // Size 46 on Iphone X
    h3: NORMALIZED_FONTS * 3.8, // Size 34 on Iphone X
    h4: NORMALIZED_FONTS * 3.33, // Size 30 on Iphone X
    h5: NORMALIZED_FONTS * 2.67, // Size 24 on Iphone X
    h6: NORMALIZED_FONTS * 2.45, // Size 22 on Iphone X
    h7: NORMALIZED_FONTS * 2.22, // Size 20 on Iphone X
    h8: NORMALIZED_FONTS * 2, // Size 18 on Iphone X
    h9: NORMALIZED_FONTS * 1.77, // Size 16 on Iphone X
    h10: NORMALIZED_FONTS * 1.55, // Size 14 on Iphone X
    h11: NORMALIZED_FONTS * 1.34, // Size 12 on Iphone X
    h12: NORMALIZED_FONTS * 1.1, // Size 10 on Iphone X
    h13: NORMALIZED_FONTS, // Size 8 on Iphone X
  },
};

export default Scaled;
