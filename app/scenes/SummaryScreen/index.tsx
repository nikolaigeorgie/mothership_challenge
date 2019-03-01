import React, { PureComponent } from 'react';
import { Alert } from 'react-native';
import { Navigation } from 'react-native-navigation';
import SummaryScreenView from './Views';

type Props = {
  componentId: string;
};

type State = {
  typeValue: string;
  weightValue: string;
  dimensionsValue: string;
  quantityValue: string;
};

class SummaryScreen extends PureComponent<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      typeValue: 'Pallet',
      weightValue: '',
      dimensionsValue: '',
      quantityValue: '',
    };
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
        typeValue={this.state.typeValue}
        weightValue={this.state.weightValue}
        dimensionsValue={this.state.dimensionsValue}
        quantityValue={this.state.quantityValue}
        popToRoot={this.popToRoot}
        checkoutOnPress={this.checkoutOnPress}
      />
    );
  }
}

export default SummaryScreen;
