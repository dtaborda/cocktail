import * as React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

const TouchableButton = ({ onPress, label, disabled, style, fetching }: any) => (
  <View style={styles.boxWithShadow}>
    <TouchableHighlight
      style={[styles.wrapper, style]}
      onPress={() => !disabled && onPress()}
      activeOpacity={disabled ? 1 : 0.7}
    >
      <View style={ styles.container}>
        {fetching ?
          <ActivityIndicator size="large" color="#FFF" /> :
          <Text style={styles.label}>{label}</Text>
        }
      </View>
    </TouchableHighlight>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'transparent',
    borderRadius: 12,
    borderWidth: 0.1,
    borderColor: 'transparent',
  },

  container: {
    backgroundColor: '#08d1ff',
    borderRadius: 12,
    borderWidth: 3,
    borderColor: '#08d1ff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    height: 60,
  },

  boxWithShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
  },

  label: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
    textAlign: 'center',
    color: '#FFF',
  },
});

export default TouchableButton;
