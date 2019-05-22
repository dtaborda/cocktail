import { Navigation } from 'react-native-navigation';
import { storeConfig } from './redux';
import { Screens, startApp } from './screens';
import withRedux from './screens/withRedux';

const store = storeConfig();

// Register screens
Screens.forEach((ScreenComponent, key) => {
  const withReduxStore = withRedux(store);

  Navigation.registerComponent(
    key,
    withReduxStore(ScreenComponent),
  );
});

Navigation.events().registerAppLaunchedListener(() => {
  startApp();
});
