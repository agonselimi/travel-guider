/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  Dimensions,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Button from "../../components/Button";

const { width, height } = Dimensions.get('screen');

function StartPage(props: Props){
  return (
    <View>
    <ImageBackground
   style={styles.backgroundImage}
    source={{
        uri: 'https://fsb.zobj.net/crop.php?r=eQWN0tuF9jn2MD0QXidc5d5gDLTWKchVU6uRlr3tIJRioPbo6YSYkzELDxgLM1WDy2vbR9YpAYZ8F9rIVEuXZX0FdfnH0MHzleQB5RU_U_grh_FpxuJbGjkasu2LGQciOuY5hdPExSHRB8REgrJAIM04-s-hz5_OYBKDoPB8mY0ne_E202dvKVEK_5M'
    }}>
    <View style={styles.buttonsContainer}>
    <View style={styles.button1}>
    <Button title="Log in"/>
    </View>
    <View style={styles.button2}>
    <Button title="Sign up"/>
    </View>
    </View>
    </ImageBackground>
    </View>

  );
};

const styles = StyleSheet.create({
  backgroundImage: {
      width,
      height,
  },
  button1: {

  },
  button2: {
    marginTop: 30,

  },
  buttonsContainer: {
    marginTop:600,
  }
});

export default StartPage;
