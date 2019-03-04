import React, { PureComponent } from 'react';
import StandardInputView from './Views';

type Props = {
  width: string;
  placeholder: string;
  value: string;
  onChangeText(text: string): void;
  onFocus(): void;
  testID: string;
};

class StandardInput extends PureComponent<Props> {
  static defaultProps = {
    width: '100%',
  };

  render() {
    return (
      <StandardInputView
        width={this.props.width}
        placeholder={this.props.placeholder}
        onChangeText={this.props.onChangeText}
        onFocus={this.props.onFocus}
        value={this.props.value}
        testID={this.props.testID}
      />
    );
  }
}

export default StandardInput;
