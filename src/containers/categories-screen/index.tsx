/**
 * Copyright (c) 2017-present, Elephant, Inc.
 *
 */

// External dependencies
import React from 'react';
import {View} from 'react-native';

// Internal dependencies
import Navbar from './navbar/index';
import Cards from './cards/index';
import Button from './button/index';
import styles from './use-styles';
import { connect } from 'react-redux';

function CategoriesScreen(props) {

  return (
    <View style={styles.container}>
      <Navbar count={props.count} title="Categories" subtitle="8 Categories Available" />
      <Cards />
      <View style={styles.button}>
        <Button title="Next" onPress={() => props.navigation.navigate('CategoriesInterest')}/>
      </View>
    </View>
  );
}

function mapStateToProps(state) {
  return { count: state.categories.count }
}

export default connect(mapStateToProps)(CategoriesScreen);
