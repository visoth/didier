import React from 'react'

import Wrapper from './Wrapper'

import List from './list'
import Answer from './answer'

export const chatbot = (props) => (
  <Wrapper>
    <List conversation={props.conversation} />
    <Answer actions={props.actions} />
  </Wrapper>
)

export default chatbot
