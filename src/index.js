import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'

import Items from './components/Items.component'

import './styles/styles.scss'

import store from './store'

render(
  <Provider store={store}>
    <Items />
  </Provider>,
  document.getElementById('root')
)
