const allPlacesReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_ALL_PLACES':
    return Object.assign({}, state, action.places);
    default:
      return state;
  }

};

export default allPlacesReducer;
