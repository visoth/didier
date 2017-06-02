// @flow
import React from 'react'

import Wrapper from './Wrapper'

import List from './list'
import Answer from './answer'

export const chatbot = (conversations) => (
  <Wrapper>
    <List conversations={conversations} />
    <Answer />
  </Wrapper>
)

export default chatbot
