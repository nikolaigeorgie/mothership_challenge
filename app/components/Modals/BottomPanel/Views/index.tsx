import React, { PureComponent, ReactElement } from 'react';
import { View, Animated, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';

type Props = {
  children: ReactElement | Array<ReactElement>;
  closeOverlay(): void;
  opacity: Animated.Value;
  bottom: Animated.Value;
};

class BottomPanelView extends PureComponent<Props> {
  render() {
    return (
      <View>
        <TouchableWithoutFeedback onPress={this.props.closeOverlay}>
          <Animated.View
            style={[styles.container, { opacity: this.props.opacity }]}
          />
        </TouchableWithoutFeedback>
        <Animated.View
          style={[
            styles.bottomModal,
            { transform: [{ translateY: this.props.bottom }] },
          ]}
        >
          {this.props.children}
        </Animated.View>
      </View>
    );
  }
}

export default BottomPanelView;
