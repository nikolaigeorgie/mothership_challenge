import React, { PureComponent } from 'react';
import { EmitterSubscription, Keyboard } from 'react-native';
import { client as MapboxClient } from '../../../config/MapboxClient';
import FromToSearchView from './Views';
import { IAddressGeometry } from '../../../scenes/DirectionsScreen';

type Props = {
  applySearchResults(
    fromAddressCoordinates: Array<number>,
    toAddressCoordinates: Array<number>,
  ): void;
  isDirectionsDrawn: boolean;
};

export interface IAddressItem {
  id: string;
  place_name: string;
  relevance: number;
  geometry: IAddressGeometry;
}

export interface IAddress {
  data: Array<IAddressItem>;
  value: string;
  selectedCoordinates: Array<number>;
  isAddressSelected: boolean;
}

type State = {
  currentSelection: string;
  fromAddress: IAddress;
  toAddress: IAddress;
  isKeyboardVisible: boolean;
  addressListIsOpen: boolean;
};

class FromToSearch extends PureComponent<Props, State> {
  private keyboardWillShowListener: EmitterSubscription | any;
  private keyboardWillHideListener: EmitterSubscription | any;

  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      currentSelection: '',
      fromAddress: {
        data: [],
        value: '',
        selectedCoordinates: [],
        isAddressSelected: false,
      },
      toAddress: {
        data: [],
        value: '',
        selectedCoordinates: [],
        isAddressSelected: false,
      },
      isKeyboardVisible: false,
      addressListIsOpen: false,
    };
    this.searchForAddress = this.searchForAddress.bind(this);
    this.onFocusToAddressField = this.onFocusToAddressField.bind(this);
    this.onFocusFromAddressField = this.onFocusFromAddressField.bind(this);
    this.keyboardWillShow = this.keyboardWillShow.bind(this);
    this.keyboardWillHide = this.keyboardWillHide.bind(this);
    this.onAddressSelection = this.onAddressSelection.bind(this);
  }

  componentWillReceiveProps(props: any) {
    // Handles re-setting state to initial state.
    if (props.isDirectionsDrawn === false) {
      this.setState({
        currentSelection: '',
        fromAddress: {
          data: [],
          value: '',
          selectedCoordinates: [],
          isAddressSelected: false,
        },
        toAddress: {
          data: [],
          value: '',
          selectedCoordinates: [],
          isAddressSelected: false,
        },
        isKeyboardVisible: false,
        addressListIsOpen: false,
      });
    }
    return null;
  }

  componentDidMount() {
    this.keyboardWillShowListener = Keyboard.addListener(
      'keyboardWillShow',
      this.keyboardWillShow,
    );
    this.keyboardWillHideListener = Keyboard.addListener(
      'keyboardWillHide',
      this.keyboardWillHide,
    );
  }

  componentWillUnmount() {
    this.keyboardWillShowListener.remove();
    this.keyboardWillHideListener.remove();
  }

  keyboardWillShow() {
    this.setState({
      isKeyboardVisible: true,
      addressListIsOpen: true,
    });
  }

  keyboardWillHide() {
    this.setState({ isKeyboardVisible: false, addressListIsOpen: false });
  }

  onFocusToAddressField() {
    this.setState({ currentSelection: 'toAddress' });
  }

  onFocusFromAddressField() {
    this.setState({ currentSelection: 'fromAddress' });
  }

  async searchForAddress(value: string) {
    const { currentSelection } = this.state;
    // @ts-ignore TODO: research why interpolation is not work with type screen
    this.setState({ [currentSelection]: { value, isAddressSelected: false } });
    try {
      const {
        entity: { features: data },
      } = await MapboxClient.geocodeForward(value, {
        limit: 4,
        types: 'address',
        country: 'us',
        // TODO add proximity variable
        // ^ Bias the response to favor results that are closer to this location,
        // ^ provided as two comma-separated coordinates in longitude,latitude order.
      });
      // @ts-ignore TODO: research why interpolation is not work with type screen
      this.setState({
        [currentSelection]: { ...this.state[currentSelection], data },
      });
    } catch (err) {
      // TODO: handle report error
    }
  }

  async onAddressSelection(item: IAddressItem) {
    const {
      place_name,
      geometry: { coordinates },
    } = item;
    Keyboard.dismiss();
    const { currentSelection } = this.state;
    // @ts-ignore TODO: research why interpolation is not work with type screen
    await this.setState({
      [currentSelection]: {
        data: this.state[currentSelection].data,
        value: place_name,
        selectedCoordinates: coordinates,
        isAddressSelected: true,
      },
      currentSelection: '',
    });

    if (
      this.state.fromAddress.isAddressSelected &&
      this.state.toAddress.isAddressSelected
    ) {
      this.props.applySearchResults(
        this.state.fromAddress.selectedCoordinates,
        this.state.toAddress.selectedCoordinates,
      );
    }
  }

  render() {
    return (
      <FromToSearchView
        searchForAddress={this.searchForAddress}
        fromAddress={this.state.fromAddress}
        toAddress={this.state.toAddress}
        onFocusFromAddressField={this.onFocusFromAddressField}
        onFocusToAddressField={this.onFocusToAddressField}
        addressListIsOpen={this.state.addressListIsOpen}
        currentSelection={this.state.currentSelection}
        onAddressSelection={this.onAddressSelection}
      />
    );
  }
}

export default FromToSearch;
