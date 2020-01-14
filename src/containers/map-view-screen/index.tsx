import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Navbar from './navbar';
import {connect} from 'react-redux';

function Maps(props) {
  return (
    <View style={styles.container}>
      <Navbar
        onPress={() => props.navigation.goBack()}
        title={props.place.name}
        subtitle={'Map View'}
      />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: props.userCoords.latitude,
          longitude: props.userCoords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{
            latitude: props.userCoords.latitude,
            longitude: props.userCoords.longitude,
          }}
          pinColor={'navy'}
          title={'Me'}
        />
        <Marker
          coordinate={{
            latitude: props.place.coords.latitude,
            longitude: props.place.coords.longitude,
          }}
          title={props.place.name}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

function mapStateToProps(state) {
  return {place: state.places, userCoords: state.userCoords};
}

export default connect(mapStateToProps)(Maps);
