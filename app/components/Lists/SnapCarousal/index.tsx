import React, { PureComponent, ReactNode } from 'react';
import SnapCarousalView from './Views';

type Props = {
  data: Array<any>;
  renderItem(item: { item: any; index: number }): ReactNode;
  height: number;
};

class SnapCarousal extends PureComponent<Props> {
  render() {
    return (
      <SnapCarousalView
        data={this.props.data}
        renderItem={this.props.renderItem}
        height={this.props.height}
      />
    );
  }
}

export default SnapCarousal;
