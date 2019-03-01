import React, { PureComponent, ReactElement } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import styles from './styles';

type Props = {
  leftImage: ImageSourcePropType;
  leftButtonOnPress: () => void;
  title: string;
  separatorLineWidth: number | string;
};

class StackedNavBarView extends PureComponent<Props> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.leftButtonOnPress}>
          <Image source={this.props.leftImage} style={styles.leftImage} />
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>{this.props.title}</Text>
          <View
            style={[styles.separator, { width: this.props.separatorLineWidth }]}
          />
        </View>
      </View>
    );
  }
}

export default StackedNavBarView;
