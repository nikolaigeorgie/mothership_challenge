import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { pagesMap } from './pagesMap';

export function makeContainer(containerToWrap) {
  const WrappedContainer = containerToWrap;
  return class extends Component {
    render() {
      return <WrappedContainer {...this.props} />;
    }
  };
}

export function registerScreen(pageMapItem) {
  Navigation.registerComponent(pageMapItem.id, () =>
    makeContainer(pageMapItem.component),
  );
}

export function registerScreens() {
  pagesMap.map(pageItem => registerScreen(pageItem));
}

export function startApp() {
  registerScreens();

  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        component: {
          name: 'AppScreen',
        },
      },
    });
  });
}
