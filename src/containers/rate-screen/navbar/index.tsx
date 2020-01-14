import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import * as theme from '../../../themes/main';

function Navbars(props: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <TouchableOpacity onPress={props.onPress} style={styles.button}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>Rate your experience</Text>
      </View>
    </View>
  );
}

export default Navbars;

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
  left: {
      alignItems: 'center',
      bottom: 0,
      height: theme.navbarContainerLeftHeight,
      justifyContent: 'center',
      left: 0,
      position: 'absolute',
      top: 0,
    },
  button: {
      alignItems: 'center',
      borderColor: 'transparent',
      flexDirection: 'row',
      height: theme.navbarContainerButtonHeight,
      justifyContent: 'space-between',
      paddingRight: theme.navbarContainerButtonPaddingX,
      paddingLeft: theme.navbarContainerButtonPaddingX,
    },

    buttonText: {
      color: theme.componentPrimaryBackgroundColor,
      fontSize: theme.navbarContainerButtonFontSize,
      textAlign: 'center',
      fontWeight: theme.navbarContainerButtonFontWeight,
    },
  body: {
      alignItems: 'center',
      flexDirection: 'column',
      flexGrow: 1,
      flexShrink: 0,
      justifyContent: 'center',
    },
});
