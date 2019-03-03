import React, { PureComponent } from 'react';
import RateListItemView from './Views';
import { IRateShape } from '../../../redux/Deliveries/interfaces';

type Props = {
  item: IRateShape;
};

class RateListItem extends PureComponent<Props> {
  render() {
    return <RateListItemView item={this.props.item} />;
  }
}

export default RateListItem;
