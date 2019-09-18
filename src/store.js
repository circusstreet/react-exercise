import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'

const enhancers = []
const initialState = {};

// redux dev tools monitor
const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__
if (typeof devToolsExtension === 'function') {
  enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__())
}

const composedEnhancers = compose(
  applyMiddleware(thunk),
  ...enhancers,
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

export default store

