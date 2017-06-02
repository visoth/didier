import React from 'react'
import { Route } from 'react-router-dom'
import { i18n } from '/helpers/i18n.helpers'

// We only need to import the modules necessary for initial render
import CoreLayout from '/components/commons/CoreLayout'
import Home from '/routes/Home'

export const createRoutes = (store) => (
  <CoreLayout>
    <Route exact path={`/${i18n.culture}/`} component={Home(store)} />
  </CoreLayout>
)

export default createRoutes
