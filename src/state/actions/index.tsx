const actions = {
  addUser(id, fullname, email, password) {
    return {
      type: 'ADD_USER',
      id,
      fullname,
      email,
      password,
    };
  },

  categoryData(active, list) {
    return {
      type: 'TOGGLE',
      active,
      list,
    };
  },

  placesData(places) {
    return {
      type: 'GET_PLACES',
      places,
    };
  },

  allPlacesData(places) {
    return {
      type: 'GET_ALL_PLACES',
      places,
    };
  },

  getUserCoords(coords) {
    return {
      type: 'GET_USER_COORDS',
      coords,
    };
  },

  getFullname(fullname, id, password) {
    return {
      type: 'GET_FULLNAME',
      fullname,
      id,
      password,
    };
  },

  setUserInterest(userInterestList) {
    return {
      type: 'SET_USER_INTEREST',
      userInterestList
    }
  },

  onLogout() {
    return {
      type: 'USER_LOGOUT',
    }
  }
};

export default actions;
