import { StyleSheet } from 'react-native';
import Scaled from '../../../../themes/Scaled';

export default StyleSheet.create({
    container: {
        width: '100%',
        height: Scaled.screen.width * 0.12,
        margin: 5,
        paddingLeft: Scaled.screen.width * 0.02,
        justifyContent: 'center',
    },
    titleText: {
        // TODO: add styling for text
    },
});
