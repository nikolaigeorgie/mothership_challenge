import React, { PureComponent } from 'react';
import { Navigation } from 'react-native-navigation';
import { Alert, Keyboard } from 'react-native';
import QuoteScreenView from './Views';
import { createQuoteForDelivery } from '../../redux/Deliveries/actions';
import Routes from '../../navigation/Routes';
import { IDeliverySearchResult } from '../../redux/Deliveries/interfaces';
import { verifyInputData } from '../../utils/QuoteUtils';
import StandardPicker, {
  IPickerItem,
} from '../../components/Pickers/StandardPicker';

type Props = {
  componentId: string;
  searchedAddress: IDeliverySearchResult;
};

type State = {
  typeValue: string;
  weightValue: string;
  dimensionValues: {
    length: string;
    width: string;
    height: string;
  };
  quantityValue: string;
  typeValuesArray: Array<IPickerItem>;
  loading: boolean;
};

class QuoteScreen extends PureComponent<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      typeValue: 'Pallet',
      weightValue: '',
      dimensionValues: {
        length: '',
        width: '',
        height: '',
      },
      quantityValue: '',
      typeValuesArray: [
        { label: 'Pallet', value: 'Pallet' },
        { label: 'Boxes', value: 'Boxes' },
        { label: 'Loose Items', value: 'Loose Items' },
      ],
      loading: false,
    };
    this.toggleValueModal = this.toggleValueModal.bind(this);
    this.onChangeWeightText = this.onChangeWeightText.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.onChangeQuantityText = this.onChangeQuantityText.bind(this);
    this.popBack = this.popBack.bind(this);
    this.createQuoteOnPress = this.createQuoteOnPress.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
  }

  handleTypeChange(typeValue: string) {
    this.setState({ typeValue });
  }

  toggleValueModal() {
    // TODO: Show overlay modal for chainging type
    Navigation.showOverlay({
      component: {
        name: Routes.BottomPanel,
        passProps: {
          renderView: () => {
            return (
              <StandardPicker
                selectedValue={this.state.typeValue}
                data={this.state.typeValuesArray}
                onValueChange={this.handleTypeChange}
              />
            );
          },
        },
        options: {
          overlay: {
            interceptTouchOutside: false,
          },
        },
      },
    });
  }
  onChangeWeightText(weightValue: string) {
    this.setState({ weightValue });
  }

  updateDimensions(length: string, width: string, height: string) {
    this.setState({
      dimensionValues: {
        length,
        width,
        height,
      },
    });
  }

  onChangeQuantityText(quantityValue: string) {
    this.setState({ quantityValue });
  }

  popBack() {
    Navigation.pop(this.props.componentId);
  }

  determineIfNextDisabled() {
    // Return true of false based on state
    return verifyInputData(
      this.state.weightValue,
      this.state.dimensionValues,
      this.state.quantityValue,
    );
  }

  async createQuoteOnPress() {
    Keyboard.dismiss();
    this.setState({ loading: true });
    try {
      const shipmentData = {
        quantity: this.state.quantityValue,
        weight: this.state.weightValue,
        type: this.state.typeValue,
        dimensions: this.state.dimensionValues,
      };

      const rates = await createQuoteForDelivery(
        this.props.searchedAddress,
        shipmentData,
      );

      Navigation.push(this.props.componentId, {
        component: {
          name: Routes.SummaryScreen,
          passProps: {
            rates,
            searchedAddress: this.props.searchedAddress,
            shipmentData,
          },
        },
      });
    } catch (err) {
      Alert.alert(
        'Something went wrong.',
        'Please verify your input and address',
      );
    }
    this.setState({ loading: false });
  }

  render() {
    return (
      <QuoteScreenView
        typeValue={this.state.typeValue}
        weightValue={this.state.weightValue}
        quantityValue={this.state.quantityValue}
        toggleValueModal={this.toggleValueModal}
        onChangeWeightText={this.onChangeWeightText}
        updateDimensions={this.updateDimensions}
        onChangeQuantityText={this.onChangeQuantityText}
        popBack={this.popBack}
        determineIfNextDisabled={this.determineIfNextDisabled()}
        createQuoteOnPress={this.createQuoteOnPress}
        loading={this.state.loading}
        fromAddressTitle={this.props.searchedAddress.fromAddress.placeName}
        toAddressTitle={this.props.searchedAddress.toAddress.placeName}
        dimensionValues={this.state.dimensionValues}
      />
    );
  }
}

export default QuoteScreen;
