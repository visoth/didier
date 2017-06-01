// @flow
import React from 'react'
import Wrapper from './Wrapper'

import Bot from '../bot'
import Conversation from '../Conversation'

export const List = () => (
  <Wrapper>
    <Bot />
    <Conversation isMine />
    <Bot />
  </Wrapper>
)

export default List
