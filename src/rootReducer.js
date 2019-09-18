import { combineReducers } from 'redux'
import items from './reducers'

// combine all component reducers
export default combineReducers({
  data: items,
})
