import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import * as theme from '../../../themes/main';
import Icon from 'react-native-vector-icons/FontAwesome';

function Navbar(props: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <TouchableOpacity onPress={props.onPress[0]} style={styles.iconContainer}>
          <Icon name="arrow-left" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subtitle}>{props.subtitle}</Text>
      </View>
      <View style={styles.right}>
        <TouchableOpacity onPress={props.onPress[1]} style={styles.iconContainer}>
          <Icon name="map-o" style={styles.icon} />
        </TouchableOpacity>
      </View>
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
  title: {
    color: theme.navbarContainerTitleColor,
    fontSize: theme.navbarContainerTitleFontSize,
    fontWeight: theme.navbarContainerTitleFontWeight,
    paddingTop: theme.navbarContainerTitlePaddingY,
    textAlign: 'center',
  },
  subtitle: {
    color: theme.navbarContainerSubtitleColor,
    fontSize: theme.navbarContainerSubtitleFontSize,
    paddingBottom: 10,
    textAlign: 'center',
  },
  body: {
    alignItems: 'center',
    flexDirection: 'column',
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
  },
  iconContainer: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    height: theme.badgeContainerHeight,
    minWidth: 40,
    paddingBottom: theme.badgeContainerPaddingY,
    paddingLeft: theme.badgeContainerPaddingX,
    paddingRight: theme.badgeContainerPaddingX,
    paddingTop: theme.badgeContainerPaddingY,
  },
  icon: {
    fontSize: 20,
    color: 'gray',
    padding: 2,
  },
  backIcon: {
    fontSize: theme.checkboxIconFontSize,
    fontWeight: theme.checkboxIconFontWeight,
    lineHeight: theme.checkboxIconLineHeight,
    textAlign: 'center',
  },
  badgeText: {
    fontSize: theme.badgeTextFontSize,
    fontWeight: theme.badgeTextFontWeight,
    lineHeight: theme.badgeTextLineHeight,
    textAlign: 'center',
  },
});

export default Navbar;
