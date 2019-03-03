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
    fontSize: Scaled.fontSizes.h7,
    fontWeight: '500',
  },
  textInput: {
    fontSize: Scaled.fontSizes.h8,
  },
});
