import React, { PureComponent } from 'react';
import AddressesListItem from '../../ListItems/AddressesListItem';
import { IAddressItem } from '../../Inputs/FromToSearch';
import AddressesListView from './Views';

export interface IAddressCell {
  item: IAddressItem;
}

type Props = {
  onAddressSelection(item: IAddressItem): Promise<void>;
  currentSelection: string;
  data: Array<IAddressItem>;
};

const keyExtractor = (item: { id: string }) => `AddressList.${item.id}`;

class AddressesList extends PureComponent<Props> {
  constructor(props: Readonly<Props>) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
  }

  renderItem(cellItem: IAddressCell) {
    const { item } = cellItem;
    return (
      <AddressesListItem item={item} onPress={this.props.onAddressSelection} />
    );
  }

  render() {
    return (
      <AddressesListView
        renderItem={this.renderItem}
        data={this.props.data}
        keyExtractor={keyExtractor}
      />
    );
  }
}

export default AddressesList;
