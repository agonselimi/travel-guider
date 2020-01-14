  import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import actions from '../../state/actions';
import Geolocation from 'react-native-geolocation-service';

import {TextInput, View, Dimensions, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

import Button from './Button';

const {width, height} = Dimensions.get('screen');

import firebase from 'firebase';
import "firebase/firestore";

function Login(props: Props) {
  const dispatch = useDispatch();

  const [value, setValue] = useState(() => ({
    email: "",
    password: ""
  }));



function handleEmailText(text) {
  setValue({...value, email: text});
}

function handlePasswordText(text) {
  setValue({...value, password: text});
}

const userCredentials = [];
const db = firebase.firestore();

function handlePress(){

// firebase.database().ref(`users`).orderByChild("email").equalTo(value.email).once("value",snapshot => {
//     if (snapshot.exists()){
//       var key = null;
//       const userData = snapshot.forEach(childSnapshot => {
//         key = childSnapshot.key;
//       })
//        console.log("exists!", key);
//        const fullname = snapshot.child(key + "/fullname").val();
//         props.navigation.navigate('Feed');
//         dispatch(actions.getFullname(fullname, key));
//     }
//     else {
//       alert('User does not exist!');
//     }
// });

let coordinates = {};

Geolocation.getCurrentPosition( (position) => dispatch(actions.getUserCoords(position.coords)),
(error) => console.log(new Date(), error),
{enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 })


if(value.email !== "" && value.password !== ""){
db.collection("users").where("email", "==", value.email)
    .get()
    .then(doc => {
      if(!doc.empty) {
        doc.forEach(docSnapshot => {

          dispatch(actions.getFullname(docSnapshot.data().fullname, docSnapshot.id, docSnapshot.data().password));
          props.navigation.navigate('Feed');

        })
      } else {
        alert("User doesn't exist!")
      }
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

} else {
    alert('Please fill all the fields!');
  }
}


  return (
    <View style={styles.loginContainer}>
    <View style={styles.logoContainer}>
    <Image
        style={styles.logoImage}
        source={require('../../images/travelguider.png')}
      />
    </View>
      <View style={styles.emailInput}>
        <TextInput
          style={styles.textInput}
          onChangeText={text => handleEmailText(text)}
          value={value.email}
          placeholder="Email"
          keyboardType="email-address"
          required={true}
        />
      </View>
      <View style={styles.passwordInput}>
        <TextInput
          style={styles.textInput}
          onChangeText={text => handlePasswordText(text)}
          value={value.password}
          placeholder="Password"
          secureTextEntry
          required={true}
        />
      </View>
      <View style={styles.buttonContainer}>
      <Button onPress={handlePress} title="LOG IN" style={styles.buttonStyle}/>
      </View>
      <TouchableOpacity activeOpacity={0.6} onPress={() => props.navigation.navigate('SignUp')}>
      <View style={styles.signupLabelContainer}>
        <Text style={styles.signupLabel}>Don't have an account? Sign up for free</Text>
      </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
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
  logoContainer: {
    marginTop: '5%',
    alignItems: 'center',
  },
  logoImage: {
    width: '60%',
  },
  emailInput: {
    marginTop: '0%',
    alignItems: 'center',
  },
  passwordInput: {
    marginTop: '5%',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: '90%',
    alignItems: 'center'
  },
  button2Container: {
    marginTop: '10%',
    alignItems: 'center'
  },
  labelContainer: {
    width: "100%",
    marginTop: "10%",
    alignItems:"center"
  },
  label:{
    textAlign: 'center',
    color: "#fff",
    fontSize: 20,
  },
  signupLabelContainer: {
    width: "100%",
    marginTop: "3%",
    alignItems:"center"
  },
  signupLabel:{
    color: "#000",
    fontSize: 14,
    textDecorationLine: 'underline',
    textShadowColor: '#fff'
  },

});

export default Login;
