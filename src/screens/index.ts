import { Navigation } from 'react-native-navigation';
import Cocktail from './cocktail/Cocktail';
import Search from './search/Search';

export const COCKTAIL_SCREEN = 'cocktail.CocktailScreen';
export const SEARCH_SCREEN = 'cocktail.SearchScreen';

export const Screens = new Map();
Screens.set(COCKTAIL_SCREEN, Cocktail);
Screens.set(SEARCH_SCREEN, Search);

export const startApp = () => {
  return Navigation.setRoot({
    root: {
      stack: {
        id: 'cocktailApp',
        children: [
          {
            component: {
              name: SEARCH_SCREEN,
              options: {
                statusBar: {
                  visible: true,
                  style: 'light',
                },
              },
            },
          },
        ],
      },
    },
  });
};

export const cocktailScreen = (id: string) => Navigation.push(id, {
  component: {
    name: COCKTAIL_SCREEN,
  },
});