// @flow
import React from 'react'
import ReactDOM from 'react-dom'

import store from './store/createStore'
import AppContainer from './routes/App/containers/AppContainer'
import { addLocaleData, IntlProvider } from 'react-intl'

import { i18n } from './helpers/i18n.helpers'
import { loadConf, config } from '/services/config.service'

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root')

let render = (messages, culture) => {
  const routes = require('./routes/App').default(store)

  ReactDOM.render(
    <IntlProvider locale={culture} messages={messages}>
      <AppContainer store={store} routes={routes} />
    </IntlProvider>,
    MOUNT_NODE
  )
}

function delayedInitialization () {
  // This code is excluded from production bundle

  // ========================================================
  // Localization Setup
  // ========================================================
  if (!i18n.culture) {
    i18n.culture = i18n.getCultureFromUrl()
  }

  const localeData = require(`react-intl/locale-data/${i18n._countryCode}`)
  const messages = require(`./i18n/${i18n._countryCode}.js`).default

  addLocaleData(localeData)

  if (__DEV__) {
    if (module.hot) {
      // Development render functions
      const renderApp = render
      const renderError = (error) => {
        const RedBox = require('redbox-react').default

        ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
      }

      // Wrap render in try/catch
      render = () => {
        try {
          renderApp(messages, i18n.culture)
        } catch (error) {
          console.error(error)
          renderError(error)
        }
      }

      // Setup hot module replacement
      module.hot.accept('./routes/App/index', () =>
        setImmediate(() => {
          ReactDOM.unmountComponentAtNode(MOUNT_NODE)
          render(messages, i18n.culture)
        })
      )
    }
  }

  // ========================================================
  // Go!
  // ========================================================
  render(messages, i18n.culture)
}

// Load async config file
const conf = loadConf()
conf.then((res: Object) => {
  res.json().then((jsonConf: { [key: string]: string }) => {
    config.conf = jsonConf
    delayedInitialization()
  })
})
