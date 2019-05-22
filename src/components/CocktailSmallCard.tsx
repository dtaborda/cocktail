import * as React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

const CocktailSmallCard = (props: any) => {
  const data = {
    name: '',
    picture: '',
    ingredients: [],
    ...props,
  };
  return (
    <TouchableHighlight
      onPress={data.onPress}
      activeOpacity={0.5}
      underlayColor="transparent"
    >
      <View style={styles.card}>
        <View style={styles.card_left}>
          <Text style={styles.card_title}>{data.name}</Text>

          {[0, 1].map(i => data.ingredients[i] &&
            <Text key={i} style={styles.card_description}>• {data.ingredients[i].name}</Text>)}

          {data.ingredients.length > 2 &&
            // tslint:disable-next-line:max-line-length
            <Text style={styles.card_more}> y {data.ingredients.length - 2} ingrediente{data.ingredients.length > 3 ? 's' : ''} mas</Text>}
        </View>
        <View style={styles.card_right}>
          <Image style={styles.card_img} source={{ uri: data.picture }}/>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 160,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 12,
    borderRadius: 4,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
    flexDirection: 'row',
  },

  card_left: {
    flex: 1,
    paddingLeft: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
  card_title: {
    fontSize: 24,
    lineHeight: 24,
    color: '#555',
    marginBottom: 4,
  },
  card_description: {
    marginTop: 4,
    lineHeight: 14,
  },
  card_more: {
    marginTop: 6,
    fontSize: 11,
    lineHeight: 12,
    color: '#666',
  },

  card_right: {
    width: 148,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card_img: {
    backgroundColor: '#ddd',
    width: 124,
    height: 134,
    borderRadius: 4,
  },
});

export default CocktailSmallCard;
