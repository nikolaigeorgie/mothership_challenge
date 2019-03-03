import React, { PureComponent } from 'react';
import { Alert } from 'react-native';
import { Navigation } from 'react-native-navigation';
import SummaryScreenView from './Views';
import {
  IDeliverySearchResult,
  IRates,
} from '../../redux/Deliveries/interfaces';

type Props = {
  componentId: string;
  rates: IRates;
  searchedAddress: IDeliverySearchResult;
  shipmentData: {
    quantity: string;
    type: string;
    weight: string;
    dimensions: string;
  };
};

class SummaryScreen extends PureComponent<Props> {
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {};
    this.popToRoot = this.popToRoot.bind(this);
    this.checkoutOnPress = this.checkoutOnPress.bind(this);
  }

  popToRoot() {
    Navigation.popToRoot(this.props.componentId);
  }

  async checkoutOnPress() {
    // TODO: Transition to create quote flow
    // Showing error in meantime
    Alert.alert(
      'Something went wrong',
      'Please try again later.',
      [{ text: 'OK', onPress: () => this.popToRoot() }],
      { cancelable: false },
    );
  }

  render() {
    return (
      <SummaryScreenView
        popToRoot={this.popToRoot}
        checkoutOnPress={this.checkoutOnPress}
        fromAddressTitle={this.props.searchedAddress.fromAddress.placeName}
        toAddressTitle={this.props.searchedAddress.toAddress.placeName}
        shipmentData={this.props.shipmentData}
      />
    );
  }
}

export default SummaryScreen;
