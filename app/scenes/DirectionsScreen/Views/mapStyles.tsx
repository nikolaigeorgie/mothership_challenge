import MapboxGL from '@mapbox/react-native-mapbox-gl';
import { Colors } from '../../../themes';

export default MapboxGL.StyleSheet.create({
  fromDot: {
    circleRadius: 8,
    circleColor: Colors.green,
  },
  toDot: {
    circleRadius: 8,
    circleColor: Colors.red,
  },
  route: {
    lineColor: Colors.charcoal,
    lineWidth: 3,
    lineOpacity: 0.84,
  },
});
