import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Wrapper from './Wrapper'

import Bot from '../bot'
import Conversation from '../Conversation'

export default class List extends Component {
  scrollToBottom = () => {
    const node = ReactDOM.findDOMNode(this.messagesEnd)
    node.scrollIntoView({ behavior: 'smooth' })
  }

  componentDidMount () {
    this.scrollToBottom()
  }

  componentDidUpdate () {
    this.scrollToBottom()
  }

  render () {
    return (
      <Wrapper >
        <Bot text={'yoooo man'} />
        {
          this.props.conversation.map((conv) => (conv.question ? <Conversation text={conv.question} isMine /> : <Bot text={conv.answer} />))
        }
        <div style={{ float: 'left', clear: 'both' }} ref={(el) => { this.messagesEnd = el }} />
      </Wrapper>
    )
  }
}
