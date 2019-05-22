import * as React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import SearchClearButton from './SearchClearButton';

export default class SearchInput extends React.Component<any, any> {
  inputSearch: TextInput | null | undefined;

  onFocus = () => {
    this.props.onFocus();
  }

  onBlur = () => {
    this.props.onBlur();
  }

  onChangeText = (value: any) => {
    this.props.onChangeText(value);
  }

  onClearText = () => this.props.onClearText();

  renderButton = () => {
    if (this.props.value.length > 0) {
      return (
        <SearchClearButton onPress={this.onClearText} />
      );
    }
    return null;
  }

  render = () => (
      <View style={styles.searchContainer}>
        <View style={styles.searchInput}>
          <Image
            style={styles.searchIcon}
            source={require('../../assets/icons/SearchInput.png')}
            fadeDuration={0}
          />
          <TextInput
            style={styles.inputText}
            placeholder={'I\'m looking for...'}
            placeholderTextColor={'#999'}
            underlineColorAndroid={'#fff'}
            autoCorrect={false}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            ref={(inputSearch) => {
              this.inputSearch = inputSearch;
            }}
            onChangeText={this.onChangeText}
            value={this.props.value}
          />
          {this.renderButton()}
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    zIndex: 99,
    backgroundColor: '#FFF',
    overflow: 'hidden',
    paddingVertical: 23,
    paddingHorizontal: 20,
    marginBottom: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#d6d7da',
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
  searchInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  searchIcon: {
    width: 25,
    height: 25,
  },
  inputText: {
    flex: 1,
    paddingRight: 10,
    paddingLeft: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: 18,
    color: '#000',
  },
});
