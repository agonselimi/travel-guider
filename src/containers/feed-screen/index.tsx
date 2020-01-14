import React, {useState, useCallback, useMemo, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  Alert,
} from 'react-native';
import Card from './card';
import Navbar from './navbar';
import {db} from '../../config';
import {useDispatch} from 'react-redux';
import actions from '../../state/actions';
import {connect} from 'react-redux';

// const places = [];
const ref = db.collection('places');

// ref.onSnapshot(querySnapshot => {
//   querySnapshot.forEach(doc => {
//     const { name, imagepath, description, reviews, category, coords } = doc.data();
//     places.push({
//       id: doc.id,
//       name,
//       imagepath,
//       description,
//       reviews,
//       category,
//       coords
//     });
//   });
// });

function Feed(props) {
  const [places, setPlaces] = useState([]);

  const query = db.collection('users').doc(props.userId);

  useEffect(() => {
    return ref.onSnapshot(querySnapshot => {
      const list = [];

      query.get().then(userDoc => {
        const categoryInterest = userDoc.data().userInterestList;
        querySnapshot.forEach(doc => {
          const {
            name,
            imagepath,
            description,
            reviews,
            category,
            coords,
          } = doc.data();

          const userSatisfaction = [];

          category.forEach(categoryItem => {
            categoryInterest.forEach(userItem => {
              if (
                Object.getOwnPropertyNames(categoryItem).toString() ===
                userItem.categoryName
              ) {
                let placeCategory = Object.values(categoryItem).toString();
                if (placeCategory === '3' && userItem.userInterest === 3) {
                  userSatisfaction.push(
                    parseInt(placeCategory) * userItem.userInterest + 3,
                  );
                } else {
                  userSatisfaction.push(
                    parseInt(placeCategory) * userItem.userInterest,
                  );
                }
              }
            });
          });

          let sum = 0;

          for (let num of userSatisfaction) {
            sum = sum + num;
          }

          const satisfactionFactor = (100 * sum) / 36;

          if (satisfactionFactor !== 0) {
            list.push({
              id: doc.id,
              name,
              imagepath,
              description,
              reviews,
              category,
              coords,
              satisfactionFactor,
            });
          }
        });
        setPlaces(list);
      });
    });
  }, []);

  const data = useMemo(() => places, [places]);


  const dispatch = useDispatch();
  dispatch(actions.allPlacesData(data))
  return (
    <ScrollView>
      <FlatList
        data={data.sort((a, b) => b.satisfactionFactor - a.satisfactionFactor)}
        style={styles.flatList}
        contentContainerStyle={styles.contentContainerStyle}
        numColumns={1}
        columnWrapperStyle={styles.columnWrapperStyle}
        renderItem={useCallback(
          ({item}) => (
            <Card
              onPress={() => {
                props.navigation.navigate('MoreInfo');
                dispatch(actions.placesData(item));
              }}
              {...item}
            />
          ),
          [],
        )}
        keyExtractor={item => item.id}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    backgroundColor: 'white',
    borderBottomColor: '#C8C8C8',
    borderBottomWidth: 0.5,
    paddingBottom: 6,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 6,
  },
  body: {
    flex: 1,
    marginLeft: -16,
  },
  flatList: {},
  contentContainerStyle: {
    backgroundColor: 'white',
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
  },
});
function mapStateToProps(state) {
  console.log('STATEeeeee', state);
  return {
    userInterestList: state.categories.userInterestList,
    userId: state.login.id,
  };
}

export default connect(mapStateToProps)(Feed);
