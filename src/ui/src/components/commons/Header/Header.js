// @flow
import React from 'react'
import { NavLink } from 'react-router-dom'
import { injectIntl } from 'react-intl'
import { i18n } from '/helpers/i18n.helpers'
import './Header.css'

type Props = {
  intl: Object
}

export const Header = (props: Props) => (
  <div>
    <h1>{props.intl.messages.logo}</h1>
    <NavLink to={`/${i18n.culture}/`} exact activeClassName='route--active'>
      {props.intl.messages.home_url}
    </NavLink>
    { ' · ' }
    <NavLink to={`/${i18n.culture}/counter`} activeClassName='route--active'>
      {props.intl.messages.counter_url}
    </NavLink>
    { ' · ' }
    <span onClick={() => i18n.redirectToDefaultCulture()}>
      {i18n.culture}
    </span>
  </div>)

export default injectIntl(Header)
