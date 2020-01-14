import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  Slider,
  StyleSheet,
  Text,
  TextInput,
  Image,
} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import actions from '../../../state/actions';

function Item(props) {
  const [state, setState] = useState({inputValue: 1});

  const dispatch = useDispatch();

  const onChange = value => {
    setState({inputValue: value});
  };

  function onSliderComplete() {

    dispatch(
      actions.setUserInterest({
        categoryID: props.id,
        categoryName: props.name,
        userInterest: state.inputValue,
      }),
    );
  }


  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: props.imagepath,
        }}
        blurRadius={1}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{props.name}</Text>
      </View>
      <View style={styles.sliderContainer}>
        <Slider
          onValueChange={onChange}
          style={styles.slider}
          minimumValue={1}
          maximumValue={3}
          value={0}
          step={1}
          maximumTrackTintColor={'#fff'}
          onSlidingComplete={onSliderComplete}
        />
        <TextInput
          style={styles.textinput}
          onChange={onChange}
          value={state.inputValue.toString()}
          editable={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
    padding: 10,
  },
  textContainer: {
    width: '50%',
    alignSelf: 'center',
    padding: 10,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
  },
  text: {
    textAlign: 'center',
    color: '#fff',
  },
  slider: {
    height: 50,
    width: '90%',
  },
  sliderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    borderRadius: 8,
    bottom: 0,
    resizeMode: 'cover',
    height: undefined,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    width: undefined,
  },
  textinput: {
    height: 50,
    width: '10%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    color: '#111',
    backgroundColor: '#fff',
  },
});

function mapStateToProps(state) {
  return {userId: state.signUp.id};
}

export default connect(mapStateToProps)(Item);
