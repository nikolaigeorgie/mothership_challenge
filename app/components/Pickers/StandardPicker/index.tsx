import React, { PureComponent } from 'react';
import StandardPickerView from './Views';

export interface IPickerItem {
  label: string;
  value: string;
}

type Props = {
  selectedValue: string;
  data: Array<IPickerItem>;
  onValueChange(item: string): void;
};

type State = {
  selectedValue: string;
};

class StandardPicker extends PureComponent<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      selectedValue: props.selectedValue,
    };
    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(selectedValue: string) {
    this.setState({
      selectedValue,
    });
    this.props.onValueChange(selectedValue);
  }

  render() {
    return (
      <StandardPickerView
        selectedValue={this.state.selectedValue}
        data={this.props.data}
        onValueChange={this.onValueChange}
      />
    );
  }
}

export default StandardPicker;
