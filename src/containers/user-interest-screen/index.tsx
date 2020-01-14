import React from 'react';
import {View, StyleSheet} from 'react-native';
import Navbar from './Navbar';
import {connect} from 'react-redux';
import SliderCards from './slider-cards';
import Button from './Button';
import * as firebase from 'firebase';
import 'firebase/firestore';
import Geolocation from 'react-native-geolocation-service';
import {useDispatch} from 'react-redux';
import actions from '../../state/actions';

function CategoriesInterestScreen(props) {

  const dispatch = useDispatch();

  const ref = firebase.firestore().collection('users').doc(props.userID);

  function handlePress(){
    Geolocation.getCurrentPosition( (position) => dispatch(actions.getUserCoords(position.coords)),
    (error) => console.log(new Date(), error),
    {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 })

  ref
    .update({userInterestList: props.userInterestList})
    .then(() => props.navigation.navigate('Feed'))
    .catch(function(error) {
      console.error('Error adding document: ', error);
    });

}

  return (
    <View style={styles.container}>
      <Navbar
        title="Categories"
        subtitle={props.count + ' categories chosen'}
      />
      <SliderCards list={props.list} />
      <View style={styles.button}>
        <Button
          title="Continue"
          onPress={handlePress}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  button: {
    bottom: 0,
    left: 0,
    marginBottom: 20,
    marginLeft: 30,
    marginRight: 30,
    position: 'absolute',
    right: 0,
  },
});

function mapStateToProps(state) {
  console.log("STATEeeeee", state);
  return {
    list: state.categories.list,
    count: state.categories.count,
    userInterestList: state.categories.userInterestList,
    userID: state.signUp.id,
  };
}

export default connect(mapStateToProps)(CategoriesInterestScreen);
