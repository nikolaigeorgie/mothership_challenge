import MapboxGL from '@mapbox/react-native-mapbox-gl';
import MapboxClient from 'mapbox';
import keys from './keys';

export const configureMapBox = () => {
  const token = keys.MAP_BOX_TOKEN;
  MapboxGL.setAccessToken(token);
};

export const client = new MapboxClient(keys.MAP_BOX_TOKEN);
