import React, { PureComponent, ReactElement } from 'react';
import { Picker } from 'react-native';
import styles from './styles';
import { IPickerItem } from '../index';

type Props = {
  selectedValue: string;
  data: Array<IPickerItem>;
  onValueChange(item: string): void;
};

class StandardPickerView extends PureComponent<Props> {
  renderPickerItems() {
    return this.props.data.map(item => {
      return (
        <Picker.Item key={item.label} label={item.label} value={item.value} />
      );
    });
  }
  render() {
    return (
      <Picker
        selectedValue={this.props.selectedValue}
        style={styles.picker}
        onValueChange={this.props.onValueChange}
      >
        {this.renderPickerItems()}
      </Picker>
    );
  }
}

export default StandardPickerView;
