import React, { PureComponent } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

type Props = {
  onPress(): void;
  text: string;
  backgroundColor: string;
  width: string | number;
};

class MaterialButtonView extends PureComponent<Props> {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[
          styles.button,
          {
            backgroundColor: this.props.backgroundColor,
            width: this.props.width,
          },
        ]}
      >
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

export default MaterialButtonView;
