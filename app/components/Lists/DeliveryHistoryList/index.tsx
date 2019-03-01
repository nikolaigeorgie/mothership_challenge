import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import DeliveryHistoryListView from './Views';
import { IDeliverySearchResult } from '../../../redux/Deliveries/interfaces';
import DeliveryHistoryListItem from '../../ListItems/DeliveryHistoryListItem';

type Props = {
  deliveries: Array<IDeliverySearchResult>;
};

export interface IDeliveryCell {
  item: IDeliverySearchResult;
}

class DeliveryHistoryList extends PureComponent<Props> {
  constructor(props: Readonly<Props>) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
  }

  renderItem(cell: IDeliveryCell) {
    const { item } = cell;
    return <DeliveryHistoryListItem item={item} />;
  }

  render() {
    return (
      <DeliveryHistoryListView
        renderItem={this.renderItem}
        data={this.props.deliveries}
      />
    );
  }
}

const mapStateToProps = (state: {
  deliveries: { data: Array<IDeliverySearchResult> };
}) => ({
  deliveries: state.deliveries.data,
});

export default connect(
  mapStateToProps,
  null,
)(DeliveryHistoryList);
