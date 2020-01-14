import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Paragraph from '../../components/Paragraph';

function Description(props) {
  let sum = 0;
  props.reviews.forEach(item => {
    sum = sum + parseInt(item.stars);
  });

  const allReviewsStars = sum / props.reviews.length;

  let starsArray = ["star-o","star-o","star-o","star-o","star-o"];

  if(allReviewsStars < 1.5) {
    starsArray[0] = "star";
  } else
  if(allReviewsStars >=1.5 && allReviewsStars < 2.5) {
    starsArray[0] = "star";
    starsArray[1] = "star";
  } else
  if(allReviewsStars >=2.5 && allReviewsStars < 3.5) {
    starsArray[0] = "star";
    starsArray[1] = "star";
    starsArray[2] = "star";
  } else
  if(allReviewsStars >=3.5 && allReviewsStars < 4.5) {
    starsArray[0] = "star";
    starsArray[1] = "star";
    starsArray[2] = "star";
    starsArray[3] = "star";
  } else
  if(allReviewsStars >= 4.5) {
    starsArray[0] = "star";
    starsArray[1] = "star";
    starsArray[2] = "star";
    starsArray[3] = "star";
    starsArray[4] = "star";
  }

  const distance = Math.round( props.distance/1000 * 10 ) / 10;

  return (
    <View style={styles.container}>
      <View style={styles.header} />

      <View style={styles.body}>
        <View style={styles.tmp}>
          <Icon name="map-marker" style={styles.icon} />
          <Text style={styles.review}> {distance} km</Text>
        </View>
        <View style={styles.tmp}>
          <Icon name={starsArray[0]} style={styles.icon} />
          <Icon name={starsArray[1]} style={styles.icon} />
          <Icon name={starsArray[2]} style={styles.icon} />
          <Icon name={starsArray[3]} style={styles.icon} />
          <Icon name={starsArray[4]} style={styles.icon} />
          <Text style={styles.review}>
            {' '}
            {props.reviews.length}{' '}
            {props.reviews.length == '1' ? 'review' : 'reviews'}
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Paragraph style={styles.description}>{props.description}</Paragraph>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,
  },
  header: {
    paddingTop: 8,
  },
  title: {
    fontSize: 20,
    color: 'black',
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 0,
  },
  review: {
    fontSize: 12,
    color: 'gray',
  },
  icon: {
    fontSize: 12,
    color: 'gray',
    padding: 2,
  },

  tmp: {flexDirection: 'row'},
  footer: {paddingTop: 8},
  description: {},
});

export default Description;
