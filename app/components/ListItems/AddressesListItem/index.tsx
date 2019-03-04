import React, { PureComponent } from 'react';
import AddressesListItemView from './Views';
import { IAddressItem } from '../../../redux/Deliveries/interfaces';

type Props = {
  item: IAddressItem;
  onPress(item: IAddressItem): void;
  index: number;
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
      <AddressesListItemView
        item={this.props.item}
        index={this.props.index}
        onPress={this.onPress}
      />
    );
  }
}

export default AddressesListItem;
