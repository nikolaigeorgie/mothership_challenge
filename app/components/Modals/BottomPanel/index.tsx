import React, { PureComponent, ReactElement } from 'react';
import { Animated } from 'react-native';
import { Navigation } from 'react-native-navigation';
import BottomPanelView from './Views';
import { BottomModalHeight } from './Views/styles';

type Props = {
  componentId: string;
  renderView(): ReactElement;
};

class BottomPanel extends PureComponent<Props> {
  private opacity: Animated.Value;
  private bottom: Animated.Value;

  constructor(props: Readonly<Props>) {
    super(props);
    this.opacity = new Animated.Value(0);
    this.bottom = new Animated.Value(BottomModalHeight);
    this.closeOverlay = this.closeOverlay.bind(this);
    Navigation.events().bindComponent(this);
  }

  componentDidAppear() {
    Animated.timing(this.opacity, {
      toValue: 0.6,
      useNativeDriver: true,
    }).start();
    Animated.timing(this.bottom, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  }

  closeOverlay() {
    Animated.parallel([
      Animated.timing(this.bottom, {
        toValue: BottomModalHeight,
        useNativeDriver: true,
      }),
      Animated.timing(this.opacity, {
        toValue: 0,
        useNativeDriver: true,
      }),
    ]).start();
    const ANIMATION_COMPLETION_DELAY = 500;
    setTimeout(() => {
      Navigation.dismissOverlay(this.props.componentId);
    }, ANIMATION_COMPLETION_DELAY);
  }

  render() {
    return (
      <BottomPanelView
        opacity={this.opacity}
        bottom={this.bottom}
        closeOverlay={this.closeOverlay}
      >
        {this.props.renderView()}
      </BottomPanelView>
    );
  }
}

export default BottomPanel;
