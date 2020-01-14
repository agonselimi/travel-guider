const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_FULLNAME':
      return Object.assign({}, state, {
      fullname: action.fullname,
      id: action.id,
      password: action.password,
    })
    default:
      return state;
  }

};

export default loginReducer;
