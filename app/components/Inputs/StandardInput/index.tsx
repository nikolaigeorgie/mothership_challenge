import React, { PureComponent } from 'react';
import StandardInputView from './Views';

type Props = {
  width: string;
  placeholder: string;
  value: string;
  onChangeText(text: string): void;
  onFocus(): void;
  testID: string;
  createInputRef(ref: any): any;
};

class StandardInput extends PureComponent<Props> {
  static defaultProps = {
    width: '100%',
    createInputRef: () => {},
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
        createInputRef={this.props.createInputRef}
      />
    );
  }
}

export default StandardInput;
