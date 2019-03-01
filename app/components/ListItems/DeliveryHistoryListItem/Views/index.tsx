import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { IDeliverySearchResult } from '../../../../redux/Deliveries/interfaces';
import styles from './styles';

type Props = {
  item: IDeliverySearchResult;
};

class DeliveryHistoryListItemView extends PureComponent<Props> {
  render() {
    const { waypoints } = this.props.item;
    const fromTitle = waypoints[0].name;
    const toTitle = waypoints[1].name;
    return (
      <View style={styles.container}>
        <View style={styles.entryItem}>
          <Text style={styles.title}>FROM</Text>
          <Text>{fromTitle}</Text>
        </View>
        <View style={styles.entryItem}>
          <Text style={styles.title}>TO</Text>
          <Text>{toTitle}</Text>
        </View>
      </View>
    );
  }
}

export default DeliveryHistoryListItemView;
