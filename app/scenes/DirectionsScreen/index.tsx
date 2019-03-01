import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import DirectionsScreenView from './Views';
import {
  getMapDirections,
  mapBoxBoundFormatter,
} from '../../utils/MapBoxUtils';
import { addDelivery } from '../../redux/Deliveries/actions';
import { IDeliverySearchResult } from '../../redux/Deliveries/interfaces';
import Routes from '../../navigation/Routes';

type Props = {
  componentId: string;
  addDelivery(entity: IDeliverySearchResult): void;
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
    fromAddressCoordinates: Array<number>,
    toAddressCoordinates: Array<number>,
  ) {
    try {
      const searchAddresses = await getMapDirections(
        fromAddressCoordinates,
        toAddressCoordinates,
      );

      await this.setState({
        isDirectionsDrawn: true,
        searchAddresses,
      });

      await this.mapView.fitBounds(
        ...mapBoxBoundFormatter(fromAddressCoordinates, toAddressCoordinates),
      );
      await this.props.addDelivery(searchAddresses);
    } catch (err) {
      // TODO: handle error reporter
    }
  }

  nextButtonOnPress() {
    // TODO: Navigate to new screen to show summary
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

const mapDispatchToProps = (
  dispatch: (arg0: (dispatch: any) => Promise<any>) => void,
) => ({
  addDelivery: (payload: IDeliverySearchResult) =>
    dispatch(addDelivery(payload)),
});

export default connect(
  null,
  mapDispatchToProps,
)(DirectionsScreen);
