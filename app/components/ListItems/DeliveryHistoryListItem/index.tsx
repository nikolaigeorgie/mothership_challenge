import React, { PureComponent } from 'react';
import DeliveryHistoryListItemView from './Views';
import { IDeliverySearchResult } from '../../../redux/Deliveries/interfaces';

type Props = {
  item: IDeliverySearchResult;
};

class DeliveryHistoryListItem extends PureComponent<Props> {
  render() {
    return <DeliveryHistoryListItemView item={this.props.item} />;
  }
}

export default DeliveryHistoryListItem;
