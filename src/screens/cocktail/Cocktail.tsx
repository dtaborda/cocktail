import * as React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { CocktailBigCard } from '../../components';
import * as Types from '../../services/api/api.types';

export interface PropsTypes {
  app: {
    drink: Types.Drink;
  };
}

const Cocktail = ({ app }: PropsTypes) => {
  const { drink } = app;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <CocktailBigCard drink={drink} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#19bbd1',
  },
  content: {
    flex: 1,
    paddingTop: 4,
  },

});

export default Cocktail;
