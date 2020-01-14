import React, { useState } from 'react';
import { Image, TouchableOpacity, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as theme from '../../../themes/main'
import Paragraph from '../../../components/Paragraph';
import useCheckbox from './../../../components/checkbox';
import { useDispatch } from 'react-redux';
import actions from '../../../state/actions';



function Item({ imagepath, name, ...rest }: ItemProps) {
  const [toggleActive, setToggleActive] = useState({ checkActive: false});

  const [stylesCheckbox] = useCheckbox({ primary: true, active: toggleActive.checkActive });

  const dispatch = useDispatch();


  function toggleCheck() {
    setToggleActive({
      checkActive: !toggleActive.checkActive,
    });
    dispatch(actions.categoryData(!toggleActive.checkActive, {id: rest.id, name, imagepath}));
  }

  return (
    <TouchableOpacity onPress={toggleCheck} style={styles.container}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: imagepath
          }}
        />
        <View style={styles.overlay}>
          <View style={styles.checkbox}>
            <View style={stylesCheckbox.container}>
              <Icon style={stylesCheckbox.icon} name="check" />
            </View>
          </View>
          <View style={styles.textContainer}>
          <Paragraph style={styles.text}>{name}</Paragraph>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
  },
image: {
    borderRadius: theme.cardImageBorderRadius,
    bottom: 0,
    resizeMode: 'cover',
    height: undefined,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    width: undefined,
  },
overlay: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    bottom: 0,
    flex: 1,
    justifyContent: 'center',
    left: 0,
    opacity: 1,
    paddingLeft: theme.cardOverlayPaddingLeft,
    paddingRight: theme.cardOverlayPaddingRight,
    position: 'absolute',
    right: 0,
    top: 0,
  },
textContainer: {
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    borderColor: theme.cardBorderColor,
    borderWidth: 1,
    borderRadius:5,
    padding: theme.cardTextPadding,
    paddingLeft: theme.cardTextPaddingLeft,
    paddingRight: theme.cardTextPaddingRight,
  },
text: {
    color: theme.cardTextColor,
    fontSize: 12,
    textAlign: 'center',
  },
checkbox: {
    position: 'absolute',
    right: 5,
    top: 5,
  },
  checkboxContainer: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderRadius: theme.checkboxContainerBorderRadius,
    borderWidth: theme.checkboxBorderWidth,
    justifyContent: 'center',
    height: theme.chechboxContainerHeight,
    width: theme.checkboxContainerWidth,
  },
  checkboxIcon: {
    textAlign: 'center',
  },
});

export default Item;
