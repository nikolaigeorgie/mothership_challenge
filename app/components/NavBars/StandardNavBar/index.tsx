import React, { PureComponent } from 'react';
import StandardNavBarView from './Views';
import { ImageSourcePropType } from 'react-native';

export type Props = {
  componentId: string;
  rightButtonOnPress(): void;
  rightImage: ImageSourcePropType;
};

class StandardNavBar extends PureComponent<Props> {
  menuOnPress = () => {
    // TODO : Handle left menu open
  };

  render() {
    return (
      <StandardNavBarView
        menuOnPress={this.menuOnPress}
        rightButtonOnPress={this.props.rightButtonOnPress}
        rightImage={this.props.rightImage}
      />
    );
  }
}

export default StandardNavBar;
