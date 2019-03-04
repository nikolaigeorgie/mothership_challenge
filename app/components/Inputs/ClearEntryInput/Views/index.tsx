import React, { PureComponent, ReactElement } from 'react';
import { TextInput, View, Text } from 'react-native';
import styles from './styles';
import { Colors } from '../../../../themes';

type Props = {
  width: string | number;
  placeholder: string;
  value: string;
  onChangeText(text: string): void;
  headerTitle: string;
  isDisabled: boolean;
  rightComponent: ReactElement | any;
  maxLength: number;
  textFieldWidth: number | string;
  keyboardType: string;
  testID: string | undefined;
};

class ClearEntryInputView extends PureComponent<Props> {
  render() {
    return (
      <View style={[styles.container, { width: this.props.width }]}>
        <Text style={styles.headerTitle}>{this.props.headerTitle}</Text>
        <View style={styles.textFieldContainer}>
          <TextInput
            placeholder={this.props.placeholder}
            placeholderTextColor={Colors.grey}
            value={this.props.value}
            testID={this.props.testID}
            style={[{ width: this.props.textFieldWidth }, styles.textInput]}
            autoCorrect={false}
            // @ts-ignore makes no sense. TODO: Investigate type error
            keyboardType={this.props.keyboardType}
            onChangeText={this.props.onChangeText}
            pointerEvents={this.props.isDisabled ? 'none' : 'auto'}
            maxLength={this.props.maxLength}
          />
          {this.props.rightComponent && this.props.rightComponent}
        </View>
      </View>
    );
  }
}

export default ClearEntryInputView;
