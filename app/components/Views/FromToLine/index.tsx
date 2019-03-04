import React, { PureComponent } from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
import { Images } from '../../../themes';

class FromToLine extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.fromDot} />
        <View style={styles.fromToSeparator} />
        <Image source={Images.redArrow} style={styles.downArrow} />
      </View>
    );
  }
}

export default FromToLine;
