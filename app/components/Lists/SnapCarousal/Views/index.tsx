import React, { PureComponent, ReactNode } from 'react';
import { View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Scaled } from '../../../../themes';

type Props = {
  data: Array<any>;
  renderItem(item: { item: any; index: number }): ReactNode;
  height: number;
};

class SnapCarousalView extends PureComponent<Props> {
  render() {
    return (
      <View
        style={{
          height: this.props.height,
        }}
      >
        <Carousel
          data={this.props.data}
          renderItem={this.props.renderItem}
          sliderWidth={Scaled.screen.width}
          itemWidth={Scaled.screen.width * 0.8}
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      </View>
    );
  }
}

export default SnapCarousalView;
