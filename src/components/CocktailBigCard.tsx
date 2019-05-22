import * as React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import * as Types from '../services/api/api.types';

interface Props {
  drink: Types.Drink;
}

const CocktailBigCard = ({ drink }: Props) => {
  return (
    <View style={styles.card}>
      <View style={styles.card_img_wrapper}>
        <Image style={styles.card_img} source={{ uri: drink.picture }}/>
      </View>

      <View style={styles.card_body}>
        {drink.ingredients.map((i: any) =>
          <Text key={i.name} style={styles.card_description}>{i.measure} - {i.name}</Text>)}
      </View>

      <View>
        <Text style={styles.card_resume_text}>
          • How to prepare
        </Text>
        <Text style={styles.card_resume_text}>
          {drink.instructions}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 4,
    backgroundColor: '#ffffff',
    paddingTop: 16,
    paddingBottom: 16,
    marginLeft: 16,
    marginRight: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
    marginBottom: 24,
  },
  card_body: {
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
  card_img_wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    height: 240,
  },
  card_img: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  card_resume_text: {
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 8,
  },
});

export default CocktailBigCard;
