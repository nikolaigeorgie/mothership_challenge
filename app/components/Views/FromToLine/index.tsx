import React, { PureComponent } from 'react';
import { View } from 'react-native';
import styles from './styles';

class FromToLine extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.fromDot} />
        <View style={styles.fromToSeparator} />
        <View style={styles.toDot} />
      </View>
    );
  }
}

export default FromToLine;
