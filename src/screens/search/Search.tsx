import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import { cocktailScreen } from '../';

interface Props {
  componentId: string;
};

const Search = ({ componentId }: Props) => {
  const onGoCocktail = () => {
    cocktailScreen(componentId)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search!</Text>
      <TouchableHighlight
        onPress={onGoCocktail}
        activeOpacity={0.5}
        underlayColor="transparent"
      >
        <Text style={styles.cocktail}>Cocktail</Text>
      </TouchableHighlight>
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
  cocktail: {
    backgroundColor: 'tomato',
  }
});

export default Search;
