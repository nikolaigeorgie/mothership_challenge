import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { IDeliverySearchResult } from '../../../../redux/Deliveries/interfaces';
import styles from './styles';

type Props = {
  item: IDeliverySearchResult;
};

class DeliveryHistoryListItemView extends PureComponent<Props> {
  render() {
    const { fromAddress, toAddress } = this.props.item;
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>FROM</Text>
          <Text style={styles.description}>{fromAddress.street}</Text>
        </View>
        <View>
          <Text style={styles.title}>TO</Text>
          <Text style={styles.description}>{toAddress.street}</Text>
        </View>
      </View>
    );
  }
}

export default DeliveryHistoryListItemView;
