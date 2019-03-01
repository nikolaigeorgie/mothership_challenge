import React, { PureComponent } from 'react';
import MaterialButtonView from './Views';
import { Colors } from '../../../themes';

type Props = {
  onPress(): void;
  text: string;
  backgroundColor: string;
  width: string | number;
  disabled: boolean;
  loading: boolean;
};

class MaterialButton extends PureComponent<Props> {
  static defaultProps = {
    width: '90%',
    backgroundColor: Colors.taxiYellow,
    disabled: false,
    loading: false,
  };

  render() {
    return (
      <MaterialButtonView
        onPress={this.props.onPress}
        text={this.props.text}
        backgroundColor={this.props.backgroundColor}
        width={this.props.width}
        disabled={this.props.disabled}
        loading={this.props.loading}
      />
    );
  }
}

export default MaterialButton;
