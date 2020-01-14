import React from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Paragraph from '../../components/Paragraph';
import {useDispatch} from 'react-redux';
import actions from '../../state/actions';
import { connect } from 'react-redux';
import { getPreciseDistance } from 'geolib';

function Card(props: Props) {

  console.log('p----',props )

  const distance = getPreciseDistance(
      { latitude: props.userCoords.latitude, longitude: props.userCoords.longitude},
      { latitude: props.coords.latitude, longitude: props.coords.longitude }
    );

  const roundedDistance = Math.round( distance/1000 * 10 ) / 10;

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={stylesCard.container}>
        <View style={stylesCard.imageContainer}>
          <Image style={stylesCard.image} source={{uri: props.imagepath}} />
        </View>
        <View style={stylesCard.asideContainer}>
          <Text style={stylesCard.title}>{props.name}</Text>

          <View style={stylesCard.descriptionContainer}>
            <Paragraph numberOfLines={8} style={stylesCard.description}>
              {props.description}
            </Paragraph>
          </View>
          <View style={stylesCard.row}>
            <View style={stylesCard.iconWraper}>
              <Icon name="map-marker" style={stylesCard.icon} />
            </View>
            <Text style={stylesCard.address}>{roundedDistance} km</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const stylesCard = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    flexDirection: 'row',
  },
  imageContainer: {
    width: '40%',
  },
  cardsContainer: {
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 16,
  },
  cardsRow: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 8,
    paddingLeft: 8,
    flexDirection: 'row',
    width: '50%',
  },
  asideContainer: {
    paddingLeft: 6,
    paddingRight: 6,
    width: '60%',
  },
  image: {
    borderRadius: 10,
    height: 175,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  descriptionContainer: {
    flex: 1,
  },

  description: {
    fontSize: 12,
    fontWeight: 'normal',
  },

  row: {
    flexDirection: 'row',
  },
  address: {
    color: '#C0C2D3',
    fontSize: 12,
  },
  iconWraper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 6,
  },
  icon: {
    color: '#C0C2D3',
    fontSize: 12,
  },
});

const stylesRatting = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  iconWraper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    color: '#C0C2D3',
    fontSize: 12,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 6,
    flexDirection: 'row',
  },
  text: {
    color: '#C0C2D3',
    fontSize: 12,
    flex: 1,
  },
});

function mapStateToProps(state) {
  return {userCoords: state.userCoords};
}

export default connect(mapStateToProps)(Card);
