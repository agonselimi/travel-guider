import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import * as theme from '../../themes/main';
import Icon from 'react-native-vector-icons/FontAwesome';

function Navbar(props: Props) {
  return (
    <View style={styles.container}>
    <View style={styles.left}>
      <View style={styles.body}>
        </View>
      </View>
      <View style={styles.right} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: theme.navbarContainerHeight,
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: theme.navbarContainerBackgroundColor,
    borderColor: '#F2F2F6',
    borderBottomWidth: 2,
  },
  feedText: {
    color: theme.navbarContainerTitleColor,
    fontSize: 16,
    fontWeight: "700",
    textAlign: 'center',
  },
  mapsText: {
    color: theme.navbarContainerTitleColor,
    fontSize: 16,
    fontWeight: "700",
    textAlign: 'center',
  },
  body: {
    alignItems: 'center',
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 0,
    justifyContent: 'center',
  },
  right: {
    alignItems: 'center',
    bottom: 0,
    height: theme.navbarContainerRightHeight,
    justifyContent: 'center',
    position: 'absolute',
    right: 6,
    top: 0,
  },
  left: {
    alignItems: 'center',
    bottom: 0,
    height: theme.navbarContainerRightHeight,
    justifyContent: 'center',
    position: 'absolute',
    left: 6,
    top: 0,
    width:"10%"
  },
  icon: {
    fontSize: 22,
    color: 'gray',
    padding: 2,
  },
  badgeText: {
    fontSize: theme.badgeTextFontSize,
    fontWeight: theme.badgeTextFontWeight,
    lineHeight: theme.badgeTextLineHeight,
    textAlign: 'center',
  },
  feed: {
    padding:10,
    borderBottomWidth: 2,
  },
  maps: {
    padding:10
  }
});

export default Navbar;
