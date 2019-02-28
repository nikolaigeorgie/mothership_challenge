import React, { PureComponent } from 'react';
import AddressesListItemView from './Views';
import { IAddressItem } from '../../Inputs/FromToSearch';

type Props = {
  item: IAddressItem;
  onPress(item: IAddressItem): void;
};

class AddressesListItem extends PureComponent<Props> {
  constructor(props: Readonly<Props>) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    this.props.onPress(this.props.item);
  }

  render() {
    return (
      <AddressesListItemView item={this.props.item} onPress={this.onPress} />
    );
  }
}

export default AddressesListItem;
