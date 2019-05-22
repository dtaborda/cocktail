import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { CocktailSmallCard } from '../../components';
import * as Types from '../../services/api/api.types';

export interface PropTypes {
  componentId: string;
  app: any;
  onCocktailListRequest: () => void;
  onCocktailRequest: (data: Types.Drink, id: string) => void;
}

const Home = ({ componentId, app, onCocktailListRequest, onCocktailRequest }: PropTypes) => {
  const {
    cocktailList,
    fetching,
  } = app;
  useEffect(
    () => {
      onCocktailListRequest();
    },
    [null],
  );

  const onGoCocktail = (cocktail: Types.Drink) => {
    onCocktailRequest(cocktail, componentId);
  };

  const renderCocktailList = () => (
    <FlatList
      data={cocktailList}
      renderItem={({ item }: any) => {
        return (
          <CocktailSmallCard
            key={item.id}
            name={item.name}
            picture={item.picture}
            ingredients={item.ingredients}
            onPress={() => onGoCocktail(item)}
          />
        );
      }}
      keyExtractor={(item, index) => index.toString()}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        {
          fetching ?
            <ActivityIndicator size="large" color="#FFF" /> :
            renderCocktailList()
        }
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

export default Home;
