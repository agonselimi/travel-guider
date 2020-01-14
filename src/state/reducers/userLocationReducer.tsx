const userLocationReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_USER_COORDS':
    return Object.assign({}, state, action.coords);
    default:
      return state;
  }

};

export default userLocationReducer;
