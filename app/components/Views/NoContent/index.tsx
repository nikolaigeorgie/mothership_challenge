import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

type Props = {
  title: string;
  message: string;
};

class NoContent extends PureComponent<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.message}>{this.props.message}</Text>
      </View>
    );
  }
}

export default NoContent;
