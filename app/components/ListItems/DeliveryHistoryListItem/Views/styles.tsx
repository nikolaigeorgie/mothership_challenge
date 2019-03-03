import { StyleSheet } from 'react-native';
import { Colors, Scaled } from '../../../../themes';

export default StyleSheet.create({
  container: {
    width: '80%',
    height: Scaled.screen.height * 0.18,
    maxHeight: 120,
    backgroundColor: Colors.white,
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: {
      height: 2,
      width: 3,
    },
    borderRadius: 10,
    alignSelf: 'flex-end',
    marginRight: Scaled.screen.width * 0.07,
    justifyContent: 'space-around',
    paddingLeft: Scaled.screen.width * 0.05,
  },
  entryItem: {},
  title: {
    fontWeight: '700',
    fontSize: 14,
  },
});
