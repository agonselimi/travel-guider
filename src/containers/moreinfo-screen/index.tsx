import React from 'react';
import {ScrollView, View, Image, Text, StyleSheet} from 'react-native';

// import BookATableButton from './book-a-table-button';
import Navbar from './navbar/index';
import Descriptions from './description';
import ReviewItem from './review-list-items';
import LeaveReviewButton from './leave-review-button';
import ReviewList from './review-list';
import {connect} from 'react-redux';
import { getPreciseDistance } from 'geolib';

function MoreInfoScreen(props: Props) {
  const placeCategories = props.place.category.map(
    item => ' ' + Object.getOwnPropertyNames(item),
  );

  const distance = getPreciseDistance(
      { latitude: props.userCoords.latitude, longitude: props.userCoords.longitude},
      { latitude: props.place.coords.latitude, longitude: props.place.coords.longitude }
    );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <View style={styles.navBar}>
        <Navbar
          onPress={[
            () => props.navigation.goBack(),
            () => props.navigation.navigate('Maps'),
          ]}
          title={props.place.name}
          subtitle={placeCategories.toString()}
        />
      </View>
      <View>
        <Image
          style={styles.backgroundImage}
          source={{uri: props.place.imagepath}}
        />
      </View>
      <Descriptions
        description={props.place.description}
        reviews={props.place.reviews}
        distance={distance}
      />
      <ReviewList reviews={props.place.reviews} />
      <LeaveReviewButton onPress={() => props.navigation.navigate('Rate')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'white',
  },
  contentContainer: {
    flexGrow: 1,
  },

  backgroundImage: {
    position: 'relative',
    height: 400,
    width: null,
  },
  navBar: {
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
  },
  price: {
    position: 'absolute',
    bottom: 25,
    right: 0,
    backgroundColor: 'white',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
  button: {
    padding: 30,
  },
});

function mapStateToProps(state) {
  return {place: state.places, userCoords: state.userCoords};
}

export default connect(mapStateToProps)(MoreInfoScreen);
