import React, {useState} from 'react';
//import react in our code.
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
// import all basic components
import {connect} from 'react-redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { Base64 } from 'js-base64';

function ChangePasswordScreen(props) {
  const [value, setValue] = useState(() => ({
    password: '',
    repassword: '',
  }));

  function handlePasswordText(text) {
    setValue({...value, password: text});
  }

  function handleRepasswordText(text) {
    setValue({...value, repassword: text});
  }

  const query = firebase.firestore().collection("users").doc(props.userId);

  function handlePress() {
    if (value.password === '' || value.repassword === '') {
      alert('Please fill the fields!');
    } else if (value.password.length < 6) {
      alert('Password must be at least 6 characters long!');
    } else if (value.password !== value.repassword) {
      alert("Password and repassword doesn't match!");
    } else {
      query.get().then(doc => {
        if (doc.exists) {
          const encodedPassword = Base64.atob(value.password);
          query
            .update({password: encodedPassword})
            .then(() => {
              setValue({password:"", repassword:""});
              alert("Password changed succesfully!")
            })
            .catch(function(error) {
              console.error('Error adding document: ', error);
            });
        }
        else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
  }).catch(function(error) {
    console.log("Error getting document:", error);
});
  }
}

  return (
    <View style={styles.MainContainer}>
      <View style={styles.passwordInput}>
        <TextInput
          style={styles.textInput}
          onChangeText={text => handlePasswordText(text)}
          value={value.password}
          placeholder="New Password"
          secureTextEntry
          required={true}
        />
      </View>
      <View style={styles.repasswordInput}>
        <TextInput
          style={styles.textInput}
          onChangeText={text => handleRepasswordText(text)}
          value={value.repassword}
          placeholder="Retype New Password"
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handlePress} style={styles.buttonsContainer}>
          <Text style={styles.buttonText}>Save changes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  textInput: {
    height: 50,
    width: '90%',
    borderColor: 'gray',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderRadius: 25,
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
    marginTop: '130%',
    alignItems: 'center',
  },
  buttonsContainer: {
    backgroundColor: '#498af2',
    alignItems: 'center',
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    position: 'relative',
    width: '90%',
  },
  buttonText: {
    color: '#fff',
  },
});

function mapStateToProps(state) {
  return {
    userFullname: state.login.fullname,
    userPassword: state.login.password,
    userId: state.login.id
  };
}

export default connect(mapStateToProps)(ChangePasswordScreen);
