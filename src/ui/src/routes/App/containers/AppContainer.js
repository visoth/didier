// @flow
import React, { Component } from 'react'
import { Provider } from 'react-redux'

import { ConnectedRouter } from 'react-router-redux'

import { history } from '/store/createStore'

type Props = {
  routes: React.Element<*>,
  store: Object
}

class AppContainer extends Component {
  props: Props

  shouldComponentUpdate () {
    return false
  }

  render () {
    const { routes, store } = this.props

    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          <ConnectedRouter history={history} children={routes} />
        </div>
      </Provider>
    )
  }
}

export default AppContainer
