import * as React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

interface Props {
  onPress: any;
}

const CloseTopBarButton = ({ onPress }: Props) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => onPress()}
    activeOpacity={0.5}
  >
    <Image
      source={require('../../assets/icons/Close.png')}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    padding: 2,
  },
});

export default CloseTopBarButton;
