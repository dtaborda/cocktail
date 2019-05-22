import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const SearchCard = ({ children }: any) => {
  return (
    <View style={styles.card}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 4,
    backgroundColor: 'transparent',
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

export default SearchCard;
