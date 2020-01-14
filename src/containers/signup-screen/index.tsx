import React, {useState} from 'react';
import {
  TextInput,
  View,
  Dimensions,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native';
import actions from '../../state/actions';
import {useDispatch} from 'react-redux';
import Button from './Button';
import firebase from 'firebase';
import 'firebase/firestore';
const {width, height} = Dimensions.get('screen');

import { Base64 } from 'js-base64';

function Signup(props: Props) {
  const dispatch = useDispatch();

  const [value, setValue] = useState({
    fullname: '',
    email: '',
    password: '',
    repassword: '',
  });

  function handleFullnameText(text) {
    setValue({...value, fullname: text});
  }

  function handleEmailText(text) {
    setValue({...value, email: text});
  }

  function handlePasswordText(text) {
    setValue({...value, password: text});
  }

  function handleRepasswordText(text) {
    setValue({...value, repassword: text});
  }

  const ref = firebase.firestore().collection('users');
  const query = firebase.firestore().collection("users").where("email", "==", value.email);

  function handleOnPress() {
    if (
      value.fullname === '' ||
      value.email === '' ||
      value.password === '' ||
      value.repassword === ''
    ) {
      alert('Please fill the fields!');
    } else if (value.password.length < 6) {
      alert("Password must be at least 6 characters long!")
    }
     else if (value.password !== value.repassword) {
      alert("Password and repassword doesn't match!");
    } else {
      const encodedPassword = Base64.atob(value.password);
      query.get().then(docSnapshot => {
        if (!docSnapshot.empty) {
          alert('Email already used!');
          throw 'ERROR!';
        } else {
          ref
            .add({
              fullname: value.fullname,
              email: value.email,
              password: encodedPassword,
            })
            .then(function(docRef) {
              const userID = docRef.id;

              dispatch(
                actions.addUser(
                  userID,
                  value.fullname,
                  value.email,
                  value.password,
                ),
              );
              dispatch(actions.getFullname(value.fullname, userID, value.password));
              props.navigation.navigate('Categories');
            })
            .catch(function(error) {
              console.error('Error adding document: ', error);
            });
        }
      });
    }
  }
  return (
    <View style={styles.signupContainer}>
    <View style={styles.logoContainer}>
    <Image
        style={styles.logoImage}
        source={require('../../images/travelguider.png')}
      />
    </View>
      <View style={styles.fullnameInput}>
        <TextInput
          style={styles.textInput}
          onChangeText={text => handleFullnameText(text)}
          value={value.fullname}
          placeholder="Fullname"
        />
      </View>
      <View style={styles.emailInput}>
        <TextInput
          style={styles.textInput}
          onChangeText={text => handleEmailText(text)}
          value={value.email}
          placeholder="Email"
          keyboardType="email-address"
        />
      </View>
      <View style={styles.passwordInput}>
        <TextInput
          style={styles.textInput}
          onChangeText={text => handlePasswordText(text)}
          value={value.password}
          placeholder="Password"
          secureTextEntry
        />
      </View>
      <View style={styles.repasswordInput}>
        <TextInput
          style={styles.textInput}
          onChangeText={text => handleRepasswordText(text)}
          value={value.repassword}
          placeholder="Retype Password"
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={handleOnPress}
          title="SIGN UP"
          style={styles.buttonStyle}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  signupContainer: {
    width,
    height,
    backgroundColor: '#e6f9ff',
  },
  textInput: {
    height: 50,
    width: '90%',
    borderColor: 'gray',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderRadius: 25,
  },
  fullnameInput: {
    marginTop: '0%',
    alignItems: 'center',
  },
  emailInput: {
    marginTop: '5%',
    alignItems: 'center',
  },
  passwordInput: {
    marginTop: '5%',
    alignItems: 'center',
  },
  repasswordInput: {
    marginTop: '5%',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: '60%',
    alignItems: 'center',
  },
  logoContainer: {
    marginTop: '5%',
    alignItems: 'center',
  },
  logoImage: {
    width: '60%',
  },
});

export default Signup;
