import React, { PureComponent } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import { IAddressItem } from '../../../Inputs/FromToSearch';

type Props = {
  item: IAddressItem;
  onPress(): void;
};

class AddressesListItemView extends PureComponent<Props> {
  render() {
    // TODO: If have time add image
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <Text>{this.props.item.place_name}</Text>
      </TouchableOpacity>
    );
  }
}

export default AddressesListItemView;
