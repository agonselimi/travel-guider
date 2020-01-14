import React, { useCallback, useMemo } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ReviewItem from './review-list-items';
import { db } from '../../config';

function ReviewList(props) {

const data = useMemo(() => props.reviews, [props.reviews]);




  return (
    <FlatList
      data={data}
      style={styles.flatList}
      contentContainerStyle={styles.contentContainerStyle}
      numColumns={1}
      columnWrapperStyle={styles.columnWrapperStyle}
      renderItem={useCallback(({ item }) => <ReviewItem  {...item} />, [])}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

const styles = StyleSheet.create({
  flatList: {},

});

export default ReviewList;
