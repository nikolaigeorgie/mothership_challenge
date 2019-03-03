import React, { PureComponent } from 'react';
import { Alert, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import SummaryScreenView from './Views';
import {
  IDeliverySearchResult,
  IRates,
} from '../../redux/Deliveries/interfaces';
import RateListItem from '../../components/ListItems/RateListItem';

type Props = {
  componentId: string;
  rates: IRates;
  searchedAddress: IDeliverySearchResult;
  shipmentData: {
    quantity: string;
    type: string;
    weight: string;
    dimensions: {
      length: string;
      width: string;
      height: string;
    };
  };
};

class SummaryScreen extends PureComponent<Props> {
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {};
    this.popToRoot = this.popToRoot.bind(this);
    this.checkoutOnPress = this.checkoutOnPress.bind(this);
    this.renderSnapCarousalItem = this.renderSnapCarousalItem.bind(this);
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

  renderSnapCarousalItem(item: { item: any }) {
    return <RateListItem item={item.item} />;
  }

  render() {
    return (
      <SummaryScreenView
        popToRoot={this.popToRoot}
        checkoutOnPress={this.checkoutOnPress}
        fromAddressTitle={this.props.searchedAddress.fromAddress.placeName}
        toAddressTitle={this.props.searchedAddress.toAddress.placeName}
        shipmentData={this.props.shipmentData}
        renderSnapCarousalItem={this.renderSnapCarousalItem}
        rates={this.props.rates}
      />
    );
  }
}

export default SummaryScreen;
