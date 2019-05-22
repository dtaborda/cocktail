import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { CloseTopBarButton, SearchTopBarButton } from '../components';
import CocktailContainer from './cocktail/CocktailContainer';
import HomeContainer from './home/HomeContainer';
import SearchContainer from './search/SearchContainer';

export const COCKTAIL_SCREEN = 'cocktail.CocktailScreen';
export const HOME_SCREEN = 'cocktail.HomeScreen';
export const SEARCH_SCREEN = 'cocktail.SearchScreen';
export const CLOSE_TOPBAR_BUTTON = 'cocktail.CloseTopBarButton';
export const SEARCH_TOPBAR_BUTTON = 'cocktail.SearchTopBarButton';

export const Screens = new Map();
Screens.set(COCKTAIL_SCREEN, CocktailContainer);
Screens.set(HOME_SCREEN, HomeContainer);
Screens.set(SEARCH_SCREEN, SearchContainer);
Screens.set(CLOSE_TOPBAR_BUTTON, CloseTopBarButton);
Screens.set(SEARCH_TOPBAR_BUTTON, SearchTopBarButton);

// Home screen
export const startApp = () => {
  return Navigation.setRoot({
    root: {
      stack: {
        id: 'cocktailApp',
        children: [{
          component: {
            name: HOME_SCREEN,
            options: {
              statusBar: {
                visible: true,
                style: 'light',
              },
              topBar: {
                visible: true,
                drawBehind: true,
                animate: true,
                hideOnScroll: false,
                title: {
                  alignment: 'center',
                  color: 'white',
                  fontSize: 24,
                  text: 'Random drinks 0.1',
                },
                background: {
                  color: 'transparent',
                  ...Platform.select({
                    ios: {
                      translucent: true,
                      blur: false,
                    },
                  }),
                },
                rightButtons: [{
                  id: 'searchTopBarButtonId',
                  component: {
                    name: SEARCH_TOPBAR_BUTTON,
                    passProps: {
                      onPress: onSearch,
                    },
                  },
                }],
              },
            },
          },
        }],
      },
    },
  });
};

// open search modal
const onSearch = () => Navigation.showModal({
  stack: {
    children: [{
      component: {
        name: SEARCH_SCREEN,
        options: {
          topBar: {
            visible: true,
            drawBehind: true,
            animate: true,
            hideOnScroll: false,
            title: {
              alignment: 'center',
              color: 'white',
              fontSize: 24,
              text: 'Search',
            },
            background: {
              color: 'transparent',
              ...Platform.select({
                ios: {
                  translucent: true,
                  blur: false,
                },
              }),
            },
            rightButtons: [{
              id: 'closeTopBarButtonId',
              component: {
                name: CLOSE_TOPBAR_BUTTON,
                passProps: {
                  onPress: onClose,
                },
              },
            }],
          },
          layout: {
            backgroundColor: 'rgba(0,0,0,0.6)',
          },
        },
      },
    }],
  },
});

// close search modal
export const onClose = () => Navigation.dismissAllModals();

// go to cocktail screen
export const cocktailScreen = (id: string, title: string) => Navigation.push(id, {
  component: {
    name: COCKTAIL_SCREEN,
    options: {
      statusBar: {
        visible: true,
      },
      topBar: {
        visible: true,
        drawBehind: true,
        animate: true,
        hideOnScroll: false,
        title: {
          alignment: 'center',
          color: 'white',
          fontSize: 24,
          text: title,
        },
        background: {
          color: 'transparent',
          ...Platform.select({
            ios: {
              translucent: true,
              blur: false,
            },
          }),
        },
        backButton: {
          visible: true,
          ...Platform.select({
            ios: {
              color:'#FFF',
              showTitle: false,
            },
          }),
        },
      },
    },
  },
});

export {
  CocktailContainer as CocktailScreen,
  SearchContainer as SearchScreen,
};
