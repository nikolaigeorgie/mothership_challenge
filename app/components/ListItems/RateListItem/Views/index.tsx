import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { IRateShape } from '../../../../redux/Deliveries/interfaces';
import styles from './styles';

type Props = {
  item: IRateShape;
};

class RateListItemView extends PureComponent<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text>{this.props.item.serviceLevel}</Text>
          <Text>{this.props.item.serviceType}</Text>
          <Text>{this.props.item.price}</Text>
          <Text>{this.props.item.days}</Text>
          <Text>
            {new Date(this.props.item.estimatedDeliveryDate).toLocaleString(
              'en-US',
            )}
          </Text>
          <Text>
            {new Date(this.props.item.estimatedPickupDate).toLocaleString(
              'en-US',
            )}
          </Text>
        </View>
      </View>
    );
  }
}

export default RateListItemView;
