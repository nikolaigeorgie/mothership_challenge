import React, { PureComponent } from 'react';
import { EmitterSubscription, Keyboard } from 'react-native';
import { client as MapboxClient } from '../../../config/MapboxClient';
import FromToSearchView from './Views';

type Props = {
  // TODO: Add necessary prop for on address selection
};

export interface IAddressItem {
  // TODO: add address shape
}

export interface IAddress {
  data: Array<IAddressItem>;
  value: string;
  selectedCoordinates: Array<string>;
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
      });
      // @ts-ignore TODO: research why interpolation is not work with type screen
      this.setState({
        [currentSelection]: { ...this.state[currentSelection], data },
      });
    } catch (err) {
      // TODO: handle report error
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
      />
    );
  }
}

export default FromToSearch;
