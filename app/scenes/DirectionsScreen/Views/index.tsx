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
import FromToSearch from '../../../components/Inputs/FromToSearch';

interface Props {
  componentId: string;
  navRightButtonOnPress(): void;
  navLeftButtonOnPress(): void;
  applySearchResults(
    fromAddressCoordinates: Array<number>,
    toAddressCoordinates: Array<number>,
  ): void;
  isDirectionsDrawn: boolean;
}

class DirectionsScreenView extends PureComponent<Props> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <StandardNavBar
              componentId={this.props.componentId}
              rightButtonOnPress={this.props.navRightButtonOnPress}
              rightImage={Images.historyIcon}
              leftImage={
                this.props.isDirectionsDrawn
                  ? Images.leftArrow
                  : Images.menuIcon
              }
              leftButtonOnPress={this.props.navLeftButtonOnPress}
            />
          </View>
        </TouchableWithoutFeedback>

        <FromToSearch applySearchResults={this.props.applySearchResults} isDirectionsDrawn={this.props.isDirectionsDrawn} />
        <View style={styles.mapboxContainer}>
          <MapboxGL.MapView
            centerCoordinate={[-118, 34]}
            style={{ flex: 1 }}
            zoomLevel={11}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default DirectionsScreenView;
