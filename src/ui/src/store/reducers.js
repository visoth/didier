// @flow
import { combineReducers } from 'redux'
import type { Reducer } from 'redux'

import { routerReducer } from 'react-router-redux'

export const makeRootReducer = (asyncReducers: Object) => {
  return combineReducers({
    router: routerReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store: Object, { key, reducer }: { key: string, reducer: Reducer<*, *>}) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
