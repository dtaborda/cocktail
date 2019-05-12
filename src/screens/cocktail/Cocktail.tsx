import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface Props {}
const CocktailScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cocktail!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default CocktailScreen;
