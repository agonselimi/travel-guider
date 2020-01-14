import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Navbar from './navbar';
import {connect} from 'react-redux';

function AllMapsScreen(props) {

  const places = Object.values(props.allPlaces);

  const array = [];

  places.forEach(item => {
    array.push(item);
  });

  console.log('ajajaj', array);



  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 42.6026,
          longitude: 20.9030,
          latitudeDelta: 1.2,
          longitudeDelta: 1.2,
        }}>
        <Marker
          coordinate={{
            latitude: props.userCoords.latitude,
            longitude: props.userCoords.longitude,
          }}
          pinColor={'navy'}
          title={'Me'}
        />
        {
          array.map(item => (
            <Marker
              coordinate={{
                latitude: item.coords.latitude,
                longitude: item.coords.longitude,
              }}
              title={item.name}
            />
          ))
        }
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
  return {allPlaces: state.allPlaces, userCoords: state.userCoords};
}

export default connect(mapStateToProps)(AllMapsScreen);
