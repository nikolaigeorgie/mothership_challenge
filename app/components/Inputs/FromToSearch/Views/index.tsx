import React, { PureComponent } from 'react';
import { LayoutAnimation, View, Animated } from 'react-native';
import StandardInput from '../../../Inputs/StandardInput';
import { springAnimation } from '../../../../utils/LayoutAnimations';
import styles from './styles';
import { IAddress } from '../index';

type Props = {
  addressListIsOpen: boolean;
  searchForAddress(value: string): void;
  onFocusFromAddressField(): void;
  onFocusToAddressField(): void;
  fromAddress: IAddress;
  toAddress: IAddress;
};

class FromToSearchView extends PureComponent<Props> {
  componentWillUpdate() {
    LayoutAnimation.configureNext(springAnimation);
  }

  render() {
    return (
      <View style={[styles.container]}>
        <View style={styles.inputFieldsContainer}>
          {/* TODO : Add ui line start to end */}
          <View style={styles.searchContainer}>
            <StandardInput
              onChangeText={this.props.searchForAddress}
              onFocus={this.props.onFocusFromAddressField}
              placeholder="Pick-up from"
              value={this.props.fromAddress.value}
            />
            <StandardInput
              onChangeText={this.props.searchForAddress}
              onFocus={this.props.onFocusToAddressField}
              placeholder="Deliver to"
              value={this.props.toAddress.value}
            />
          </View>
        </View>
        {this.props.addressListIsOpen && (
          <Animated.View style={styles.addressContainer} />
        )}
      </View>
    );
  }
}

export default FromToSearchView;
