/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
 import { ThemeProvider } from './src/hooks/theme';
 import themes from './src/themes';
 import { Provider } from 'react-redux'
 import { createStore } from 'redux';
 import { composeWithDevTools } from 'redux-devtools-extension';
 import config from './src/config';
 import firebase from 'firebase';

import React from 'react';
import {ScrollView} from 'react-native';
import StartPage from './src/containers/startpage-screen/index';
import Login from './src/containers/login-screen/index';
import Signup from './src/containers/signup-screen/index';
import CategoriesScreen from './src/containers/categories-screen/index';
import Feed from './src/containers/feed-screen/index';
import Card from './src/containers/feed-screen/card';
import MoreInfoScreen from './src/containers/moreinfo-screen/index';
import RateScreen from './src/containers/rate-screen/index';
import Menu from './src/containers/feed-screen/Sidebar';
import RootIndex from './src/RootIndex';
import allReducers from './src/state/reducers';
import Item from './src/containers/user-interest-screen/slider-cards'
import Maps from './src/containers/map-view-screen/index'

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

/* eslint-disable no-underscore-dangle */
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
/* eslint-enable */


const App: () => React$Node = () => {

  return (
    <Provider store={store}>
    <ThemeProvider themes={themes}>
    <RootIndex />
    </ThemeProvider>
    </Provider>
    );
};

export default App;
