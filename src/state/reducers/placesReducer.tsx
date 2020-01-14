const placesReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_PLACES':
    return Object.assign({}, state, action.places);
    default:
      return state;
  }

};

export default placesReducer;
