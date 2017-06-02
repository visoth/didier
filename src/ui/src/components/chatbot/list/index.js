import React from 'react'
import Wrapper from './Wrapper'

import Bot from '../bot'
import Conversation from '../Conversation'

export const List = (props) => (
  <Wrapper>
    <Bot text={'yoooo man'} />
    {
      props.conversation.map((conv) => {
        return [
          <Conversation text={conv.question} isMine />,
          <Bot text={conv.answer} />
        ]
      })
    }
  </Wrapper>
)

export default List
