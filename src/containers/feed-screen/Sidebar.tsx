import React, {Component} from 'react';
//import react in our code.
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Platform,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as theme from '../../themes/main';

import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

//Import all the screens
import ChangePasswordScreen from './ChangePasswordScreen';
import Feed from './index';
import LoginScreen from '../login-screen/index';

//Import Custom Sidebar
import SidebarMenu from './SidebarMenu';

global.currentScreenIndex = 0;
//Navigation Drawer Structure for all screen
export function NavigationDrawerStructure(props) {
  //Top Navigation Header with Donute Button
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };
  return (
  <TouchableOpacity onPress={toggleDrawer.bind(this)}>
    <View style={styles.container}>
          <Icon name="navicon" style={styles.icon} />
      <View style={styles.body} />
    </View>
  </TouchableOpacity>
  );
}

export function NavigationDrawerStructure2(props) {
  //Top Navigation Header with Donute Button
  const mapview = () => {
    //Props to open/close the drawer
    props.navigationProps.navigate('AllMaps');
  };
  return (
  <TouchableOpacity onPress={mapview}>
    <View style={styles.container}>
          <Icon name="map-o" style={styles.icon} />
      <View style={styles.body} />
    </View>
  </TouchableOpacity>
  );
}

const Feed_StackNavigator = createStackNavigator({
  //All the screen from the First Option will be indexed here
  Third: {
    screen: Feed,
    navigationOptions: ({navigation}) => ({
      title: 'Feed Screen',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerTintColor: '#000',
      headerRight: <NavigationDrawerStructure2 navigationProps={navigation} />,
  }),
},
});

//Stack Navigator for the First Option of Navigation Drawer
const ChangePassword_StackNavigator = createStackNavigator({
  //All the screen from the First Option will be indexed here
  First: {
    screen: ChangePasswordScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Change password',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerTintColor: '#000',
    }),
  },
});

//Stack Navigator for the Second Option of Navigation Drawer
// const Logout_StackNavigator = createStackNavigator({
//   //All the screen from the Second Option will be indexed here
//   Second: {
//     screen: LoginScreen,
//     navigationOptions: ({navigation}) => ({
//       title: 'Logout',
//       headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
//       headerTintColor: '#000',
//     }),
//   },
// });

//Drawer Navigator Which will provide the structure of our App
const DrawerNavigator = createDrawerNavigator(
  {
    NavScreen3: {
      screen: Feed_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Feed Screen',
      },
    },
    //Drawer Optons and indexing
    NavScreen1: {
      screen: ChangePassword_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Change password',
      },
    },
    NavScreen2: {
      screen: LoginScreen,
      navigationOptions: {
        drawerLabel: 'Logout',
      },
    },
    NavScreen4: {
      screen: Feed_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Feed Screen',
      },
    },
  },
  {
    //For the Custom sidebar menu we have to provide our CustomSidebarMenu
    contentComponent: SidebarMenu,
    //Sidebar width
    drawerWidth: Dimensions.get('window').width - 130,

    drawerLockMode: 'unlocked',
  },
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: theme.navbarContainerHeight,
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: theme.navbarContainerBackgroundColor,
    borderColor: '#F2F2F6',
    borderBottomWidth: 2,
    flexDirection: 'row'
  },
  body: {
    alignItems: 'center',
    flexGrow: 1,
    flexShrink: 0,
    justifyContent: 'center',
  },
  left: {
    alignItems: 'center',
    bottom: 0,
    height: theme.navbarContainerRightHeight,
    justifyContent: 'center',
    position: 'absolute',
    left: 6,
    top: 0,
    width: '10%',
  },
  icon: {
    fontSize: 22,
    color: 'gray',
    padding: 5,
    marginLeft:10
  },
});

export default createAppContainer(DrawerNavigator);
