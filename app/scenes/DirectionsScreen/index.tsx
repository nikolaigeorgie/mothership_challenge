import React, { PureComponent } from 'react';
import DirectionsScreenView from './Views';

interface Props {
  componentId: string;
}

class DirectionsScreen extends PureComponent<Props> {
  constructor(props: Readonly<Props>) {
    super(props);
    this.rightButtonOnPress = this.rightButtonOnPress.bind(this);
  }

  rightButtonOnPress() {
    // TODO: Handle right button on press (right menu open)
  }

  render() {
    return (
      <DirectionsScreenView
        componentId={this.props.componentId}
        rightButtonOnPress={this.rightButtonOnPress}
      />
    );
  }
}

export default DirectionsScreen;
