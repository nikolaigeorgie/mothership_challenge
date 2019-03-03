import React, { PureComponent } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import StackedNavBar from '../../../components/NavBars/StackedNavBar';
import { Colors, Images, Scaled } from '../../../themes';
import ClearEntryInput from '../../../components/Inputs/ClearEntryInput';
import styles from './styles';
import MaterialButton from '../../../components/Buttons/MaterialButton';
import DimensionsInput from '../../../components/Inputs/DimensionsInput';

type Props = {
  typeValue: string;
  toggleValueModal(): void;
  weightValue: string;
  onChangeWeightText(text: string): void;
  updateDimensions(length: string, width: string, height: string): void;
  quantityValue: string;
  onChangeQuantityText(text: string): void;
  popBack(): void;
  determineIfNextDisabled: boolean;
  createQuoteOnPress(): void;
  loading: boolean;
  fromAddressTitle: string;
  toAddressTitle: string;
  dimensionValues: {
    length: string;
    width: string;
    height: string;
  };
};

const INPUT_WIDTH = Scaled.screen.width * 0.36;

class QuoteScreenView extends PureComponent<Props> {
  render() {
    const { height } = Scaled.screen;
    const extraHeight = height <= 568 ? height * 0.1 : 0;
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView>
          <KeyboardAwareScrollView
            resetScrollToCoords={{ x: 0, y: 0 }}
            scrollEnabled={false}
            keyboardShouldPersistTaps="handled"
            contentInsetAdjustmentBehavior="never"
            extraScrollHeight={extraHeight}
          >
            <StackedNavBar
              leftImage={Images.leftArrow}
              leftButtonOnPress={this.props.popBack}
              separatorLineWidth={Scaled.screen.width * 0.42}
              title="Finalize Quote"
            />
            <View style={styles.sections}>
              <ClearEntryInput
                width={INPUT_WIDTH}
                value={this.props.fromAddressTitle}
                headerTitle="From"
                isDisabled
              />
              <ClearEntryInput
                width={INPUT_WIDTH}
                value={this.props.toAddressTitle}
                headerTitle="To"
                isDisabled
              />
            </View>

            <View style={styles.sections}>
              <TouchableOpacity onPress={this.props.toggleValueModal}>
                <ClearEntryInput
                  width={INPUT_WIDTH}
                  value={this.props.typeValue}
                  headerTitle="Type"
                  rightComponent={
                    <Image source={Images.downArrow} style={styles.downImage} />
                  }
                  isDisabled
                />
              </TouchableOpacity>
              <ClearEntryInput
                width={INPUT_WIDTH}
                placeholder="0 lbs each"
                value={this.props.weightValue}
                onChangeText={this.props.onChangeWeightText}
                headerTitle="Weight"
                maxLength={5}
                rightComponent={
                  this.props.weightValue.length > 0 && (
                    <Text style={styles.rightText}>lbs each</Text>
                  )
                }
                keyboardType="numeric"
              />
            </View>
            <View style={styles.sections}>
              <DimensionsInput
                updateDimensions={this.props.updateDimensions}
                width={INPUT_WIDTH}
                color={
                  this.props.dimensionValues.length.length > 0
                    ? Colors.black
                    : Colors.grey
                }
              />
              <ClearEntryInput
                width={INPUT_WIDTH}
                placeholder="0"
                value={this.props.quantityValue}
                onChangeText={this.props.onChangeQuantityText}
                headerTitle="Quantity"
                maxLength={4}
                textFieldWidth="100%"
                keyboardType="numeric"
              />
            </View>
            <MaterialButton
              onPress={this.props.createQuoteOnPress}
              text="Create Quote"
              disabled={this.props.determineIfNextDisabled}
              loading={this.props.loading}
            />
          </KeyboardAwareScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}

export default QuoteScreenView;
