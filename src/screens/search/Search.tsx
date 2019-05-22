import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import {
  RadioButton,
  SearchCard,
  SearchInput,
  TouchableButton,
} from '../../components';

const filterList = [{
  name: 'Cocktail glass',
  query: 'g=Cocktail_glass',
}, {
  name: 'Vodka Cocktails',
  query: 'i=Vodka',
}];

export interface FilterTypes {
  name: string;
  query: string;
}

export interface PropTypes {
  app: any;
  onFilterCocktailListRequest: (filter: FilterTypes) => void;
  onCloseSearchModal: () => void;
}

const Search = ({ onFilterCocktailListRequest, app, onCloseSearchModal }: PropTypes) => {
  const [filter, setFilter] = useState<FilterTypes>({ name: '', query: '' });
  const [searchText, setSearchText] = useState<string>('');

  const RadioButtons = () => {
    const filers = filterList.map((item: FilterTypes, index: number) => {
      return (
        <RadioButton
          key={index}
          label={item.name}
          onPress={() => toggle(item)}
          selected={filter && item.name === filter.name}
        />
      );
    });

    return [filers];
  };

  const toggle = (data: any) => {
    setFilter(data);
  };

  const onFocus = () => {
    console.log('onFocus');
  };

  const onBlur = () => {
    console.log('onBlur');
  };

  const onChangeText = (value: any) => {
    setSearchText(value);
  };

  const onClearText = () => setSearchText('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <SearchCard>
          <SearchInput
            onFocus={onFocus}
            onBlur={onBlur}
            onChangeText={onChangeText}
            onClearText={onClearText}
            value={searchText}
          />
          <Text style={styles.title}>Filter: </Text>
          {RadioButtons()}
          <TouchableButton
            label="Search"
            onPress={() => {
              onFilterCocktailListRequest(filter);
              onCloseSearchModal();
            }}
            disabled={filter.name === ''}
            fetching={app.fetching}
          />
        </SearchCard>
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
  title: {
    fontSize: 14,
    color: '#000',
    fontWeight: '900',
    fontStyle: 'normal',
    marginBottom: 10,
  },
});

export default Search;
