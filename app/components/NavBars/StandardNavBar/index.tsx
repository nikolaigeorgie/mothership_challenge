import React, { PureComponent } from 'react';
import StandardNavBarView from './Views';
import { ImageSourcePropType } from 'react-native';

type Props = {
  componentId: string;
  leftImage: ImageSourcePropType;
  rightImage: ImageSourcePropType;
  leftButtonOnPress: () => void;
  rightButtonOnPress(): void;
};

class StandardNavBar extends PureComponent<Props> {
  render() {
    return (
      <StandardNavBarView
        leftButtonOnPress={this.props.leftButtonOnPress}
        leftImage={this.props.leftImage}
        rightButtonOnPress={this.props.rightButtonOnPress}
        rightImage={this.props.rightImage}
      />
    );
  }
}

export default StandardNavBar;
