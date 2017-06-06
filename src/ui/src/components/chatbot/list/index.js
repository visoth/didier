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

  componentWillReceiveProps (nextProps) {
    const lastResponse = nextProps.conversation.slice(-1)[0]
    console.log('lastresponse: ', lastResponse)
    if (lastResponse.sound) {
      const botSpeech = new SpeechSynthesisUtterance()
      botSpeech.text = lastResponse.answer.replace(/(<([^>]+)>)|(\[[\d]+\])/ig, '')
      botSpeech.lang = 'fr'
      botSpeech.rate = 1
      speechSynthesis.speak(botSpeech)
    }
  }

  componentDidUpdate () {
    this.scrollToBottom()
  }

  render () {
    return (
      <Wrapper >
        <Bot text={'Bonjour, Didier a votre service, en quoi pourrai-je vous etre utile ?'} />
        {
          this.props.conversation.map((conv) => (conv.question ? <Conversation key={Math.random()} text={conv.question} isMine /> : <Bot key={Math.random()} text={conv.answer} />))
        }
        <div style={{ float: 'left', clear: 'both' }} ref={(el) => { this.messagesEnd = el }} />
      </Wrapper>
    )
  }
}
