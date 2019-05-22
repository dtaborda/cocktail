import * as React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

const RadioButton = ({ label, selected, onPress }: any) => {
  return (
    <View style={styles.boxWithShadow}>
      <TouchableHighlight
        onPress = {onPress}
        underlayColor="transparent"
        style={styles.checkBoxButton}
        activeOpacity={1}
      >
        <View style={styles.checkBoxHolder}>
          <Text style={styles.checkBoxLabel}>
            {label}
          </Text>
          <View style={styles.checkBoxWrapper}>
            {selected ? (
              <View style={styles.checkedView} />) : (
              <View style={styles.uncheckedView} />)}
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  checkBoxButton: {
    marginBottom: 20,
    backgroundColor: '#FFF',
    borderRadius: 12,
    zIndex: 9999,
  },

  boxWithShadow: {
    ...Platform.select({
      ios: {
        margin: 2,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
      },
    }),
  },

  checkBoxHolder: {
    borderRadius: 12,
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: 'transparent',
  },

  checkBoxWrapper: {
    backgroundColor: '#e0e0e0',
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 0.1,
    borderColor: 'transparent',
  },

  checkedView: {
    backgroundColor: '#08d1ff',
    marginTop: 3,
    marginBottom: 3,
    marginRight: 3,
    marginLeft: 3,
    flex: 1,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#FFF',
  },

  uncheckedView: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#d6d7da',
  },

  checkBoxLabel: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
});

export default RadioButton;
