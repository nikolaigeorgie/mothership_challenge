import React, { PureComponent, ReactNode } from 'react';
import { SafeAreaView, View } from 'react-native';
import StackedNavBar from '../../../components/NavBars/StackedNavBar';
import { Images, Scaled } from '../../../themes';
import ClearEntryInput from '../../../components/Inputs/ClearEntryInput';
import styles from './styles';
import MaterialButton from '../../../components/Buttons/MaterialButton';
import DimensionsInput from '../../../components/Inputs/DimensionsInput';
import SnapCarousal from '../../../components/Lists/SnapCarousal';
import { getFirstRate } from '../../../utils/MapBoxUtils';
import { IRates } from '../../../redux/Deliveries/interfaces';

type Props = {
  rates: IRates;
  checkoutOnPress(): void;
  popToRoot(): void;
  fromAddressTitle: string;
  toAddressTitle: string;
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
  renderSnapCarousalItem(item: { item: any; index: number }): ReactNode;
};

const INPUT_WIDTH = Scaled.screen.width * 0.36;

class SummaryScreenView extends PureComponent<Props> {
  render() {
    return (
      <SafeAreaView>
        <StackedNavBar
          leftImage={Images.leftArrow}
          leftButtonOnPress={this.props.popToRoot}
          separatorLineWidth={Scaled.screen.width * 0.42}
          title="Finalize Quote"
        />
        <View style={styles.sections}>
          <ClearEntryInput
            width={INPUT_WIDTH}
            value={this.props.fromAddressTitle}
            headerTitle="From"
            isDisabled
          />
          <ClearEntryInput
            width={INPUT_WIDTH}
            value={this.props.toAddressTitle}
            headerTitle="To"
            isDisabled
          />
        </View>
        <View style={styles.sections}>
          <ClearEntryInput
            width={INPUT_WIDTH}
            value={this.props.shipmentData.type}
            headerTitle="Type"
            isDisabled
          />
          <ClearEntryInput
            width={INPUT_WIDTH}
            headerTitle="Weight"
            value={this.props.shipmentData.weight}
            isDisabled
          />
        </View>
        <View style={styles.sections}>
          <DimensionsInput
            width={INPUT_WIDTH}
            isDisabled
            dimensions={this.props.shipmentData.dimensions}
          />

          <ClearEntryInput
            width={INPUT_WIDTH}
            headerTitle="Quantity"
            value={this.props.shipmentData.quantity}
            isDisabled
          />
        </View>
        <SnapCarousal
          // Get first rate is for demonstration purposes
          data={getFirstRate(this.props.rates)}
          renderItem={this.props.renderSnapCarousalItem}
          height={Scaled.screen.height * 0.3}
        />
        <MaterialButton onPress={this.props.checkoutOnPress} text="Checkout" />
      </SafeAreaView>
    );
  }
}

export default SummaryScreenView;
