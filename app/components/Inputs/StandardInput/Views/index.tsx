import React, { PureComponent } from 'react';
import { TextInput } from 'react-native';
import styles from './styles';
import { Colors } from '../../../../themes';

type Props = {
  width: string;
  placeholder: string;
  value: string;
  onChangeText(text: string): void;
  onFocus(): void;
  testID: string
};

class StandardInputView extends PureComponent<Props> {
  render() {
    return (
      <TextInput
        style={[styles.input, { width: this.props.width }]}
        placeholder={this.props.placeholder}
        placeholderTextColor={Colors.grey}
        value={this.props.value}
        onFocus={this.props.onFocus}
        onChangeText={this.props.onChangeText}
        testID={this.props.testID}
      />
    );
  }
}

export default StandardInputView;
