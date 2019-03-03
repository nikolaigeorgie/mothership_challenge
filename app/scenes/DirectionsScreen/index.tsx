import React, { PureComponent } from 'react';
import { Navigation } from 'react-native-navigation';
import DirectionsScreenView from './Views';
import {
  getMapDirections,
  mapBoxBoundFormatter,
} from '../../utils/MapBoxUtils';
import {
  IDeliverySearchResult,
  ISelectedAddress,
} from '../../redux/Deliveries/interfaces';
import Routes from '../../navigation/Routes';
import {Alert} from "react-native";

type Props = {
  componentId: string;
};

type State = {
  isDirectionsDrawn: boolean;
  searchAddresses: IDeliverySearchResult;
};

class DirectionsScreen extends PureComponent<Props, State> {
  private mapView: any;

  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      isDirectionsDrawn: false,
      // @ts-ignore No initial value seems necessary to set
      searchAddresses: {},
    };
    this.navRightButtonOnPress = this.navRightButtonOnPress.bind(this);
    this.navLeftButtonOnPress = this.navLeftButtonOnPress.bind(this);
    this.applySearchResults = this.applySearchResults.bind(this);
    this.clearDrawnDirections = this.clearDrawnDirections.bind(this);
    this.registerMapRef = this.registerMapRef.bind(this);
    this.nextButtonOnPress = this.nextButtonOnPress.bind(this);
    this.mapView = null;
  }

  registerMapRef(ref: any) {
    this.mapView = ref;
  }

  navRightButtonOnPress() {
    Navigation.mergeOptions(Routes.RightMenuView, {
      sideMenu: {
        right: {
          visible: true,
        },
      },
    });
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
    fromAddress: ISelectedAddress,
    toAddress: ISelectedAddress,
  ) {
    const fromAddressCoordinates = [
      fromAddress.coordinates.long,
      fromAddress.coordinates.lat,
    ];
    const toAddressCoordinates = [
      toAddress.coordinates.long,
      toAddress.coordinates.lat,
    ];

    try {
      const searchAddresses = await getMapDirections(fromAddress, toAddress);

      await this.setState({
        searchAddresses: { ...searchAddresses, fromAddress, toAddress },
        isDirectionsDrawn: true,
      });

      await this.mapView.fitBounds(
        ...mapBoxBoundFormatter(fromAddressCoordinates, toAddressCoordinates),
      );
    } catch (err) {
      return Alert.alert(
          'Something went wrong',
          'Please try searching again',
      );
    }
  }

  nextButtonOnPress() {
    Navigation.push(this.props.componentId, {
      component: {
        name: Routes.QuoteScreen,
        passProps: {
          searchedAddress: this.state.searchAddresses,
        },
      },
    });
  }

  render() {
    return (
      <DirectionsScreenView
        componentId={this.props.componentId}
        navRightButtonOnPress={this.navRightButtonOnPress}
        navLeftButtonOnPress={this.navLeftButtonOnPress}
        applySearchResults={this.applySearchResults}
        isDirectionsDrawn={this.state.isDirectionsDrawn}
        routes={this.state.searchAddresses.routes}
        registerMapRef={this.registerMapRef}
        waypoints={this.state.searchAddresses.waypoints}
        nextButtonOnPress={this.nextButtonOnPress}
      />
    );
  }
}

export default DirectionsScreen;
