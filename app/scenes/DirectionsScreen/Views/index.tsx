import React, { PureComponent } from 'react';
import {
  SafeAreaView,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import { Images } from '../../../themes';
import styles from './styles';
import StandardNavBar from '../../../components/NavBars/StandardNavBar';

interface Props {
  componentId: string;
  rightButtonOnPress(): void;
}

class DirectionsScreenView extends PureComponent<Props> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StandardNavBar
          componentId={this.props.componentId}
          rightButtonOnPress={this.props.rightButtonOnPress}
          rightImage={Images.historyIcon}
        />
        <MapboxGL.MapView
          centerCoordinate={[-118, 34]}
          style={{ flex: 1 }}
          zoomLevel={11}
        />
      </SafeAreaView>
    );
  }
}

export default DirectionsScreenView;
