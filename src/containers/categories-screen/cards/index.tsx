import React, {useState, useMemo, useCallback, useEffect } from 'react';
import { FlatList } from 'react-native';
import Item from './item';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { db } from '../../../config';
// Internal dependencies
import styles from '../use-styles';
import {useDispatch} from 'react-redux';
import actions from '../../../state/actions';

const list = [];
const ref = db.collection('categories');
ref.onSnapshot(querySnapshot => {
  querySnapshot.forEach(doc => {
    const { name, imagepath } = doc.data();
    list.push({
      id: doc.id,
      name,
      imagepath,
    });
  });
});

function Cards(props) {

const data = useMemo(() => list, [list]);


  return (
    <FlatList
      data={data}
      style={styles.flatList}
      contentContainerStyle={styles.contentContainerStyle}
      numColumns={2}
      columnWrapperStyle={styles.columnWrapperStyle}
      renderItem={useCallback(({ item }) => <Item {...item} />, [])}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}



export default Cards;
