import React, { PureComponent } from 'react';
import StackedNavBarView from './Views';
import { ImageSourcePropType } from 'react-native';

type Props = {
  leftImage: ImageSourcePropType;
  leftButtonOnPress: () => void;
  title: string;
  separatorLineWidth: number | string;
};

class StackedNavBar extends PureComponent<Props> {
  render() {
    return (
      <StackedNavBarView
        leftImage={this.props.leftImage}
        leftButtonOnPress={this.props.leftButtonOnPress}
        title={this.props.title}
        separatorLineWidth={this.props.separatorLineWidth}
      />
    );
  }
}

export default StackedNavBar;
