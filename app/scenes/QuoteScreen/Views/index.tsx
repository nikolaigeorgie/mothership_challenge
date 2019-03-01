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
import { Images, Scaled } from '../../../themes';
import ClearEntryInput from '../../../components/Inputs/ClearEntryInput';
import styles from './styles';
import MaterialButton from '../../../components/Buttons/MaterialButton';

const INPUT_WIDTH = Scaled.screen.width * 0.36;

type Props = {
  typeValue: string;
  toggleValueModal(): void;
  weightValue: string;
  onChangeWeightText(text: string): void;
  dimensionsValue: string;
  onChangeDimensionsText(text: string): void;
  quantityValue: string;
  onChangeQuantityText(text: string): void;
  popBack(): void;
  determineIfNextDisabled: boolean;
  createQuoteOnPress(): void;
  loading: boolean;
};

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
                value="4780 Poe Avenue"
                headerTitle="From"
                isDisabled
              />
              <ClearEntryInput
                width={INPUT_WIDTH}
                value="4780 Poe Avenue"
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
              <ClearEntryInput
                width={INPUT_WIDTH}
                placeholder="L X W X H in."
                value={this.props.dimensionsValue}
                onChangeText={this.props.onChangeDimensionsText}
                headerTitle="Dimensions"
                rightComponent={
                  this.props.dimensionsValue.length > 0 && (
                    <Text style={styles.rightText}>in.</Text>
                  )
                }
                keyboardType="numeric"
                maxLength={12}
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
