import React, { PureComponent } from 'react';
import DirectionsScreenView from './Views';
import { getMapDirections } from '../../utils/MapBoxUtils';

type Props = {
  componentId: string;
};

export interface IAddressGeometry {
  coordinates: Array<Array<number>>;
  type: string;
}

export interface ISteps {
  distance: number;
  driving_side: string;
  duration: number;
  geometry: IAddressGeometry;
  mode: string;
  name: string;
  // TODO: Before requiring see if following props are needed:
  // intersections:
  // maneuver
}

export interface IRoute {
  distance: number;
  duration: number;
  geometry: IAddressGeometry;
  legs: Array<ISteps>;
}

export interface IFromToCoordinates {
  toAddressCoordinates: Array<number>;
  fromAddressCoordinates: Array<number>;
}

type State = {
  isDirectionsDrawn: boolean;
  currentRoute: IRoute;
  fromToCoordinates: IFromToCoordinates;
};

class DirectionsScreen extends PureComponent<Props, State> {
  private mapView: any;

  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      isDirectionsDrawn: false,
      // @ts-ignore No initial value seems necessary to set
      currentRoute: {},
      fromToCoordinates: {
        fromAddressCoordinates: [],
        toAddressCoordinates: [],
      },
    };
    this.navRightButtonOnPress = this.navRightButtonOnPress.bind(this);
    this.navLeftButtonOnPress = this.navLeftButtonOnPress.bind(this);
    this.applySearchResults = this.applySearchResults.bind(this);
    this.clearDrawnDirections = this.clearDrawnDirections.bind(this);
    this.registerMapRef = this.registerMapRef.bind(this);
    this.mapView = null;
  }

  registerMapRef(ref: any) {
    this.mapView = ref;
  }

  navRightButtonOnPress() {
    // TODO: Handle right nav button interaction
  }

  navLeftButtonOnPress() {
    if (this.state.isDirectionsDrawn) {
      return this.setState({ isDirectionsDrawn: false });
    }
    // TODO: Handle left nav menu open
  }

  clearDrawnDirections() {
    this.setState({ isDirectionsDrawn: false });
  }

  async applySearchResults(
    fromAddressCoordinates: Array<number>,
    toAddressCoordinates: Array<number>,
  ) {
    // padding for all sides
    try {
      const currentRoute = await getMapDirections(
        fromAddressCoordinates,
        toAddressCoordinates,
      );

      await this.setState({
        isDirectionsDrawn: true,
        currentRoute,
        fromToCoordinates: {
          fromAddressCoordinates,
          toAddressCoordinates,
        },
      });
      await this.mapView.fitBounds(
        [fromAddressCoordinates[0], fromAddressCoordinates[1]],
        [toAddressCoordinates[0], toAddressCoordinates[1]],
        20,
        1000,
      );
    } catch (err) {
      // TODO: handle error reporter
    }
  }

  render() {
    return (
      <DirectionsScreenView
        componentId={this.props.componentId}
        navRightButtonOnPress={this.navRightButtonOnPress}
        navLeftButtonOnPress={this.navLeftButtonOnPress}
        applySearchResults={this.applySearchResults}
        isDirectionsDrawn={this.state.isDirectionsDrawn}
        currentRoute={this.state.currentRoute}
        registerMapRef={this.registerMapRef}
        fromToCoordinates={this.state.fromToCoordinates}
      />
    );
  }
}

export default DirectionsScreen;
