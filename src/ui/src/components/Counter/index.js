// @flow
import React from 'react'
import { injectIntl } from 'react-intl'
import type { Action } from '/routes/Counter/modules/counter.model'

type Props = {
  counter: number,
  intl: Object,
  actions: {
    increment: () => Action,
    doubleAsync: () => Action,
  }
}

export const Counter = (props: Props) => (
  <div>
    <h2>{props.intl.messages.counter_name}: {props.counter}</h2>
    <button className='btn btn-default' onClick={props.actions.increment}>
      {props.intl.messages.increment}
    </button>
    {' '}
    <button className='btn btn-default' onClick={props.actions.doubleAsync}>
      {props.intl.messages.double_async}
    </button>
  </div>
)

export default injectIntl(Counter)
