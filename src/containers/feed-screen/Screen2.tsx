import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text } from 'react-native';
// import all basic components

export default function Screen2 (props) {
  //Screen2 Component
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 23 }}> Screen {global.currentScreenIndex + 1} </Text>
      </View>
    );
  }

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});
