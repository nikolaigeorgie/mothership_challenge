
# Mothership Challenge.

React Native mobile application for Mothership.

## Setup

Clone the repo, run `yarn install` or `npm i` and then either `react-native run-ios`.

Mapbox will not work without adding corresponding key to MapboxClient.js `line 10` (soon to be updated).

## Structure:

Application logic is in the `app` folder structured as follows:

- components: Holds small, reusable components without any knowledge of the redux store. State is passed in through props.
- config: Global constants, API configuration, etc.
- redux: Contains reducers, actions, types & store.
- containers: Larger components that make up screens and containers. Composed of smaller components.
- assets: Image assets ( potentially Lottie / Videos).
- lib: Contains helper functions to reduce logic between files.
- navigation: Components to manage the navigation instance & other functions.
- themes: Constants for scales (sizes), fonts, colors, and images.
