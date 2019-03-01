import React, { PureComponent } from 'react';
import { SafeAreaView } from 'react-native';
import styles from './styles';
import DeliveryHistoryList from '../../../components/Lists/DeliveryHistoryList';

class RideHistoryScreenView extends PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <DeliveryHistoryList />
      </SafeAreaView>
    );
  }
}

export default RideHistoryScreenView;
