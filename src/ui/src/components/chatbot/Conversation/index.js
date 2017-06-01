// @flow
import React, { Component } from 'react'
import styled from 'styled-components'
import { FadeInUp } from 'animate-components'

type Props = {
  isMine: boolean
}

const Wrapper = styled.div`
  align-self: ${props => props.isMine ? 'flex-end' : null};
`

const Container = styled.div`
  margin-top: ${props => props.isMine ? '2rem' : null};
  padding: 0.5rem;
  border-radius: 2px;
  box-shadow: 0 1px 2px #A9A9A9;
  background-color: ${props => props.isMine ? '#A13AFD' : 'white'};
  font-size: ${props => props.isMine ? '16px' : '13px'};
  color: ${props => props.isMine ? 'white' : '#222222'};
  align-self: ${props => props.isMine ? 'flex-end' : null};
`

export default class Conversation extends Component {
  props: Props
  render () {
    if (this.props.isMine) {
      return (
        <Wrapper isMine={this.props.isMine}>
          <FadeInUp duration='0.25s' timingFunction='ease-in-out'>
            <Container isMine={this.props.isMine}>
              hello
            </Container>
          </FadeInUp>
        </Wrapper>
      )
    }
    return (
      <Container isMine={this.props.isMine}>
        hello
      </Container>
    )
  }
}
