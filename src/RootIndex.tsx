import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from './containers/login-screen/index';
import FeedScreen from './containers/feed-screen/Sidebar';
import SignUpScreen from './containers/signup-screen/index';
import CategoriesScreen from './containers/categories-screen/index';
import MoreInfoScreen from './containers/moreinfo-screen/index';
import RateScreen from './containers/rate-screen/index';
import CategoriesInterestScreen from './containers/user-interest-screen/index';
import MapsScreen from './containers/map-view-screen/index';
import AllMapsScreen from './containers/feed-screen/MapView';


const RootStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null,
      },
    },
    Feed: {
      screen: FeedScreen,
      navigationOptions: {
        header: null,
      },
    },
    SignUp: {
      screen: SignUpScreen,
      navigationOptions: {
        header: null,
      },
    },
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        header: null,
      },
    },
    MoreInfo: {
      screen: MoreInfoScreen,
      navigationOptions: {
        header: null,
      },
    },
    Rate: {
      screen: RateScreen,
      navigationOptions: {
        header: null,
      },
    },
    CategoriesInterest: {
      screen: CategoriesInterestScreen,
      navigationOptions: {
        header: null,
      },
    },
    Maps: {
      screen: MapsScreen,
      navigationOptions: {
        header: null,
      },
    },
    AllMaps: {
      screen: AllMapsScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Login',
  },
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
