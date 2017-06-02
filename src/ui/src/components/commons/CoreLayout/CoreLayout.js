// @flow
import React from 'react'
import Chatbot from '../../chatbot'
import bg from './img/bg.png'
import styled from 'styled-components'
import { FadeIn } from 'animate-components'
import Floating from '../../floatingBtn'

const Wrapper = styled.div`
  height: 100%;
  background: #F5F5F5 url(${bg}) no-repeat center;
  background-size: cover;
`

const Chat = styled.div`
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  height: 400px;
`

const Btn = styled.div`
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  z-index: 1;
`

const ChatContainer = styled.div`
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto';
  font-size: 1rem;
  line-height: 1.25;
  background-color: #F5F5F5;
  position: absolute;
  right: 2rem;
  bottom: 1.25rem;
  box-shadow: 0 0.125rem 0.5rem #A9A9A9;
`

import '/styles/core.css'

export const CoreLayout = () => (
  <Wrapper>
    <Chat>
      <Btn>
        <Floating />
      </Btn>
      <FadeIn duration='0.5s' timingFunction='ease-in-out'>
        <ChatContainer>
          <Chatbot />
        </ChatContainer>
      </FadeIn>
    </Chat>
  </Wrapper>
)

export default CoreLayout
