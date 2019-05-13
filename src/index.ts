import { Navigation } from 'react-native-navigation';
import { Screens, startApp } from './screens';

// Register screens
Screens.forEach((ScreenComponent, key) =>
  Navigation.registerComponent(key, () => ScreenComponent));

Navigation.events().registerAppLaunchedListener(() => {
  startApp();
});

// Listen for componentDidAppear screen events
Navigation.events().registerComponentDidAppearListener(({ componentId, componentName }) => {
  console.log('Listen for componentDidAppear screen events');
  console.log(componentId, componentName);
});

// Listen for componentDidAppear screen events
Navigation.events().registerComponentDidDisappearListener(({ componentId, componentName }) => {
  console.log('Listen for componentDidDisappear screen events');
  console.log(componentId, componentName);
});
