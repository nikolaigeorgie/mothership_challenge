# Mothership Challenge.

React Native mobile application using mapbox for Mothership.

## Setup

Clone the repo, run `yarn install` or `npm i` and then run `react-native run-ios`.

This project is currently not compatiable with android.

Mapbox will not work without adding corresponding key to app/config/keys.js `line 3`

## Testing

Run `detox build --configuration ios.sim.debug` to generate a build.
Run `detox test --configuration ios.sim.debug` to start the test.
Tests are located in `e2e/` folder
Make sure to disable Hardware Keyboard (Hardware -> Keyboard -> (uncheck) Connect Hardware Keyboard

## Structure:

Application logic is in the `app` folder structured as follows:

- components: Holds small, reusable components without any knowledge of the redux store. State is passed in through props.
- config: Global constants, API configuration, etc.
- redux: Contains reducers, actions, types & store.
- scenes: Larger components that make up screens and containers. Composed of smaller components.
- assets: Image assets ( potentially Lottie / Videos).
- utils: Contains helper functions to reduce logic between files.
- navigation: Components to manage the navigation instance & other functions.
- themes: Constants for scales (sizes), fonts, colors, and images.
- e2e: Detox testing
