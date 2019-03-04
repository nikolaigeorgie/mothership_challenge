import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import Routes from './Routes';
import { pagesMap } from './pagesMap';
import configureStore from '../redux/store';

export const store = configureStore();

export function makeContainer(containerToWrap) {
  const WrappedContainer = containerToWrap;
  return class extends Component {
    render() {
      return <WrappedContainer {...this.props} />;
    }
  };
}

export function registerScreen(pageMapItem) {
  Navigation.registerComponentWithRedux(
    pageMapItem.id,
    () => makeContainer(pageMapItem.component),
    Provider,
    store,
  );
}

export function registerScreens() {
  // Register every screen to make available
  pagesMap.map(pageItem => registerScreen(pageItem));
}

export function startApp() {
  registerScreens();
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setDefaultOptions({
      topBar: {
        visible: false,
      },
    });

    Navigation.setRoot({
      root: {
        sideMenu: {
          left: {
            stack: {
              id: Routes.LeftMenuView,
              children: [
                {
                  component: {
                    name: Routes.MenuScreen,
                  },
                },
              ],
            },
          },
          center: {
            stack: {
              id: Routes.CenterMenuView,
              children: [
                {
                  component: {
                    name: Routes.DirectionsScreen,
                  },
                },
              ],
            },
          },
          right: {
            stack: {
              id: Routes.RightMenuView,
              children: [
                {
                  component: {
                    name: Routes.RideHistoryScreen,
                  },
                },
              ],
            },
          },
        },
      },
    });
  });
}
