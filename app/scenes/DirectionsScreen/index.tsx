import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import DirectionsScreenView from './Views';
import { getMapDirections } from '../../utils/MapBoxUtils';
import { addDelivery } from '../../redux/Deliveries/actions';
import { IDeliverySearchResult } from '../../redux/Deliveries/interfaces';

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
        [fromAddressCoordinates[0], fromAddressCoordinates[1]],
        [toAddressCoordinates[0], toAddressCoordinates[1]],
        20,
        1000,
      );
      // TODO: Add object here
      await this.props.addDelivery(searchAddresses);
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
        routes={this.state.searchAddresses.routes}
        registerMapRef={this.registerMapRef}
        waypoints={this.state.searchAddresses.waypoints}
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

// export default DirectionsScreen;
