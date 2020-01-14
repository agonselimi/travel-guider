const categoriesReducer = (
  state = {count: 0, list: [], userInterestList: []},
  action,
) => {
  switch (action.type) {
    case 'TOGGLE':
      console.log('STATE', state);
      if (action.active === true) {
        return Object.assign({}, state, {
          count: state.count + 1,
          list: [...state.list, action.list],
        });
      } else {
        return Object.assign({}, state, {
          count: state.count - 1,
          list: state.list.filter(item => item.id !== action.list.id),
        });
      }

    case 'SET_USER_INTEREST':
      console.log('STATE', state);
      if (
        state.userInterestList.every(
          item => item.categoryID !== action.userInterestList.categoryID,
        )
      ) {
        return Object.assign({}, state, {
          userInterestList: [
            ...state.userInterestList,
            action.userInterestList,
          ],
        });
      } else {
        return Object.assign({}, state, {
          userInterestList: state.userInterestList.map(item =>
            item.categoryID === action.userInterestList.categoryID
              ? {...item, userInterest: action.userInterestList.userInterest}
              : item,
          ),
        });
      }
    default:
      return state;
  }
};

export default categoriesReducer;
