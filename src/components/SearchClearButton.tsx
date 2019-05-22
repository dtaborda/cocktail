import * as React from 'react';
import {
  Image,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';

const SearchClearButton = ({ onPress }: any) => (
  <TouchableHighlight onPress={onPress} style={styles.cancelButtonWrapper}>
    <View style={styles.cancelButtonCrossContainer}>
      <Image
        source={require('../../assets/icons/ClearButtonIcon.png')}
      />
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  cancelButtonWrapper: {
    backgroundColor: '#d3d4d5',
    width: 20,
    height: 20,
    borderRadius: 40,
    borderWidth: 0.1,
    borderColor: 'transparent',
  },

  cancelButtonCrossContainer: {
    flex: 1,
    backgroundColor: '#d3d4d5',
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#d3d4d5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cancelButtonCross: {
    fontSize: 12,
  },
});

export default SearchClearButton;
