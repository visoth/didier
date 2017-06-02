// @flow
import React from 'react'
import Avatar from './Avatar'
import Conversation from '../Conversation'
import Name from './Name'

import { FadeInUp } from 'animate-components'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  margin-top: 2rem;
`

export const Bot = (props) => (
  <FadeInUp duration='0.25s' timingFunction='ease-in-out'>
    <Wrapper>
      <Avatar />
      <Name
        label='Didier'
      />
      <Conversation {...props} />
    </Wrapper>
  </FadeInUp>
)

export default Bot
