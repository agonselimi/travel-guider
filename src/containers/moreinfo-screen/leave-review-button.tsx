import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as theme from '../../themes/main';


function LeaveReviewButton(props: Props) {
  

  return (
    <TouchableOpacity onPress={props.onPress}>
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.text}>Leave a review</Text>
      </View>
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: theme.btnContainerBorderRadius,
    borderWidth: theme.btnContainerBorderWidth,
    height: theme.btnContainerHeight,
    justifyContent: 'center',
    position: 'relative',
    backgroundColor:"#0f73ee",
    width: "50%",
    alignSelf:"center",
    marginTop:15,
    marginBottom:15,
  },
  body: {
    alignItems: 'center',
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 0,
    justifyContent: 'center',
  },
  text: {
    fontSize: theme.btnTextFontSize,
    lineHeight: theme.btnTextLineHeight,
    color:"#fff"
  },
  right: {
    alignItems: 'center',
    bottom: 1,
    height: theme.btnContainerHeight,
    justifyContent: 'center',
    right: 0,
    position: 'absolute',
    top: 0,
    width: theme.btnContainerHeight,
  },
  icon: {
    fontSize: theme.btnIconFontSize,
    lineHeight: theme.btnIconLineHeight,
    color:"#fff"
  },
});

export default LeaveReviewButton;
