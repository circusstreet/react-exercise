import {
  LOAD_ITEMS,
  UPDATE_ITEMS_REQUEST,
  UPDATE_ITEMS_SUCCESS,
} from '../actionTypes'

import items from '../dummy_data/all-lessons.json'

//initial state
const initState = {
  items,
  selectedItemsId: [],
  isLoading: false,
};

// all lessons could have come from the API
// for ease, just use fixture data instead:
export default (state = initState, action) => {
  switch (action.type) {
    case LOAD_ITEMS:
      return {...state}
    case UPDATE_ITEMS_REQUEST:
    case UPDATE_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.data,
        isLoading: action.isLoading
      }
    default:
      return state
  }
}
