import { StyleSheet } from 'react-native';
import { Colors, Scaled } from '../../../../themes';

export default StyleSheet.create({
  textFieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
  },
  container: {
    borderBottomColor: Colors.blue,
    borderBottomWidth: 1,
    height: Scaled.screen.height * 0.1,
  },
  headerTitle: {
    fontSize: 15,
    fontWeight: '500',
  },
});
