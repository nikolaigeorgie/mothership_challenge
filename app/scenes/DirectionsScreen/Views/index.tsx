import React, { PureComponent } from 'react';
import {
  SafeAreaView,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import { lineString as makeLineString } from '@turf/helpers';
import StandardNavBar from '../../../components/NavBars/StandardNavBar';
import FromToSearch from '../../../components/Inputs/FromToSearch';
import { IWaypoint, IRoute } from '../../../redux/Deliveries/interfaces';
import { Images } from '../../../themes';
import styles from './styles';
import mapStyles from './mapStyles';

interface Props {
  componentId: string;
  navRightButtonOnPress(): void;
  navLeftButtonOnPress(): void;
  applySearchResults(
    fromAddressCoordinates: Array<number>,
    toAddressCoordinates: Array<number>,
  ): void;
  isDirectionsDrawn: boolean;
  routes: Array<IRoute>;
  registerMapRef(ref: any): void;
  waypoints: Array<IWaypoint>;
}

class DirectionsScreenView extends PureComponent<Props> {
  renderFromPoint() {
    if (this.props.isDirectionsDrawn) {
      const fromCoordinates = this.props.waypoints[0].location;
      return (
        <MapboxGL.ShapeSource
          id="origin"
          shape={MapboxGL.geoUtils.makePoint(fromCoordinates)}
        >
          <MapboxGL.Animated.CircleLayer
            id="originInnerCircle"
            style={mapStyles.fromDot}
          />
        </MapboxGL.ShapeSource>
      );
    }
  }

  renderToPoint() {
    if (this.props.isDirectionsDrawn) {
      const toCoordinates = this.props.waypoints[1].location;
      return (
        <MapboxGL.ShapeSource
          id="destinationInnerCircle"
          shape={MapboxGL.geoUtils.makePoint(toCoordinates)}
        >
          <MapboxGL.Animated.CircleLayer
            id="destinationInnerCircle"
            style={mapStyles.toDot}
          />
        </MapboxGL.ShapeSource>
      );
    }
  }

  renderRoute() {
    if (this.props.isDirectionsDrawn) {
      return (
        <MapboxGL.ShapeSource
          id="routeSource"
          shape={makeLineString(this.props.routes[0].geometry.coordinates)}
        >
          <MapboxGL.LineLayer
            id="routeFill"
            style={mapStyles.route}
            belowLayerID="originInnerCircle"
          />
        </MapboxGL.ShapeSource>
      );
    }
  }

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

        <FromToSearch
          applySearchResults={this.props.applySearchResults}
          isDirectionsDrawn={this.props.isDirectionsDrawn}
        />
        <View style={styles.mapboxContainer}>
          <MapboxGL.MapView
            centerCoordinate={[-118, 34]}
            style={styles.map}
            ref={this.props.registerMapRef}
            zoomLevel={11}
            logoEnabled={false}
          >
            {this.renderFromPoint()}
            {this.renderRoute()}
            {this.renderToPoint()}
          </MapboxGL.MapView>
        </View>
      </SafeAreaView>
    );
  }
}

export default DirectionsScreenView;
