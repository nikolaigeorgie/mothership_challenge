import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import styles from './styles';

type Props = {
  onPress(): void;
  text: string;
  backgroundColor: string;
  width: string | number;
  disabled: boolean;
  loading: boolean;
  testID: string;
};

class MaterialButtonView extends PureComponent<Props> {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        disabled={this.props.disabled}
        style={[
          styles.button,
          {
            backgroundColor: this.props.backgroundColor,
            width: this.props.width,
            opacity: this.props.disabled ? 0.3 : 1,
          },
        ]}
        testID={this.props.testID}
      >
        {this.props.loading ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.text}>{this.props.text}</Text>
        )}
      </TouchableOpacity>
    );
  }
}

export default MaterialButtonView;
