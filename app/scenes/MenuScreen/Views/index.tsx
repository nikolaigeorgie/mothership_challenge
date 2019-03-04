import React, { PureComponent } from 'react';
import { SafeAreaView, Text } from 'react-native';
import styles from './styles';

class MenuScreenView extends PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>No Menu Currently Available</Text>
      </SafeAreaView>
    );
  }
}

export default MenuScreenView;
