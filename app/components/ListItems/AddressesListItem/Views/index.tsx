import React, { PureComponent } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import {IAddressItem} from "../../../../redux/Deliveries/interfaces";

type Props = {
  item: IAddressItem;
  onPress(): void;
};

class AddressesListItemView extends PureComponent<Props> {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <Text style={styles.text}>{this.props.item.place_name}</Text>
      </TouchableOpacity>
    );
  }
}

export default AddressesListItemView;
