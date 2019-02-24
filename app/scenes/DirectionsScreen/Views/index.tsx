import React, { PureComponent } from 'react';
import { View } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

class DirectionsScreenView extends PureComponent {
  render() {
    // TODO: add search UI
    return (
      <View style={{ flex: 1 }}>
        <MapboxGL.MapView
          centerCoordinate={[-118, 34]}
          style={{ flex: 1 }}
          zoomLevel={11}
        />
      </View>
    );
  }
}

export default DirectionsScreenView;
