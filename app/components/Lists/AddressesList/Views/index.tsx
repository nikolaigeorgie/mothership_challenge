import React, { PureComponent, ReactElement } from 'react';
import { FlatList } from 'react-native';
import NoContent from '../../../Views/NoContent';
import styles from './styles';
import { IAddressItem } from '../../../Inputs/FromToSearch';
import { IAddressCell } from '../index';

type Props = {
  renderItem(cellItem: IAddressCell): ReactElement;
  data: Array<IAddressItem>;
  keyExtractor(item: { id: string }): string;
};

class AddressesListView extends PureComponent<Props> {
  render() {
    return (
      <FlatList
        renderItem={this.props.renderItem}
        data={this.props.data}
        keyboardShouldPersistTaps="always"
        style={styles.flatList}
        keyExtractor={this.props.keyExtractor}
        ListEmptyComponent={
          <NoContent
            title="No Addresses"
            message="Please verify your entry"
          />
        }
      />
    );
  }
}

export default AddressesListView;
