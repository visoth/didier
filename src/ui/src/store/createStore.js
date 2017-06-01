import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'

import makeRootReducer from './reducers'
import rootSagas from './root.saga'

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory()

const configureStore = (initialState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const rootSagaMiddleware = createSagaMiddleware()
  const middleware = [rootSagaMiddleware, routerMiddleware(history)]

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = []

  let composeEnhancers = compose

  if (__DEV__) {
    const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    if (typeof composeWithDevToolsExtension === 'function') {
      composeEnhancers = composeWithDevToolsExtension
    }
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    makeRootReducer(),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )
  rootSagaMiddleware.run(rootSagas)
  store.asyncReducers = {}

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }

  return store
}

const initialState = window.___INITIAL_STATE__
// export default store
const store = configureStore(initialState)

export default store
