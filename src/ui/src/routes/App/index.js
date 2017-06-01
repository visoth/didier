// @flow
import React from 'react'
import { Route } from 'react-router-dom'

import { i18n } from '/helpers/i18n.helpers'

// We only need to import the modules necessary for initial render
import CoreLayout from '/components/commons/CoreLayout'
import Home from '/routes/Home'
import Header from '/components/commons/Header'
import Counter from '/routes/Counter'

export const createRoutes = (store: Object) => (
  <CoreLayout header={Header}>
    <Route exact path={`/${i18n.culture}/counter`} component={Counter(store)} />
    <Route exact path={`/${i18n.culture}/`} component={Home} />
  </CoreLayout>
)

export default createRoutes
