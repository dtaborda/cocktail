import * as React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

interface Props {
  onPress: any;
}

const SearchTopBarButton = (props: Props) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => props.onPress()}
    activeOpacity={0.5}
  >
    <Image
      source={require('../../assets/icons/Search.png')}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    padding: 2,
  },
});

export default SearchTopBarButton;
