import React, { PureComponent } from 'react';
import { Alert, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import SummaryScreenView from './Views';
import {
  IDeliverySearchResult,
  IRates,
  IShipmentData,
} from '../../redux/Deliveries/interfaces';
import RateListItem from '../../components/ListItems/RateListItem';
import { addDelivery } from '../../redux/Deliveries/actions';
import { connect } from 'react-redux';

type Props = {
  componentId: string;
  rates: IRates;
  searchedAddress: IDeliverySearchResult;
  shipmentData: IShipmentData;
  addDelivery(entity: IDeliverySearchResult): void;
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
    const { searchedAddress } = this.props;
    searchedAddress.rates = this.props.rates;
    searchedAddress.shipmentData = this.props.shipmentData;
    await this.props.addDelivery(searchedAddress);
    Alert.alert(
      'Saved entry!',
      'This delivery has been saved although not processed.',
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

const mapDispatchToProps = (
  dispatch: (arg0: (dispatch: any) => Promise<any>) => void,
) => ({
  addDelivery: (payload: IDeliverySearchResult) =>
    dispatch(addDelivery(payload)),
});

export default connect(
  null,
  mapDispatchToProps,
)(SummaryScreen);
