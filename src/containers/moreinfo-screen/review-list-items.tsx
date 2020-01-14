import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as theme from '../../themes/main';
import { Avatar } from 'react-native-elements';



function ReviewItem(props: Props) {

  const starsArray = ["star-o","star-o","star-o","star-o","star-o"];

  switch(props.stars){
    case 1:
    starsArray[0] = "star";
    break;
    case 2:
    starsArray[0] = "star";
    starsArray[1] = "star";
    break;
    case 3:
    starsArray[0] = "star";
    starsArray[1] = "star";
    starsArray[2] = "star";
    break;
    case 4:
    starsArray[0] = "star";
    starsArray[1] = "star";
    starsArray[2] = "star";
    starsArray[3] = "star";
    break
    case 5:
    starsArray[0] = "star";
    starsArray[1] = "star";
    starsArray[2] = "star";
    starsArray[3] = "star";
    starsArray[4] = "star";
    break;
    default: [];
  }

  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.left}>
          <View style={avatarStyles.container}>
            <View >
              <Avatar rounded title={props.user.charAt(0)} />
            </View>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.row}>
            <Text style={styles.title}>{props.user}</Text>

          </View>
          <View style={styles.row}>
            <Text>{props.review}</Text>
          </View>
          <View style={styles.row}>
            <Icon name={starsArray[0]} style={styles.review} />
            <Icon name={starsArray[1]} style={styles.review} />
            <Icon name={starsArray[2]} style={styles.review} />
            <Icon name={starsArray[3]} style={styles.review} />
            <Icon name={starsArray[4]} style={styles.review} />
            <Text>{props.stars} {props.stars === '1' ? 'star' : 'stars'} </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomColor: '#F5F5F8',
    borderBottomWidth: theme.listItemContainerBorderBottomWidth,
    flexDirection: 'row',
    flexGrow: 1,
    marginLeft: theme.listItemContainerMarginLeft,
    marginRight:16,
    flexShrink: 0,
    justifyContent: 'flex-start',
    paddingTop: theme.listItemContainerPaddingTop,
    paddingBottom: theme.listItemContainerPaddingBottom,
    backgroundColor: theme.listItemContainerBackgroundColor,

  },
  left: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    paddingLeft: theme.listItemLeftPaddingLeft,
    paddingRight: theme.listItemLeftPaddingLeft,
  },
  body: {
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: theme.listItemBodyPaddingLeft,
    paddingRight: theme.listItemBodyPaddingLeft,
  },
  row: {
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    marginRight: theme.listItemTitleMarginRight,
    color: 'black',
    fontSize: theme.listItemTitleFontSieze,
  },
  review: {
    fontSize: theme.listItemReviewFontSize,
    color: 'gray',
    padding: theme.listItemReviewPadding,
  },
});

const avatarStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#999',
    justifyContent: 'center',
    height: theme.avatarBodySmSize,
    width: theme.avatarBodySmSize,
    borderRadius: theme.avatarBodyCircleBorderRadius,
  },
  image: {
    height: theme.avatarBodySmSize,
    width: theme.avatarBodySmSize,
    borderRadius: theme.avatarBodyCircleBorderRadius,
  },
});

export default ReviewItem;
