import { StyleSheet } from 'react-native';
import { Colors, Scaled } from '../../../../themes';

export default StyleSheet.create({
  container: {
    borderBottomColor: Colors.blue,
    borderBottomWidth: 1,
    height: Scaled.screen.height * 0.1,
  },
  textFieldContainers: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'space-around',
  },
  headerTitle: {
    fontSize: Scaled.fontSizes.h7,
    fontWeight: '500',
  },
  textField: {
    width: '25%',
    textAlign: 'center',
    fontSize: Scaled.fontSizes.h8,
  },
  text: {
    fontSize: Scaled.fontSizes.h8,
  },
});
