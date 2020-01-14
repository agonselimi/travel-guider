import React, {useCallback, useMemo} from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Item from './item';


function SliderCards(props) {

const data = useMemo(() => props.list, [props.list]);


  return (
    <FlatList
      data={data}
      style={styles.flatList}
      contentContainerStyle={styles.contentContainerStyle}
      numColumns={1}
      renderItem={useCallback(({ item }) => <Item {...item} />, [])}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
  },
  contentContainerStyle: {
    backgroundColor: 'white',
    flexGrow: 1,
    paddingBottom: 86,
    paddingLeft: 4,
    paddingRight: 4,
  },
  columnWrapperStyle: {
    height: 150,
  },
});

export default SliderCards;
