import React, { PureComponent } from 'react';
import { LayoutAnimation, View, Animated } from 'react-native';
import StandardInput from '../../../Inputs/StandardInput';
import { springAnimation } from '../../../../utils/LayoutAnimations';
import styles from './styles';
import AddressesList from '../../../Lists/AddressesList';
import FromToLine from '../../../Views/FromToLine';
import {
  IAddress,
  IAddressItem,
} from '../../../../redux/Deliveries/interfaces';

type Props = {
  addressListIsOpen: boolean;
  searchForAddress(value: string): void;
  onFocusFromAddressField(): void;
  onFocusToAddressField(): void;
  fromAddress: IAddress;
  toAddress: IAddress;
  currentSelection: string;
  onAddressSelection(item: IAddressItem): Promise<void>;
  createToAddressRef(ref: any): any;
};

class FromToSearchView extends PureComponent<Props> {
  componentWillUpdate() {
    LayoutAnimation.configureNext(springAnimation);
  }

  render() {
    return (
      <View style={[styles.container]}>
        <View style={styles.inputFieldsContainer}>
          <FromToLine />
          <View style={styles.searchContainer}>
            <StandardInput
              onChangeText={this.props.searchForAddress}
              onFocus={this.props.onFocusFromAddressField}
              placeholder="Pick-up from"
              value={this.props.fromAddress.value}
              testID="pickUpFromInput"
            />
            <StandardInput
              onChangeText={this.props.searchForAddress}
              onFocus={this.props.onFocusToAddressField}
              placeholder="Deliver to"
              value={this.props.toAddress.value}
              testID="deliverToInput"
              createInputRef={this.props.createToAddressRef}
            />
          </View>
        </View>
        {this.props.addressListIsOpen && (
          <Animated.View style={styles.addressContainer}>
            <AddressesList
              currentSelection={this.props.currentSelection}
              data={
                this.props.currentSelection === 'fromAddress'
                  ? this.props.fromAddress.data
                  : this.props.toAddress.data
              }
              onAddressSelection={this.props.onAddressSelection}
            />
          </Animated.View>
        )}
      </View>
    );
  }
}

export default FromToSearchView;
