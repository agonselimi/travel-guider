import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import * as theme from '../../themes/main'
import Icon from 'react-native-vector-icons/FontAwesome';


function Navbar(props: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subtitle}>{props.subtitle}</Text>
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
});

export default Navbar;
