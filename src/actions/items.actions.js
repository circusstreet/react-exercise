import {
  LOAD_ITEMS,
  UPDATE_ITEMS_REQUEST,
  UPDATE_ITEMS_SUCCESS,
  UPDATE_SELECTED_ITEMS_LIST
} from '../actionTypes'

import {API_ENDPOINT} from '../constants'

export const loadItems = data => {
  return {
    type: LOAD_ITEMS
  }
}

const toggleItemsStatus = (items, status) => {
  return items.map(item => {
      return {
        ...item,
        status
      }
  })
}

// Disable state items
export const updateItemsRequest = items => {
  return {
    isLoading: true,
    data: toggleItemsStatus(items, 'disabled'),
    type: UPDATE_ITEMS_REQUEST
  }
}


// Enable state items
export const updateItemsSuccess = items => {
  return {
    isLoading: false,
    data: toggleItemsStatus(items, 'enabled'),
    type: UPDATE_ITEMS_SUCCESS
  }
}


export const updateSelectedItemsLIst = list => {
  return {
    isLoading: false,
    selectedItemsId: list,
    type: UPDATE_SELECTED_ITEMS_LIST
  }
}

// fake an async request to API here:
export const updateItems = (selectedItemIds, items) => async (dispatch) => {
  dispatch(updateItemsRequest(items))

    try {

      const response = await fetch(`${API_ENDPOINT}`);
      const data = await response.json();

      return data;
    } catch (e) {
      //dispatch success action
      setTimeout(() => {
        dispatch(updateItemsSuccess(items))
       }, 5000)
    }
}
