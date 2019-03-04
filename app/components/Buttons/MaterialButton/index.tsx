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
  testID?: string;
};

class MaterialButton extends PureComponent<Props> {
  static defaultProps = {
    width: '90%',
    backgroundColor: Colors.taxiYellow,
    disabled: false,
    loading: false,
    testID: '',
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
        testID={this.props.testID}
      />
    );
  }
}

export default MaterialButton;
