import React, { PureComponent } from 'react';
import { Navigation } from 'react-native-navigation';
import QuoteScreenView from './Views';
import { createQuoteForDelivery } from '../../redux/Deliveries/actions';
import Routes from '../../navigation/Routes';

type Props = {
  componentId: string;
};

type State = {
  typeValue: string;
  weightValue: string;
  dimensionsValue: string;
  quantityValue: string;
  typeValuesArray: Array<string>;
  loading: boolean;
};

class QuoteScreen extends PureComponent<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      typeValue: 'Pallet',
      weightValue: '',
      dimensionsValue: '',
      quantityValue: '',
      typeValuesArray: ['Pallet', 'Boxes', 'Loose Items'],
      loading: false,
    };
    this.toggleValueModal = this.toggleValueModal.bind(this);
    this.onChangeWeightText = this.onChangeWeightText.bind(this);
    this.onChangeDimensionsText = this.onChangeDimensionsText.bind(this);
    this.onChangeQuantityText = this.onChangeQuantityText.bind(this);
    this.popBack = this.popBack.bind(this);
    this.createQuoteOnPress = this.createQuoteOnPress.bind(this);
  }

  toggleValueModal() {
    // TODO: Show overlay modal for chainging type
  }
  onChangeWeightText(weightValue: string) {
    this.setState({ weightValue });
  }

  onChangeDimensionsText(dimensionsValue: string) {
    this.setState({ dimensionsValue });
  }

  onChangeQuantityText(quantityValue: string) {
    this.setState({ quantityValue });
  }

  popBack() {
    Navigation.pop(this.props.componentId);
  }

  determineIfNextDisabled() {
    // TODO: Add cases for disabling button
    return false;
  }

  async createQuoteOnPress() {
    // TODO: create quote here
    this.setState({ loading: true });
    try {
      await createQuoteForDelivery();
      Navigation.push(this.props.componentId, {
        component: {
          name: Routes.SummaryScreen,
          passProps: {
            // TODO: navigate
          },
        },
      });
    } catch (err) {
      // TODO: Handle error report
    }
    this.setState({ loading: false });
  }

  render() {
    return (
      <QuoteScreenView
        typeValue={this.state.typeValue}
        weightValue={this.state.weightValue}
        dimensionsValue={this.state.dimensionsValue}
        quantityValue={this.state.quantityValue}
        toggleValueModal={this.toggleValueModal}
        onChangeWeightText={this.onChangeWeightText}
        onChangeDimensionsText={this.onChangeDimensionsText}
        onChangeQuantityText={this.onChangeQuantityText}
        popBack={this.popBack}
        determineIfNextDisabled={this.determineIfNextDisabled()}
        createQuoteOnPress={this.createQuoteOnPress}
        loading={this.state.loading}
      />
    );
  }
}

export default QuoteScreen;
