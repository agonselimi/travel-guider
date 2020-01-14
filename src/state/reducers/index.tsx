import { combineReducers } from 'redux';
import signupReducer from './signupReducer';
import categoriesReducer from './categoriesReducer';
import loginReducer from './loginReducer';
import placesReducer from './placesReducer';
import userLocationReducer from './userLocationReducer';
import allPlacesReducer from './allPlacesReducer';

const allReducers = combineReducers({
  signUp: signupReducer,
  categories: categoriesReducer,
  login: loginReducer,
  places: placesReducer,
  userCoords: userLocationReducer,
  allPlaces: allPlacesReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }

  return allReducers(state, action)
}

export default rootReducer;
