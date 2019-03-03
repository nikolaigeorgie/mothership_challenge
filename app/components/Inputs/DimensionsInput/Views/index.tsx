import React, { PureComponent } from 'react';
import { TextInput, Text, View } from 'react-native';
import { Colors } from '../../../../themes';
import styles from './styles';

type Props = {
  width: string | number;
  lengthDimensionValue: string;
  onChangeLengthDimensionText(text: string): void;
  widthDimensionValue: string;
  onChangeWidthDimensionText(text: string): void;
  heightDimensionValue: string;
  onChangeHeightDimensionText(text: string): void;
  isDisabled: boolean;
  color: string;
};

class DimensionsInputView extends PureComponent<Props> {
  render() {
    return (
      <View style={[styles.container, { width: this.props.width }]}>
        <Text style={styles.headerTitle}>Dimensions</Text>
        <View style={styles.textFieldContainers}>
          <TextInput
            placeholder="L"
            placeholderTextColor={Colors.grey}
            value={this.props.lengthDimensionValue}
            style={styles.textField}
            autoCorrect={false}
            keyboardType="numeric"
            onChangeText={this.props.onChangeLengthDimensionText}
            maxLength={3}
            pointerEvents={this.props.isDisabled ? 'none' : 'auto'}
          />
          <Text style={[{ color: this.props.color }, styles.text]}>X</Text>
          <TextInput
            placeholder="W"
            placeholderTextColor={Colors.grey}
            value={this.props.widthDimensionValue}
            style={styles.textField}
            autoCorrect={false}
            keyboardType="numeric"
            onChangeText={this.props.onChangeWidthDimensionText}
            maxLength={3}
            pointerEvents={this.props.isDisabled ? 'none' : 'auto'}
          />
          <Text style={[{ color: this.props.color }, styles.text]}>X</Text>
          <TextInput
            placeholder="H"
            placeholderTextColor={Colors.grey}
            value={this.props.heightDimensionValue}
            style={styles.textField}
            autoCorrect={false}
            keyboardType="numeric"
            onChangeText={this.props.onChangeHeightDimensionText}
            maxLength={3}
            pointerEvents={this.props.isDisabled ? 'none' : 'auto'}
          />
          <Text style={[{ color: this.props.color }, styles.text]}>in.</Text>
        </View>
      </View>
    );
  }
}

export default DimensionsInputView;
