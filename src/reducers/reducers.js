import { SET_FILTER, SET_DOCUMENTARIES } from '../actions/actions';

import { combineReducers } from 'redux';

// Reducers

// Initialized with a empty array of movies "state = []"
function documentaries(state = [], action) {
  switch (action.type) {
    case SET_DOCUMENTARIES:
      return action.value;
    default:
      return state;
  }
}

// Setting defaults in this way is essential for any reducer "(state = '', action)"
// If state were to be undefined and the action out of scope for a reducer 
//  the reducer would return whatever it was passed as the visibilityFilter state, in this case, an empty string ''.
function visibilityFilter(state = '', action) {
  switch (action.type) {
    case SET_FILTER:
      return action.value;
    // if not changes, return a default state
    default:
      return state;
  }
}

{/*
// combine reducer ( made form other reducers)

function documentariesApp (state = {}, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    documentaries: documentaries(state.documentaries, action)
  }
}
*/}

const documentariesApp = combineReducers({
  documentaries,
  visibilityFilter
});

export default documentariesApp;