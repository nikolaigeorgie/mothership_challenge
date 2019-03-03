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
          <Text style={styles.serviceType}>
            {this.props.item.serviceType.toUpperCase()}
          </Text>
          {/*<Text>{this.props.item.days}</Text>*/}
          <Text style={styles.price}>{`$${this.props.item.price}`}</Text>
          <Text style={styles.deliveryDate}>
            {new Date(this.props.item.estimatedDeliveryDate).toLocaleString(
              'en-US',
            )}
          </Text>
        </View>
      </View>
    );
  }
}

export default RateListItemView;
