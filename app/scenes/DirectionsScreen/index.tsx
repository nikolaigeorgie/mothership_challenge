import React, { PureComponent } from 'react';
import DirectionsScreenView from './Views';

type Props = {
  componentId: string;
};

type State = {
  isDirectionsDrawn: boolean;
};

class DirectionsScreen extends PureComponent<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      isDirectionsDrawn: false,
    };
    this.navRightButtonOnPress = this.navRightButtonOnPress.bind(this);
    this.navLeftButtonOnPress = this.navLeftButtonOnPress.bind(this);
    this.applySearchResults = this.applySearchResults.bind(this);
    this.clearDrawnDirections = this.clearDrawnDirections.bind(this);
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

  applySearchResults(
    fromAddressCoordinates: Array<number>,
    toAddressCoordinates: Array<number>,
  ) {
    this.setState({ isDirectionsDrawn: true });
    console.log(fromAddressCoordinates, toAddressCoordinates);
    // TODO: handle map drawing
  }

  render() {
    return (
      <DirectionsScreenView
        componentId={this.props.componentId}
        navRightButtonOnPress={this.navRightButtonOnPress}
        navLeftButtonOnPress={this.navLeftButtonOnPress}
        applySearchResults={this.applySearchResults}
        isDirectionsDrawn={this.state.isDirectionsDrawn}
      />
    );
  }
}

export default DirectionsScreen;
