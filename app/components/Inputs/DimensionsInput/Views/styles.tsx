import { StyleSheet } from 'react-native';
import { Colors, Scaled } from '../../../../themes';

export default StyleSheet.create({
  container: {
    borderBottomColor: Colors.blue,
    borderBottomWidth: 1,
    height: Scaled.screen.height * 0.1,
    // TODO: add same width for text fields.
  },
  textFieldContainers: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 15,
    fontWeight: '500',
  },
  textField: {
    width: '25%',
    textAlign: 'center',
  },
});
