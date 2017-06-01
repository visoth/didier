// @flow
import React from 'react'
import { injectIntl } from 'react-intl'
import DuckImage from './assets/Duck.jpg'
import './HomeView.css'

type Props = {
  intl: Object
}

export const HomeView = (props: Props) => (
  <div>
    <h4>{props.intl.messages.welcome}</h4>
    <img
      alt='This is a duck, because Redux!'
      className='duck'
      src={DuckImage} />
  </div>
)

export default injectIntl(HomeView)
