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
  menuOnPress: () => void;
  rightButtonOnPress(): void;
  rightImage: ImageSourcePropType;
};

class StandardNavBarView extends PureComponent<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.toolBar, { marginTop: Scaled.navBarOffset }]}>
          <View style={styles.leftContainer}>
            <TouchableOpacity onPress={this.props.menuOnPress}>
              <Image source={Images.menuIcon} style={styles.menuImage} />
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
