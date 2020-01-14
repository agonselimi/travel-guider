import React, {useState} from 'react';
import {
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Paragraph from '../../components/Paragraph';
import Navbar from './navbar';
import LeaveReviewButton from './leave-review-button';
import useStyles from './use-styles';
import {connect} from 'react-redux';
import * as firebase from 'firebase';
import 'firebase/firestore';

function RateScreen(props: Props) {
  const [styles] = useStyles();

  const [state, setState] = useState({
    Default_Rating: 3,
    Max_Rating: 5,
    textInputValue: '',
  });

  function UpdateRating(key) {
    setState({Default_Rating: key, Max_Rating: 5, textInputValue: state.textInputValue});
  }

  let Rating_Bar = [];
  for (var i = 1; i <= state.Max_Rating; i++) {
    Rating_Bar.push(
      <TouchableOpacity
        activeOpacity={0.7}
        key={i}
        onPress={UpdateRating.bind(this, i)}>
        <Icon
          style={[styles.icon, {paddingRight: 10}, {color: '#209FFF'}]}
          name={i <= state.Default_Rating ? 'star' : 'star-o'}
        />
      </TouchableOpacity>,
    );
  }

  function handleReviewInput(text) {
    setState({...state, textInputValue: text});
  }

  const ref = firebase
    .firestore()
    .collection('places')
    .doc(props.place.id);

  function handlePress() {
    ref
      .update({
        reviews: firebase.firestore.FieldValue.arrayUnion({
          review: state.textInputValue,
          stars: state.Default_Rating,
          user: props.userFullname,
        })
      })
      .then(function() {
        console.log("PLACE", props.place)
        setState({ Default_Rating: 3, Max_Rating: 5, textInputValue: ''});
        props.navigation.navigate('MoreInfo');
      }
      )
      .catch(function(error) {
        console.error('Error adding document: ', error);
      });
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.offSet}>
          <Navbar onPress={() => props.navigation.goBack()} />
        </View>
        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={{uri: props.place.imagepath}} />
        </View>

        <View style={styles.body}>
          <View style={styles.content}>
            <Paragraph style={styles.text}>{props.place.name}</Paragraph>
          </View>
          <View style={styles.iconWrapper}>{Rating_Bar}</View>
          <View style={styles.textInput}>
            <TextInput
              multiline
              numberOfLines={4}
              placeholder="Write a review"
              maxLength={120}
              onChangeText={text => handleReviewInput(text)}
              value={state.textInputValue}
            />
          </View>
        </View>
        <View style={styles.container}>
          <LeaveReviewButton onPress={handlePress}/>
        </View>
      </ScrollView>
    </View>
  );
}

function mapStateToProps(state) {
  return {place: state.places, userFullname: state.login.fullname};
}

export default connect(mapStateToProps)(RateScreen);
