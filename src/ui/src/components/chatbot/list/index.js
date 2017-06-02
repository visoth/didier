// @flow
import React from 'react'
import Wrapper from './Wrapper'

import Bot from '../bot'
import Conversation from '../Conversation'

export const List = (convesations) => (
  <Wrapper>
    {
      convesations.map(c => c.answer ? [<Conversation isMine />, <Bot />] : <Conversation isMine />)
    }
  </Wrapper>
)

export default List
