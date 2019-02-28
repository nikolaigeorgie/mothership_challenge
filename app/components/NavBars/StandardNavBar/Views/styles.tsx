import { StyleSheet } from 'react-native';
import { Colors, Scaled, } from '../../../../themes';

const IMAGE_WIDTH = Scaled.screen.width * 0.07;
const IMAGE_HEIGHT = Scaled.screen.width * 0.07;

export default StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        zIndex: 1,
    },
    toolBar: {
        paddingHorizontal: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuImage: {
        height: IMAGE_HEIGHT,
        width: IMAGE_WIDTH,
        resizeMode: 'contain',
    },
    logoImage: {
        resizeMode: 'contain',
        height: Scaled.screen.width * 0.15,
        width: Scaled.screen.width * 0.4,
        marginLeft: Scaled.screen.width * 0.03,
    },
    rightImage: {
        resizeMode: 'contain',
        height: IMAGE_HEIGHT,
        width: IMAGE_WIDTH,
    },
});
