import React, { PureComponent, ReactElement } from 'react';
import ClearEntryInputView from './Views';

type Props = {
  width: string | number;
  placeholder: string;
  value: string;
  onChangeText(text: string): void;
  headerTitle: string;
  isDisabled: boolean;
  rightText: string;
  rightComponent: ReactElement | any;
  maxLength: number;
  textFieldWidth: number | string;
  keyboardType: string;
  testID: string | undefined;
};

const DEFAULT_MAX = 50;

class ClearEntryInput extends PureComponent<Props> {
  static defaultProps = {
    width: '100%',
    placeholder: '',
    isDisabled: false,
    rightText: '',
    rightComponent: null,
    // TODO: Verify why webstorm complains that onChangeText is not used
    onChangeText: () => {},
    maxLength: DEFAULT_MAX,
    textFieldWidth: 'auto',
    keyboardType: 'default',
    testID: '',
  };

  render() {
    return (
      <ClearEntryInputView
        width={this.props.width}
        placeholder={this.props.placeholder}
        onChangeText={this.props.onChangeText}
        value={this.props.value}
        headerTitle={this.props.headerTitle}
        isDisabled={this.props.isDisabled}
        rightComponent={this.props.rightComponent}
        maxLength={this.props.maxLength}
        textFieldWidth={this.props.textFieldWidth}
        keyboardType={this.props.keyboardType}
        testID={this.props.testID}
      />
    );
  }
}

export default ClearEntryInput;
