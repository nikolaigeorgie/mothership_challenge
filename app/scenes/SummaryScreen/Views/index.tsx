import React, { PureComponent } from 'react';
import { SafeAreaView, View } from 'react-native';
import StackedNavBar from '../../../components/NavBars/StackedNavBar';
import { Images, Scaled } from '../../../themes';
import ClearEntryInput from '../../../components/Inputs/ClearEntryInput';
import styles from './styles';
import MaterialButton from '../../../components/Buttons/MaterialButton';

type Props = {
  typeValue: string;
  weightValue: string;
  dimensionsValue: string;
  quantityValue: string;
  checkoutOnPress(): void;
  popToRoot(): void;
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
            value="4780 Poe Avenue"
            headerTitle="From"
            isDisabled
          />
          <ClearEntryInput
            width={INPUT_WIDTH}
            value="4780 Poe Avenue"
            headerTitle="To"
            isDisabled
          />
        </View>
        <MaterialButton onPress={this.props.checkoutOnPress} text="Checkout" />
      </SafeAreaView>
    );
  }
}

export default SummaryScreenView;
