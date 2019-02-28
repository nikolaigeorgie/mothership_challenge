import React, { PureComponent } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import { Images, Scaled } from '../../../../themes';
import styles from './styles';

export type Props = {
  leftImage: ImageSourcePropType;
  rightImage: ImageSourcePropType;
  leftButtonOnPress: () => void;
  rightButtonOnPress(): void;
};

class StandardNavBarView extends PureComponent<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.toolBar, { marginTop: Scaled.navBarOffset }]}>
          <View style={styles.leftContainer}>
            <TouchableOpacity onPress={this.props.leftButtonOnPress}>
              <Image source={this.props.leftImage} style={styles.leftImage} />
            </TouchableOpacity>
            <Image source={Images.mothershipLogo} style={styles.logoImage} />
          </View>
          <TouchableOpacity onPress={this.props.rightButtonOnPress}>
            <Image source={this.props.rightImage} style={styles.rightImage} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default StandardNavBarView;
