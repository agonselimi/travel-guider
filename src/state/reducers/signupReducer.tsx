import uuid from 'uuid/v4';

const signupReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_USER':
    return Object.assign({}, state, {
      id: action.id,
      fullname: action.fullname,
      email: action.email,
      password: action.password,
  })
    default:
      return state;
  }

};

export default signupReducer;
