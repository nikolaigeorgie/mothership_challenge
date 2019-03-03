import React, { PureComponent } from 'react';
import DimensionsInputView from './Views';
import { Colors } from '../../../themes';

type Props = {
  width: string | number;
  updateDimensions(length: string, width: string, height: string): void;
  dimensions: {
    length: string;
    width: string;
    height: string;
  };
  isDisabled: boolean;
  color: string;
};

type State = {
  lengthDimensionValue: string;
  widthDimensionValue: string;
  heightDimensionValue: string;
};

class DimensionsInput extends PureComponent<Props, State> {
  static defaultProps = {
    width: '100%',
    isDisabled: false,
    updateDimensions: () => {},
    dimensions: {
      length: '',
      width: '',
      height: '',
    },
    color: Colors.black,
  };

  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      lengthDimensionValue: props.dimensions.length,
      widthDimensionValue: props.dimensions.width,
      heightDimensionValue: props.dimensions.height,
    };
    this.onChangeLengthDimensionText = this.onChangeLengthDimensionText.bind(
      this,
    );
    this.onChangeWidthDimensionText = this.onChangeWidthDimensionText.bind(
      this,
    );
    this.onChangeHeightDimensionText = this.onChangeHeightDimensionText.bind(
      this,
    );
  }

  async onChangeLengthDimensionText(lengthDimensionValue: string) {
    await this.setState({ lengthDimensionValue });
    this.validateData();
  }

  async onChangeWidthDimensionText(widthDimensionValue: string) {
    await this.setState({ widthDimensionValue });
    this.validateData();
  }

  async onChangeHeightDimensionText(heightDimensionValue: string) {
    await this.setState({ heightDimensionValue });
    this.validateData();
  }

  validateData() {
    const {
      lengthDimensionValue,
      widthDimensionValue,
      heightDimensionValue,
    } = this.state;
    this.props.updateDimensions(
      lengthDimensionValue,
      widthDimensionValue,
      heightDimensionValue,
    );
  }

  render() {
    return (
      <DimensionsInputView
        width={this.props.width}
        lengthDimensionValue={this.state.lengthDimensionValue}
        widthDimensionValue={this.state.widthDimensionValue}
        heightDimensionValue={this.state.heightDimensionValue}
        onChangeLengthDimensionText={this.onChangeLengthDimensionText}
        onChangeWidthDimensionText={this.onChangeWidthDimensionText}
        onChangeHeightDimensionText={this.onChangeHeightDimensionText}
        isDisabled={this.props.isDisabled}
        color={this.props.color}
      />
    );
  }
}

export default DimensionsInput;
