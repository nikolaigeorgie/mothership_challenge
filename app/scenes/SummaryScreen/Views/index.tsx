import React, { PureComponent } from 'react';
import { SafeAreaView, View } from 'react-native';
import StackedNavBar from '../../../components/NavBars/StackedNavBar';
import { Images, Scaled } from '../../../themes';
import ClearEntryInput from '../../../components/Inputs/ClearEntryInput';
import styles from './styles';
import MaterialButton from '../../../components/Buttons/MaterialButton';

type Props = {
  checkoutOnPress(): void;
  popToRoot(): void;
  fromAddressTitle: string;
  toAddressTitle: string;
  shipmentData: {
    quantity: string;
    type: string;
    weight: string;
    dimensions: string;
  };
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
          <ClearEntryInput
            width={INPUT_WIDTH}
            value={this.props.shipmentData.dimensions}
            headerTitle="Dimensions"
            isDisabled
          />
          <ClearEntryInput
            width={INPUT_WIDTH}
            headerTitle="Quantity"
            value={this.props.shipmentData.quantity}
            isDisabled
          />
        </View>
        <MaterialButton onPress={this.props.checkoutOnPress} text="Checkout" />
      </SafeAreaView>
    );
  }
}

export default SummaryScreenView;
